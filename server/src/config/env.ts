// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - VALIDATED ENVIRONMENT CONFIGURATION
// ==============================================================================

import { z } from 'zod';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from server directory
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().default(5000),
  FRONTEND_URL: z.string().url().default('http://localhost:5173'),
  
  // Optional Database URL (in case an external database is connected in future)
  DATABASE_URL: z.string().optional(),

  // Dispatcher & Notification Mode
  DISPATCH_MODE: z.enum(['console', 'smtp', 'resend']).default('console'),
  NOTIFICATION_EMAIL_CONTACT: z.string().email().default('info@alkhidmat.com.pk'),
  NOTIFICATION_EMAIL_VOLUNTEER: z.string().email().default('volunteer@alkhidmat.com.pk'),
  NOTIFICATION_EMAIL_COLLECTION: z.string().email().default('collections@alkhidmat.com.pk'),
  NOTIFICATION_EMAIL_HR: z.string().email().default('hr@alkhidmat.com.pk'),

  // Optional SMTP Settings (when DISPATCH_MODE=smtp)
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  SMTP_FROM: z.string().optional(),

  // Optional Resend API Key (when DISPATCH_MODE=resend)
  RESEND_API_KEY: z.string().optional(),

  // Rate Limiting
  RATE_LIMIT_WINDOW_MS: z.coerce.number().default(15 * 60 * 1000),
  RATE_LIMIT_MAX: z.coerce.number().default(100),
});

const parseEnv = () => {
  const result = envSchema.safeParse(process.env);

  if (!result.success) {
    const errorDetails = result.error.format();
    console.error('❌ FATAL: Invalid environment variable configuration:');
    console.error(JSON.stringify(errorDetails, null, 2));
    throw new Error('Invalid environment configuration. Check server logs.');
  }

  return result.data;
};

export const env = parseEnv();
export type EnvConfig = z.infer<typeof envSchema>;
