import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

loadDotEnv();

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map((origin) => origin.trim()).filter(Boolean)
  : ['http://localhost:5173'];

export const config = {
  port: Number(process.env.PORT || 4000),
  nodeEnv: process.env.NODE_ENV || 'development',
  allowedOrigins,
  emailDeliveryMode: process.env.EMAIL_DELIVERY_MODE || 'log',
  awsRegion: process.env.AWS_REGION || 'eu-central-1',
  sesFromEmail: process.env.SES_FROM_EMAIL || '',
  internalAppointmentsEmail: process.env.INTERNAL_APPOINTMENTS_EMAIL || '',
};

export function validateRuntimeConfig(): void {
  if (config.emailDeliveryMode === 'ses') {
    const missing: string[] = [];

    if (!config.sesFromEmail) {
      missing.push('SES_FROM_EMAIL');
    }

    if (!config.internalAppointmentsEmail) {
      missing.push('INTERNAL_APPOINTMENTS_EMAIL');
    }

    if (missing.length > 0) {
      throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
    }
  }
}

function loadDotEnv(): void {
  const envPath = resolve(process.cwd(), '.env');

  if (!existsSync(envPath)) {
    return;
  }

  const lines = readFileSync(envPath, 'utf8').split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const separatorIndex = trimmed.indexOf('=');

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}
