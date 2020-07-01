import React, { FunctionComponent } from 'react';
import LoginForm from '@components/organisms/Forms/LoginForm/LoginForm';
import Forms from '@components/organisms/Forms/Forms';

interface Props {}

const LoginFormStories: FunctionComponent<Props> = () => {
  return (
    // <LoginForm></LoginForm>
    <Forms
      dataInput={[
        {
          label: 'email',
          type: 'default',
          required: true,
          key: 'email',
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        },
        {
          label: 'prénom',
          type: 'default',
          required: true,
          key: 'firstname',
        },
        {
          label: 'nom',
          type: 'default',
          required: true,
          key: 'lastname',
        },
        {
          label: 'Mot de passe',
          type: 'password',
          required: true,
          key: 'password',
        },
      ]}
      buttonName="Se connecter"
      initialValue={{
        email: '',
        firstname: '',
        lastname: '',
        password: '',
      }}
    />
  );
};

export default LoginFormStories;
