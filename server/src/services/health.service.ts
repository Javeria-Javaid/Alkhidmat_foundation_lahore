// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - HEALTH MONITORING SERVICE
// ==============================================================================

import { prisma } from '../config/database.js';

export interface HealthCheckResult {
  status: 'healthy' | 'degraded';
  timestamp: string;
  uptimeSeconds: number;
  environment: string;
  database: {
    status: 'connected' | 'disconnected';
    latencyMs?: number;
    error?: string;
  };
  system: {
    memoryUsageMB: number;
    nodeVersion: string;
  };
}

export class HealthService {
  public async checkHealth(): Promise<HealthCheckResult> {
    const startTime = Date.now();
    let dbStatus: 'connected' | 'disconnected' = 'disconnected';
    let dbLatency: number | undefined;
    let dbError: string | undefined;

    try {
      // Lightweight query to verify database liveness
      await prisma.$queryRaw`SELECT 1`;
      dbLatency = Date.now() - startTime;
      dbStatus = 'connected';
    } catch (err: unknown) {
      dbStatus = 'disconnected';
      dbError = err instanceof Error ? err.message : 'Database ping failed';
    }

    const memoryUsage = process.memoryUsage();
    const memoryUsageMB = Math.round((memoryUsage.heapUsed / 1024 / 1024) * 100) / 100;

    return {
      status: dbStatus === 'connected' ? 'healthy' : 'degraded',
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      environment: process.env.NODE_ENV || 'development',
      database: {
        status: dbStatus,
        latencyMs: dbLatency,
        error: dbError,
      },
      system: {
        memoryUsageMB,
        nodeVersion: process.version,
      },
    };
  }
}

export const healthService = new HealthService();
