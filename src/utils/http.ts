import axios from 'axios';

export const createUser = async ({
  firstName,
  lastName,
  email,
  password,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}): Promise<any> =>
  await axios.post('http://localhost:4000/users', {
    firstName,
    lastName,
    email,
    hashedPassword: password,
    picture: '',
  });
