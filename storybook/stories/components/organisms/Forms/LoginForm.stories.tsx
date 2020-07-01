import React, { FunctionComponent } from 'react';
import Forms from '@components/organisms/Forms/Forms';

interface Props {}

const LoginFormStories: FunctionComponent<Props> = () => {
  return (
    // <LoginForm></LoginForm>
    <Forms
      dataInput={[
        {
          label: 'Email',
          type: 'default',
          required: true,
          key: 'email',
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        },
        {
          label: 'Prénom',
          type: 'default',
          required: true,
          key: 'firstname',
        },
        {
          label: 'Nom',
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
