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
import {
  CreateAccountContainer,
  CreateAccountImgBlock,
  CreateAccountTextBlock,
} from './CreateAccount.style';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const CreateAccountScreen: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <>
      <CreateAccountContainer>
        <Spacer size={24} />
        <CreateAccountImgBlock>
          <MaduLogo />
        </CreateAccountImgBlock>
      </CreateAccountContainer>
    </>
  );
};

export default CreateAccountScreen;
