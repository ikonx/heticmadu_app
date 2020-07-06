import React, { FunctionComponent } from 'react';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
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
import { createUser } from '@src/utils/http';
import { StackActions, useNavigation } from '@react-navigation/native';

const CreateAccountScreen: FunctionComponent = () => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();
  const submit = ({ firstName, lastName, email, password }: any) => {
    console.log({ firstName, lastName, email, password });
    createUser({ firstName, lastName, email, password })
      .then((res) => {
        const response = res;
        if (response.status === 201) {
          // const token = response.data;
          navigation.dispatch(
            StackActions.replace('Main', {
              screen: 'Home',
            }),
          );
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <CreateAccountContainer>
        <Spacer size={8} />
        <NavigationHeader onBack={goBack} />
        <Spacer size={24} />
        <CreateAccountTitleBlock>
          <Title variant="h2" isBold>
            Crée mon compte
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
            firstname: '',
            lastname: '',
            password: '',
          }}
          onSubmit={submit}
        />
      </CreateAccountContainer>
    </>
  );
};

export default CreateAccountScreen;
