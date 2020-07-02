import React, { FunctionComponent } from 'react';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import MaduLogo from '@assets/img/Madu_Logo.svg';
import Spacer from '@src/components/atoms/Spacer/Spacer';
import Forms from '@src/components/organisms/Forms/Forms';
import Text from '@src/components/atoms/Typography/Text/Text';
import Buttons from '@src/components/atoms/Buttons/Buttons';
import { TouchableType } from '@src/components/atoms/Buttons/Buttons.enum';
import Colors from '@src/styleGuide/Colors';
import { LoginContainer, LoginImgBlock, LoginTextBlock } from './Login.style';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const LoginScreen: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <>
      <LoginContainer>
        <Spacer size={24} />
        <LoginImgBlock>
          <MaduLogo />
        </LoginImgBlock>
        <Spacer size={24} />
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
        <Spacer size={24} />
        <LoginTextBlock>
          <Text color={Colors.mainGrey}>Vous êtes nouveau ?</Text>
          <Buttons
            onPress={() => navigation.navigate('CreateAccount')}
            variant={TouchableType.INVERT}
            style={{
              justifyContent: 'center',
              maxHeight: 56,
              height: 56,
            }}
          >
            <Text variant="button" color={Colors.mainPurple} isBold>
              Inscrivez-vous
            </Text>
          </Buttons>
        </LoginTextBlock>
      </LoginContainer>
    </>
  );
};

export default LoginScreen;
