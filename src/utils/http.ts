import axios from 'axios';

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<any> =>
  await axios.post(`http://localhost:4000/auth/login`, {
    email,
    hashedPassword: password,
  });
