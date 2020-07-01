import React, { FunctionComponent } from 'react';
import { TextProperties, TextProps } from 'react-native';
import {
  TextButton,
  TextDefault,
  TextLabel,
  TextLegend,
  TextLegendImportant,
  TextLink,
  TextError,
  TextLabelInput,
} from './Text.style';

type TextVariants =
  | 'default'
  | 'legend'
  | 'legendI'
  | 'label'
  | 'button'
  | 'link'
  | 'error'
  | 'labelInput';
interface Props extends TextProps {
  variant?: TextVariants;
  isUppercase?: boolean;
  color?: string;
  isBold?: boolean;
  inputFocus?: boolean;
}

const variants = {
  default: TextDefault,
  legend: TextLegend,
  legendI: TextLegendImportant,
  label: TextLabel,
  button: TextButton,
  error: TextError,
  link: TextLink,
  labelInput: TextLabelInput,
};

const Text: FunctionComponent<Props & TextProperties> = ({
  variant = 'default',
  children,
  isUppercase,
  color,
  isBold,
  inputFocus,

  ...rest
}) => {
  const TextElement = variants[variant];

  return (
    <TextElement
      isUppercase={isUppercase}
      color={color}
      isBold={isBold}
      inputFocus={inputFocus}
      {...rest}
    >
      {children}
    </TextElement>
  );
};

export default Text;
