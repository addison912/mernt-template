import { config } from 'dotenv';
config({ path: `../../../../.env.${process.env.NODE_ENV || 'development'}.local` });

const SERVER_URL: string = process.env.SERVER_URL || `http://localhost:${process.env.SERVER_PORT}`;

export { SERVER_URL };

export const { NODE_ENV } = process.env;
