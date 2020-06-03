import React from 'react';
import { TextInputProps } from 'react-native';
import StyledInput from './Input.style';

const Input = (props: TextInputProps) => {
  return <StyledInput {...props} />;
};

Input.defaultProps = {
  placeholder: 'Placeholder',
};

export default Input;
