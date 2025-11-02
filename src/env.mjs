import { z } from 'zod';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    NEXTAUTH_SECRET: z.string().min(1).optional().default('MAI_HU_SECRET_KEY'),
    NEXTAUTH_URL: z.preprocess(
      (str) => process.env.VERCEL_URL ?? str,
      process.env.VERCEL ? z.string().min(1).default('https://example.com') : z.string().url()
    ).default('https://example.com'),
    NEXT_PUBLIC_VERCEL_URL: z.string().min(1).optional().default("https://isomorphic-furyroad.vercel.app"),
    SMTP_HOST: z.string().optional().default('default_smtp_host'),
    SMTP_PORT: z.string().optional().default('default_smtp_port'),
    SMTP_USER: z.string().optional().default('default_smtp_user'),
    SMTP_PASSWORD: z.string().optional().default('default_smtp_password'),
    SMTP_FROM_EMAIL: z.string().email().optional().default('default@example.com'),
    GOOGLE_CLIENT_ID: z.string().optional().default('default_google_client_id'),
    GOOGLE_CLIENT_SECRET: z.string().optional().default('default_google_client_secret'),
  },
  client: {
    NEXT_PUBLIC_APP_NAME: z.string().optional().default('default_app_name'),
    NEXT_PUBLIC_GOOGLE_MAP_API_KEY: z.string().optional().default('default_google_map_api_key'),
  },
  runtimeEnv: process.env,
});
