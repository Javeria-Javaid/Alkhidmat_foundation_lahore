// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - PRISMA DATABASE CLIENT & LIFECYCLE
// ==============================================================================

import { PrismaClient } from '@prisma/client';
import { logger } from '../utils/logger.js';
import { env } from './env.js';

const prismaClientSingleton = () => {
  return new PrismaClient({
    log: env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });
};

declare global {
  // eslint-disable-next-line no-var
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = prisma;
}

export const connectDatabase = async (): Promise<boolean> => {
  try {
    await prisma.$connect();
    logger.info('✅ PostgreSQL connected successfully via Prisma');
    return true;
  } catch (error) {
    logger.error('❌ Failed to connect to PostgreSQL database:', error);
    return false;
  }
};

export const disconnectDatabase = async (): Promise<void> => {
  try {
    await prisma.$disconnect();
    logger.info('Database disconnected cleanly');
  } catch (error) {
    logger.error('Error disconnecting database:', error);
  }
};
