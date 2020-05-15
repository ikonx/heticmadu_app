import React, { FunctionComponent } from 'react';
import {
  TextButton,
  TextDefault,
  TextLabel,
  TextLegend,
  TextLegendImportant,
  TextLink,
} from './Text.style';
import { TextProperties } from 'react-native';

interface Props {
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

const Text: FunctionComponent<Props & TextProperties> = ({
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
