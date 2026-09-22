// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - RATE LIMITING MIDDLEWARE
// ==============================================================================

import rateLimit from 'express-rate-limit';
import { env } from '../config/env.js';
import { sendError } from '../utils/response.util.js';

export const globalRateLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    sendError(
      res,
      'Too many requests received from this IP. Please try again later.',
      429,
      { code: 'RATE_LIMIT_EXCEEDED' }
    );
  },
});

export const strictRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Max 10 attempts per 15 minutes (for login, public submissions)
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    sendError(
      res,
      'Submission threshold reached. Please wait a few minutes before trying again.',
      429,
      { code: 'STRICT_RATE_LIMIT_EXCEEDED' }
    );
  },
});
