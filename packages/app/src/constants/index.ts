import dotenv from 'dotenv';
import { resolve } from 'path';

// Load environment variables from .env file
dotenv.config({ path: resolve(__dirname, `../../../../.env.${process.env.NODE_ENV || 'development'}.local`) });

// Set environment variables
const SERVER_URL: string = (process.env.SERVER_URL as string) || `http://localhost:3201`;

export { SERVER_URL };

export const { NODE_ENV } = process.env;
