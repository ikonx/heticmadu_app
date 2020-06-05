import React, {
  FunctionComponent,
  useContext,
  useState,
  useRef,
  useEffect,
} from 'react';
import Text from '@src/components/atoms/Typography/Text/Text';
import InputLogin from '@src/components/atoms/InputLogin/InputLogin';
import Theme from '@src/styleGuide/Theme';
import Buttons from '@src/components/atoms/Buttons/Buttons';
import Icon from '@src/components/atoms/Icons/Icon';
import { IconName } from '@src/assets/icons/IconName.enum';
import { TouchableType } from '@src/components/atoms/Buttons/Buttons.enum';
import styled, { ThemeContext } from 'styled-components';
import { View, Animated, Easing } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StyledInputLoginBlock from './InputLoginBlock.style';

type LabelVariants = 'default' | 'password' | 'action';

interface IInputLoginBlock {
  hidePassword?: boolean;
  inputFocus?: boolean;
  inputType: LabelVariants;
  value: string;
  onPress: (value: string) => void;
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
  children,
  value,
  onPress,
}) => {
  const [isHidden, setHidden] = useState(inputType === 'password');
  const [isFocus, setFocus] = useState(false);
  const [isValue, setValue] = useState('');

  const { Colors } = useContext(ThemeContext);

  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocus ? -10 : focusAnim,
      duration: 300,
      easing: Easing.ease,
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
    <StyledInputLoginBlock inputType={inputType} inputFocus={isFocus}>
      <Animated.View
        style={{
          transform: [{ translateY: focusAnim }],
        }}
      >
        <Text
          variant="labelInput"
          color={Theme.Colors.mainGrey}
          inputFocus={isFocus}
        >
          {children}
        </Text>
      </Animated.View>
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
    </StyledInputLoginBlock>
  );
};

InputLoginBlock.defaultProps = {
  inputType: 'default',
  onPress: () => {},
};

export default InputLoginBlock;
