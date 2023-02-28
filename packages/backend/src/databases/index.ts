import { DB_HOST, DB_PORT, DB_DATABASE } from '@config';

export const dbConnection = {
  url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  options: {},
  callback: () => {
    console.log(`Connected to MongoDB: ${dbConnection.url}`);
  },
};
