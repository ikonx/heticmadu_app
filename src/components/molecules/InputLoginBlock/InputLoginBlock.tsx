import React, { FunctionComponent, useContext, useState } from 'react';
import Text from '@src/components/atoms/Typography/Text/Text';
import InputLogin from '@src/components/atoms/InputLogin/InputLogin';
import Theme from '@src/styleGuide/Theme';
import Buttons from '@src/components/atoms/Buttons/Buttons';
import Icon from '@src/components/atoms/Icons/Icon';
import styled, { ThemeContext } from 'styled-components';
import { IconName } from '@src/assets/icons/IconName.enum';
import { View } from 'react-native';
import { TouchableType } from '@src/components/atoms/Buttons/Buttons.enum';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StyledInputBlock from './InputLoginBlock.style';

type LabelVariants = 'default' | 'password' | 'action';

interface IInputBlock {
  hidePassword?: boolean;
  inputFocus?: boolean;
  inputType: LabelVariants;
}

const StyledRightBlock = styled(View)`
  position: absolute;
  right: 5%;
  top: 50%;
`;

const InputBlock: FunctionComponent<IInputBlock> = ({
  hidePassword,
  inputFocus,
  inputType,
  children,
}) => {
  const [isHidden, setHidden] = useState(hidePassword);
  const [isFocus, setFocus] = useState(false);
  const { Colors } = useContext(ThemeContext);

  const managePasswordVisibility = () => {
    setHidden(!isHidden);
  };

  const manageInputFocus = () => {
    setFocus(!isFocus);
  };

  const renderAction = (hide: boolean) => {
    switch (inputType) {
      case 'default':
        return null;
      case 'password':
        return (
          <TouchableOpacity onPress={managePasswordVisibility}>
            <Icon
              height={20}
              width={20}
              name={hide ? IconName.EYE : IconName.EYESLASH}
              fill={Colors.mainBlack}
            />
          </TouchableOpacity>
        );
      case 'action':
        return <Buttons variant={TouchableType.INVERT}>{children}</Buttons>;
      default:
        return null;
    }
  };

  return (
    <StyledInputBlock inputType={inputType}>
      <Text
        variant="labelInput"
        color={Theme.Colors.mainGrey}
        inputFocus={isFocus}
      >
        Label
      </Text>
      <InputLogin secureTextEntry={isHidden} onFocus={manageInputFocus} />
      <StyledRightBlock>{renderAction(isHidden)}</StyledRightBlock>
    </StyledInputBlock>
  );
};

InputBlock.defaultProps = {
  hidePassword: false,
  inputFocus: false,
  inputType: 'password',
};

export default InputBlock;
