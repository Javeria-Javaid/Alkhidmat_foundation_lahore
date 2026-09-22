// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - EXPRESS APPLICATION INITIALIZATION
// ==============================================================================

import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env.js';
import { requestLogger } from './middleware/requestLogger.js';
import { globalRateLimiter } from './middleware/rateLimiter.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import apiRoutes from './routes/index.js';

export const createApp = (): Express => {
  const app = express();

  // 1. Security Headers (Helmet)
  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: 'cross-origin' },
      contentSecurityPolicy: env.NODE_ENV === 'production' ? undefined : false,
    })
  );

  // 2. Cross-Origin Resource Sharing (CORS)
  app.use(
    cors({
      origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps, curl, server-to-server)
        if (!origin) return callback(null, true);

        // Allow configured frontend origin or local dev origins
        const allowedOrigins = [env.FRONTEND_URL];
        if (env.NODE_ENV === 'development') {
          allowedOrigins.push('http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:3000');
        }

        if (allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error(`CORS blocked for origin: ${origin}`));
        }
      },
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    })
  );

  // 3. Request Parsing & Payload Size Limits
  app.use(express.json({ limit: '10kb' }));
  app.use(express.urlencoded({ extended: true, limit: '10kb' }));

  // 4. Request Logging
  app.use(requestLogger);

  // 5. Global Rate Limiting on API
  app.use('/api', globalRateLimiter);

  // 6. Mount API Routes
  app.use('/api', apiRoutes);

  // 7. 404 Not Found Handler for unmatched routes
  app.use(notFoundHandler);

  // 8. Central Error Handler
  app.use(errorHandler);

  return app;
};
