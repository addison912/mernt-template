import { ILogin } from '@/../types/dist';
import { SERVER_URL } from '@constants';

// const urlString = `http://localhost:3201/users`;
// const url: URL = new URL(urlString);
// const login = async (values: ILogin) => {
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   console.log(url);
//   console.log(values);
// };
const login = async (values: ILogin) => {
  const response = await fetch(`${SERVER_URL}/users`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });
  const res = response.json();
  console.log(res);
  return res;
};

export { login };
