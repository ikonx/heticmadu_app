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

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const CreateAccountScreen: FunctionComponent<Props> = ({ navigation }) => {
  const goBack = () => navigation.goBack();

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
              key: 'lastname',
            },
            {
              label: 'Prénom',
              type: 'default',
              required: true,
              key: 'name',
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
        />
      </CreateAccountContainer>
    </>
  );
};

export default CreateAccountScreen;
