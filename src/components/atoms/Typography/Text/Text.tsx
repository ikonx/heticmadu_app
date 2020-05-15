import React, { FunctionComponent } from 'react';
import { TextProps } from 'react-native';
import {
  TextButton,
  TextDefault,
  TextLabel,
  TextLegend,
  TextLegendImportant,
  TextLink,
} from './Text.style';

interface Props extends TextProps {
  variant: string;
  isUppercase?: boolean;
  color?: string;
  isBold?: boolean;
}

const variants: any = {
  default: TextDefault,
  legend: TextLegend,
  legendI: TextLegendImportant,
  label: TextLabel,
  button: TextButton,
  link: TextLink,
};

const Text: FunctionComponent<Props> = ({
  variant,
  children,
  isUppercase,
  color,
  isBold,
  ...rest
}) => {
  const TextElement = variants[variant];

  return (
    <TextElement
      isUppercase={isUppercase}
      color={color}
      isBold={isBold}
      {...rest}
    >
      {children}
    </TextElement>
  );
};

export default Text;
