import { config } from 'dotenv';
config({ path: `../../.env.${process.env.NODE_ENV || 'development'}.local` });

const CREDENTIALS = process.env.CREDENTIALS === 'true';
const APP_URL: string = process.env.APP_URL || `http://localhost:${process.env.APP_PORT}`;

export { CREDENTIALS, APP_URL };

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
  GOOGLE_ID,
  GOOGLE_SECRET,
} = process.env;
