// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - SERVER ENTRY POINT & LIFECYCLE
// ==============================================================================

import { createApp } from './app.js';
import { env } from './config/env.js';
import { connectDatabase, disconnectDatabase } from './config/database.js';
import { logger } from './utils/logger.js';
import { Server } from 'http';

const app = createApp();

let server: Server;

const startServer = async () => {
  try {
    // Attempt database connection on startup
    await connectDatabase();

    server = app.listen(env.PORT, () => {
      logger.info(`🚀 Alkhidmat Lahore Backend API running on port ${env.PORT} [${env.NODE_ENV}]`);
      logger.info(`🔗 Health check available at: http://localhost:${env.PORT}/api/health`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

const handleShutdown = async (signal: string) => {
  logger.info(`Received ${signal}. Starting graceful shutdown...`);

  if (server) {
    server.close(async () => {
      logger.info('HTTP server closed.');
      await disconnectDatabase();
      process.exit(0);
    });

    // Force close after 10 seconds if lingering
    setTimeout(() => {
      logger.error('Could not close connections in time, forcefully shutting down');
      process.exit(1);
    }, 10000);
  } else {
    await disconnectDatabase();
    process.exit(0);
  }
};

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));

startServer();
