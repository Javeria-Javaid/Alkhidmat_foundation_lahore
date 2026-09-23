// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - HEALTH MONITORING SERVICE
// ==============================================================================

import { env } from '../config/env.js';

export interface HealthCheckResult {
  status: 'healthy' | 'degraded';
  timestamp: string;
  uptimeSeconds: number;
  environment: string;
  architecture: {
    mode: 'database-free-dispatcher' | 'database-connected';
    dispatcherMode: string;
  };
  system: {
    memoryUsageMB: number;
    nodeVersion: string;
  };
}

export class HealthService {
  public async checkHealth(): Promise<HealthCheckResult> {
    const memoryUsage = process.memoryUsage();
    const memoryUsageMB = Math.round((memoryUsage.heapUsed / 1024 / 1024) * 100) / 100;

    return {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      environment: env.NODE_ENV,
      architecture: {
        mode: env.DATABASE_URL ? 'database-connected' : 'database-free-dispatcher',
        dispatcherMode: env.DISPATCH_MODE,
      },
      system: {
        memoryUsageMB,
        nodeVersion: process.version,
      },
    };
  }
}

export const healthService = new HealthService();
