import React, {
  FunctionComponent,
  useContext,
  useState,
  useRef,
  useEffect,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { View, Animated, Easing } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Text from '@src/components/atoms/Typography/Text/Text';
import InputLogin from '@src/components/atoms/InputForm/InputForm';
import Theme from '@src/styleGuide/Theme';
import Buttons from '@src/components/atoms/Buttons/Buttons';
import Icon from '@src/components/atoms/Icons/Icon';
import { IconName } from '@src/assets/icons/IconName.enum';
import { TouchableType } from '@src/components/atoms/Buttons/Buttons.enum';

import StyledInputLoginBlock from './InputFormBlock.style';

type LabelVariants = 'default' | 'password' | 'action';

interface IInputLoginBlock {
  hidePassword?: boolean;
  inputFocus?: boolean;
  inputType: LabelVariants;
  defaultValue?: string;
  value?: string;
  label?: string;
  required?: boolean;
  index?: number;
  onPress?: (defaultValue?: string) => void;
  onInputValueChange?: (value?: string | number) => void;
  errors?: string;
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

const InputLoginBlock: FunctionComponent<IInputLoginBlock> = ({
  inputType,
  label,
  defaultValue,
  onPress,
  index,
  required,
  value,
  onInputValueChange,
  errors,
}) => {
  const [isHidden, setHidden] = useState(inputType === 'password');
  const [isFocus, setFocus] = useState(false);
  const [isValue, setValue] = useState('');

  const { Colors } = useContext(ThemeContext);

  const translateY = useRef(new Animated.Value(4)).current;
  const fontSize = useRef(new Animated.Value(16)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: isFocus ? 0 : 12,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
    Animated.timing(fontSize, {
      toValue: isFocus ? 12 : 16,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [isFocus]);

  const managePasswordVisibility = () => {
    setHidden(!isHidden);
  };

  const manageInputFocus = (focusState: boolean) => (e: any) => {
    setFocus(e.nativeEvent.text ? true : focusState);
  };

  const changeTextHanlder = (e: any) => {
    setValue(e.nativeEvent.text);
    onInputValueChange(e.nativeEvent.text);
  };

  const renderAction = (hide: boolean) => {
    switch (inputType) {
      case 'default':
        return null;
      case 'password':
        return (
          <TouchableOpacity onPress={managePasswordVisibility}>
            {/* {isValue ? (
              <Icon
                height={20}
                width={20}
                name={hide ? IconName.EYE : IconName.EYESLASH}
                fill={Colors.mainBlack}
              />
            ) : (
              <Buttons variant={TouchableType.INVERT} onPress={onPress}>
                <StyledTextAction>Mot de passe oublié ?</StyledTextAction>
              </Buttons>
            )} */}
            <Icon
              height={20}
              width={20}
              name={hide ? IconName.EYE : IconName.EYESLASH}
              fill={Colors.mainBlack}
            />
          </TouchableOpacity>
        );
      case 'action':
        return (
          <Buttons variant={TouchableType.INVERT} onPress={onPress}>
            <StyledTextAction>Mot de passe oublié ?</StyledTextAction>
          </Buttons>
        );
      default:
        return null;
    }
  };

  return (
    <StyledInputLoginBlock
      inputType={inputType}
      inputFocus={isFocus}
      key={index}
      label={label}
      required={required}
      errors={errors}
    >
      <Animated.View
        style={{
          transform: [{ translateY }],
          left: 12,
          top: 8,
          position: 'absolute',
        }}
      >
        <Text
          variant="labelInput"
          color={Theme.Colors.mainGrey}
          inputFocus={isFocus}
          style={{ fontSize }}
        >
          {label}
        </Text>
      </Animated.View>
      <InputLogin
        secureTextEntry={isHidden}
        onFocus={manageInputFocus(true)}
        onBlur={manageInputFocus(false)}
        onEndEditing={manageInputFocus(false)}
        defaultValue={defaultValue}
        onChange={changeTextHanlder}
        inputType={inputType}
        value={value}
      />
      <StyledRightBlock>{renderAction(isHidden)}</StyledRightBlock>
    </StyledInputLoginBlock>
  );
};

InputLoginBlock.defaultProps = {
  inputType: 'default',
  onPress: () => {},
};

export default InputLoginBlock;
