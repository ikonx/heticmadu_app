import React, { FunctionComponent, useContext } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';

import MaduLogo from '@assets/img/Madu_Logo.svg';
import Spacer from '@src/components/atoms/Spacer/Spacer';
import Forms from '@src/components/organisms/Forms/Forms';
import Text from '@src/components/atoms/Typography/Text/Text';
import Buttons from '@src/components/atoms/Buttons/Buttons';
import { TouchableType } from '@src/components/atoms/Buttons/Buttons.enum';
import Colors from '@src/styleGuide/Colors';
// import { loginUser } from '@src/utils/http';
import { LoginContainer, LoginTextBlock } from './Login.style';
import UserContext from '@src/contexts/user/user.context';
import { UserModel } from '@src/utils/models/user.model';

const LoginScreen: FunctionComponent = () => {
  const navigation = useNavigation();
  const { user, loginUser }: { user: UserModel; loginUser: any } = useContext(
    UserContext,
  );

  const login = async ({ email, password }: any) => {
    await loginUser({ email, password });
  };

  return (
    <>
      <LoginContainer>
        <Spacer size={24} />
        <MaduLogo />
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
            password: '',
          }}
          onSubmit={login}
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
