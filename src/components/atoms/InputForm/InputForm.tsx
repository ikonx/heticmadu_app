import React, { FunctionComponent } from 'react';
import { TextInputProps } from 'react-native';
import StyledInputLogin from './InputForm.style';

interface IInputLogin extends TextInputProps {
  inputType: string;
}

const InputLogin: FunctionComponent<IInputLogin> = ({ inputType, ...rest }) => {
  return <StyledInputLogin inputType={inputType} {...rest} />;
};

InputLogin.defaultProps = {
  placeholder: '',
};

export default InputLogin;
