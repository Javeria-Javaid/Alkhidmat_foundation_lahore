// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - CENTRAL ERROR HANDLER MIDDLEWARE
// ==============================================================================

import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../types/api.types.js';
import { sendError } from '../utils/response.util.js';
import { logger } from '../utils/logger.js';
import { env } from '../config/env.js';

export const errorHandler: ErrorRequestHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void => {
  // 1. Handled Operational Application Errors
  if (err instanceof AppError) {
    logger.warn(`AppError [${err.statusCode}] at ${req.method} ${req.path}: ${err.message}`, {
      code: err.code,
      details: err.details,
    });
    sendError(res, err.message, err.statusCode, {
      code: err.code,
      details: err.details,
    });
    return;
  }

  // 2. Zod Request Validation Errors
  if (err instanceof ZodError) {
    const formattedErrors = err.errors.map((issue) => ({
      field: issue.path.join('.'),
      message: issue.message,
    }));

    logger.warn(`Validation failed at ${req.method} ${req.path}`, formattedErrors);
    sendError(res, 'Request validation failed', 422, {
      code: 'VALIDATION_ERROR',
      details: formattedErrors,
    });
    return;
  }

  // 3. JSON Syntax / Parsing Error (e.g. malformed JSON body)
  if (err instanceof SyntaxError && 'body' in err) {
    logger.warn(`Malformed JSON body received at ${req.method} ${req.path}`);
    sendError(res, 'Invalid JSON payload provided', 400, {
      code: 'INVALID_JSON',
    });
    return;
  }

  // 4. Prisma Known Request Errors
  if (err.name === 'PrismaClientKnownRequestError') {
    const prismaError = err as unknown as { code: string; meta?: Record<string, unknown> };
    logger.error(`Database error [${prismaError.code}] at ${req.method} ${req.path}`, prismaError.meta);

    if (prismaError.code === 'P2002') {
      sendError(res, 'A record with this unique value already exists.', 409, {
        code: 'UNIQUE_CONSTRAINT_VIOLATION',
      });
      return;
    }

    if (prismaError.code === 'P2025') {
      sendError(res, 'Requested resource was not found.', 404, {
        code: 'RECORD_NOT_FOUND',
      });
      return;
    }
  }

  // 5. Unhandled / Internal Server Errors
  logger.error(`Unhandled Exception at ${req.method} ${req.path}:`, err);

  const errorMessage =
    env.NODE_ENV === 'production'
      ? 'An internal server error occurred. Please try again later.'
      : err.message || 'Internal Server Error';

  sendError(res, errorMessage, 500, {
    code: 'INTERNAL_SERVER_ERROR',
    details: env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};
