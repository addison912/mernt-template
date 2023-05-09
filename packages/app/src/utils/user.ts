import { ILogin } from '@/../types/dist';
import { SERVER_URL } from '@constants';

const login = async (values: ILogin) => {
  const response = await fetch(`${SERVER_URL}/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });
  const res = response.json();
  return res;
};

export { login };
