import React from 'react';
import StyledInput from './Input.style';
import { TextInputProps } from 'react-native';

const Input = (props: TextInputProps) => {
  return <StyledInput {...props} />;
};

Input.defaultProps = {
  placeholder: 'placeholder',
};

export default Input;
