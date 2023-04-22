import { cleanEnv, port, str } from 'envalid';

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    SERVER_PORT: port(),
  });
};

export default validateEnv;
