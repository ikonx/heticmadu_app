import React, { FunctionComponent } from 'react';
import { TextProperties, TextProps } from 'react-native';
import {
  TextButton,
  TextDefault,
  TextLabel,
  TextLegend,
  TextLegendImportant,
  TextLink,
} from './Text.style';

type TextVariants =
  | 'default'
  | 'legend'
  | 'legendI'
  | 'label'
  | 'button'
  | 'link';
interface Props extends TextProps {
  variant?: TextVariants;
  isUppercase?: boolean;
  color?: string;
  isBold?: boolean;
}

const variants = {
  default: TextDefault,
  legend: TextLegend,
  legendI: TextLegendImportant,
  label: TextLabel,
  button: TextButton,
  link: TextLink,
};

const Text: FunctionComponent<Props & TextProperties> = ({
  variant= 'default',
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
