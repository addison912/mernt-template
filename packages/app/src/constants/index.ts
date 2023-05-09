import { config } from 'dotenv';
config({ path: `../../../../.env.${process.env.NODE_ENV || 'development'}.local` });

const SERVER_URL: string = (process.env.SERVER_URL as string) || `http://localhost:3201`;

export { SERVER_URL };

export const { NODE_ENV } = process.env;
