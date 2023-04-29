import { config } from 'dotenv';
config({ path: `../../.env.${process.env.NODE_ENV || 'development'}.local` });
export const DOMAIN = `${process.env.DOMAIN}` || `http://localhost:${process.env.PORT}`;
export const { NODE_ENV, PORT } = process.env;
