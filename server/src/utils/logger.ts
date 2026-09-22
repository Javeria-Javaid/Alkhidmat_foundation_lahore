// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - STRUCTURED LOGGER
// ==============================================================================

import { env } from '../config/env.js';

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Logger {
  private format(level: LogLevel, message: string, meta?: unknown): string {
    const timestamp = new Date().toISOString();
    const metaStr = meta ? ` ${JSON.stringify(meta)}` : '';
    return `[${timestamp}] [${level.toUpperCase()}] ${message}${metaStr}`;
  }

  public debug(message: string, meta?: unknown): void {
    if (env.NODE_ENV === 'development' || env.NODE_ENV === 'test') {
      console.debug(this.format('debug', message, meta));
    }
  }

  public info(message: string, meta?: unknown): void {
    console.info(this.format('info', message, meta));
  }

  public warn(message: string, meta?: unknown): void {
    console.warn(this.format('warn', message, meta));
  }

  public error(message: string, meta?: unknown): void {
    console.error(this.format('error', message, meta));
  }
}

export const logger = new Logger();
