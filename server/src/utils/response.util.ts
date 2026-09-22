// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - STANDARDIZED API RESPONSE UTILITIES
// ==============================================================================

import { Response } from 'express';
import { ApiResponse, PaginationMeta, ApiErrorDetail } from '../types/api.types.js';

export const sendSuccess = <T>(
  res: Response,
  data?: T,
  message: string = 'Success',
  statusCode: number = 200,
  meta?: PaginationMeta
): Response<ApiResponse<T>> => {
  const payload: ApiResponse<T> = {
    success: true,
    message,
    data,
    meta,
    timestamp: new Date().toISOString(),
  };

  return res.status(statusCode).json(payload);
};

export const sendError = (
  res: Response,
  message: string = 'An error occurred',
  statusCode: number = 500,
  errorDetail?: ApiErrorDetail
): Response<ApiResponse<never>> => {
  const payload: ApiResponse<never> = {
    success: false,
    message,
    error: errorDetail,
    timestamp: new Date().toISOString(),
  };

  return res.status(statusCode).json(payload);
};
