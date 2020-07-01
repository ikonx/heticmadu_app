import React, { FunctionComponent } from 'react';
import LoginForm from '@components/organisms/Forms/LoginForm/LoginForm';
import Forms from '@components/organisms/Forms/Forms';

interface Props {}

const LoginFormStories: FunctionComponent<Props> = () => {
  return (
    // <LoginForm></LoginForm>
    <Forms
      dataInput={[
        { label: 'email', type: 'default', required: true, value: 'email' },
        { label: 'prénom', type: 'default', required: true, value: 'email' },
        { label: 'nom', type: 'default', required: true value: 'email' },
        { label: 'Mot de passe', type: 'password', required: true value: 'email'},
      ]}
      buttonName="Se connecter"
    />
  );
};

export default LoginFormStories;
