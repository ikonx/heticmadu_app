import React, { FunctionComponent, useContext } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';

import Spacer from '@src/components/atoms/Spacer/Spacer';
import Colors from '@src/styleGuide/Colors';
import NavigationHeader from '@src/components/molecules/NavigationHeader/NavigationHeader';
import Forms from '@src/components/organisms/Forms/Forms';
import Title from '@src/components/atoms/Typography/Title/Title';
import Text from '@src/components/atoms/Typography/Text/Text';
import {
  CreateAccountContainer,
  CreateAccountTitleBlock,
} from './CreateAccount.style';
import UserContext from '@src/contexts/user/user.context';

const CreateAccountScreen: FunctionComponent = () => {
  const navigation = useNavigation();
  const { createUserAccount } = useContext(UserContext);

  const goBack = () => navigation.goBack();
  const submit = ({ firstName, lastName, email, password }: any) => {
    createUserAccount(firstName, lastName, email, password);
  };

  return (
    <>
      <CreateAccountContainer>
        <Spacer size={8} />
        <NavigationHeader onBack={goBack} />
        <Spacer size={24} />
        <CreateAccountTitleBlock>
          <Title variant="h2" isBold>
            Créer mon compte
          </Title>
          <Spacer size={8} />
          <Text color={Colors.mainGrey}>
            Votre inscription en une seule et simple étape
          </Text>
        </CreateAccountTitleBlock>
        <Spacer size={24} />
        <Forms
          dataInput={[
            {
              label: 'Nom',
              type: 'default',
              required: true,
              key: 'lastName',
            },
            {
              label: 'Prénom',
              type: 'default',
              required: true,
              key: 'firstName',
            },
            {
              label: 'Email',
              type: 'default',
              required: true,
              key: 'email',
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            },
            {
              label: 'Mot de passe',
              type: 'password',
              required: true,
              key: 'password',
            },
          ]}
          buttonName="Confirmer"
          initialValue={{
            email: '',
            firstName: '',
            lastName: '',
            password: '',
          }}
          onSubmit={submit}
        />
      </CreateAccountContainer>
    </>
  );
};

export default CreateAccountScreen;
