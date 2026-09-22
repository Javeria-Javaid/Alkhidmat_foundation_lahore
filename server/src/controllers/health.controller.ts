// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - HEALTH CHECK CONTROLLER
// ==============================================================================

import { Request, Response, NextFunction } from 'express';
import { healthService } from '../services/health.service.js';
import { sendSuccess } from '../utils/response.util.js';

export const getHealth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const health = await healthService.checkHealth();
    const statusCode = health.status === 'healthy' ? 200 : 503;
    sendSuccess(res, health, `System is ${health.status}`, statusCode);
  } catch (error) {
    next(error);
  }
};
