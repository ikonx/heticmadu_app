import React, { FunctionComponent } from 'react';
import { TextInputProps } from 'react-native';
import StyledInputLogin from './InputLogin.style';

interface IInputLogin extends TextInputProps {}

const InputLogin: FunctionComponent<IInputLogin> = ({ ...rest }) => {
  return <StyledInputLogin {...rest} />;
};

InputLogin.defaultProps = {
  placeholder: '',
};

export default InputLogin;
