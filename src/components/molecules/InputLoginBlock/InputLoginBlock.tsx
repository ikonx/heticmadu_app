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
  value: string;
}

const StyledRightBlock = styled(View)`
  position: absolute;
  right: 5%;
  top: 50%;
`;

const StyledTextAction = styled(Text)`
  color: ${Theme.Colors.mainPurple};
  font-size: 12px;
  height: 39px;
`;

const InputBlock: FunctionComponent<IInputBlock> = ({
  inputType,
  children,
  value,
}) => {
  const [isHidden, setHidden] = useState(inputType === 'password');
  const [isFocus, setFocus] = useState(false);
  const [isValue, setValue] = useState('');

  const { Colors } = useContext(ThemeContext);

  const managePasswordVisibility = () => {
    setHidden(!isHidden);
  };

  const manageInputFocus = (focusState: boolean) => (e: any) => {
    setFocus(e.nativeEvent.text ? true : focusState);
    console.log(focusState);
  };

  const changeTextHanlder = (e: any) => {
    setValue(e.nativeEvent.text);
    console.log(e.nativeEvent.text);
  };

  const renderAction = (hide: boolean) => {
    switch (inputType) {
      case 'default':
        return null;
      case 'password':
        return (
          <TouchableOpacity onPress={managePasswordVisibility}>
            {isValue ? (
              <Icon
                height={20}
                width={20}
                name={hide ? IconName.EYE : IconName.EYESLASH}
                fill={Colors.mainBlack}
              />
            ) : (
              <Buttons
                variant={TouchableType.INVERT}
                onPress={() => {
                  return null;
                }}
              >
                <StyledTextAction>Mot de passe oublié ?</StyledTextAction>
              </Buttons>
            )}
          </TouchableOpacity>
        );
      case 'action':
        return (
          <Buttons variant={TouchableType.INVERT}>
            <StyledTextAction>Action / Modifier</StyledTextAction>
          </Buttons>
        );
      default:
        return null;
    }
  };

  return (
    <StyledInputBlock inputType={inputType} inputFocus={isFocus}>
      <Text
        variant="labelInput"
        color={Theme.Colors.mainGrey}
        inputFocus={isFocus}
      >
        {children}
      </Text>
      <InputLogin
        secureTextEntry={isHidden}
        onFocus={manageInputFocus(true)}
        onBlur={manageInputFocus(false)}
        onEndEditing={manageInputFocus(false)}
        defaultValue={value}
        onChange={changeTextHanlder}
        inputType={inputType}
      />
      <StyledRightBlock>{renderAction(isHidden)}</StyledRightBlock>
    </StyledInputBlock>
  );
};

InputBlock.defaultProps = {
  inputType: 'default',
};

export default InputBlock;
