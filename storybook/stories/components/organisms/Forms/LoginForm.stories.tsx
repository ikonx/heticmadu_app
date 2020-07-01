import React, { FunctionComponent } from 'react';
import LoginForm from '@components/organisms/Forms/LoginForm/LoginForm';
import Forms from '@components/organisms/Forms/Forms';

interface Props {}

const LoginFormStories: FunctionComponent<Props> = () => {
  return (
    // <LoginForm></LoginForm>
    <Forms
      dataInput={[
        { label: 'email', type: 'default', required: true },
        { label: 'prénom', type: 'default', required: true },
        { label: 'nom', type: 'default', required: true },
        { label: 'Mot de passe', type: 'password', required: true }
      ]}
      buttonName="Se connecter"
    />
  );
};

export default LoginFormStories;
