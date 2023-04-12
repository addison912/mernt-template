import { config } from 'dotenv';
config({ path: `../../.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const {
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD,
  NODE_ENV,
  SERVER_PORT,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  SECRET_KEY,
  LOG_FORMAT,
  LOG_DIR,
  ORIGIN,
} = process.env;
