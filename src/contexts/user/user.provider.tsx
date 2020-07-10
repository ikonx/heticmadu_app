import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import * as jwtDecode from 'jwt-decode';
import * as SecureStore from 'expo-secure-store';

import UserContext from './user.context';
import {
  loginUser as loginUserAPI,
  createUser,
  getUser,
  updateUser,
} from '@utils/http';
import { UserModel } from '@src/utils/models/user.model';

interface Props {}

const UserProvider: React.FC<Props> = ({ children }: any) => {
  const [user, setUser] = useState<UserModel>({
    isLogin: true,
    gotError: false,
    email: 'Julien@gmail.com',
    firstName: 'Julien',
    id: '5',
    lastName: 'Dupreh',
    picture:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
  });

  const loginUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const response = await loginUserAPI({ email, password });
    if (response.status === 201) {
      const token = response.data;
      const { user } = jwtDecode.default(token);
      setUser({ ...user, token, isLogin: true, gotError: false });
      SecureStore.setItemAsync('token', token);
    } else {
      setUser({ ...user, token: '', isLogin: false, gotError: true });
    }
    return response;
  };

  const logout = () => {
    setUser({
      token: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isLogin: false,
      gotError: false,
    });
    SecureStore.deleteItemAsync('token');
    return true;
  };

  const checkToken = async () => {
    const token = await SecureStore.getItemAsync('token');
    if (token) {
      const { exp, user } = jwtDecode.default(token);
      const expDate = moment.unix(exp);
      const now = moment();
      if (now.isAfter(expDate)) {
        console.log('token expiré');
        SecureStore.setItemAsync('token', '');
        setUser({ ...user, token: '', isLogin: false });
      } else {
        console.log('bon token');
        SecureStore.setItemAsync('token', token);
        setUser({ ...user, token, isLogin: true });
      }
    } else {
      console.log('pas de token');
      setUser({ ...user, token: '', isLogin: false });
    }
  };

  const createUserAccount = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) => {
    createUser({ firstName, lastName, email, password })
      .then((res) => {
        const response = res;
        if (response.status === 201) {
          const token = response.data;
          const { user } = jwtDecode.default(token);
          SecureStore.setItemAsync('token', token);
          setUser({ ...user, token, isLogin: true });
        }
        if (
          response.status === 404 ||
          response.status === 401 ||
          response.status === 500
        ) {
          console.log('error', 404 || 401 || 500);
          setUser({ ...user, token: '', isLogin: false, gotError: true });
        }
      })
      .catch((err: any) => console.log(err));
  };

  const getUserAccount = async () => {
    await getUser(user.id!).then((res) => {
      const response = res;
      if (response.status === 201) {
        setUser({ ...response.data, isLogin: true, gotError: false });
        console.log('response.data', response.data);
      }
      if (
        response.status === 404 ||
        response.status === 401 ||
        response.status === 500
      ) {
        console.log('error', 404 || 401 || 500);
        setUser({ ...user, token: '', isLogin: false, gotError: true });
      }
    });
  };

  const updateUserAccount = async (_user: {
    id: string;
    lastName: string;
    firstName: string;
    email: string;
    picture: string;
  }) => {
    return await updateUser({
      id: _user.id!,
      lastName: _user.lastName,
      firstName: _user.firstName,
      email: _user.email!,
      picture: _user.picture!,
    }).then((response) => {
      if (response.status === 200) {
        const token = response.data;
        SecureStore.setItemAsync('token', token);
        const { user } = jwtDecode.default(token);
        console.log('updated', user);
        setUser({ ...user, token });
      }
      if (
        response.status === 404 ||
        response.status === 401 ||
        response.status === 500
      ) {
        console.log('error', 404 || 401 || 500);
        setUser({ ...user, token: '', isLogin: false, gotError: true });
      }
      return response;
    });
  };

  // useEffect(() => {
  //   checkToken();
  // }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        logout,
        createUserAccount,
        getUserAccount,
        updateUserAccount,
        checkToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
