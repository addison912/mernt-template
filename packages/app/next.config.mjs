import dotenv from 'dotenv';
import process from 'process';
import { resolve, dirname } from 'path';

// @ts-check
dotenv.config({ path: resolve(dirname(import.meta.url), `../../../../.env.${process.env.NODE_ENV || 'development'}.local`) });

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    SERVER_URL: process.env.SERVER_URL || `http://localhost:3201`,
  },
};

export default nextConfig;
