import React, { FunctionComponent } from 'react';
import { TextButton, TextDefault, TextLabel, TextLegend, TextLegendImportant, TextLink } from "./Text.style";

interface Props {
  variant: string;
  isUppercase?: boolean;
  color?: string;
  isMedium?: boolean;
}

const variants: any = {
  default: TextDefault,
  legend: TextLegend,
  legendI: TextLegendImportant,
  label: TextLabel,
  button: TextButton,
  link: TextLink
};

const Text: FunctionComponent<Props> = ({ variant, children, isUppercase, color, isMedium }) => {
  const TextElement = variants[variant];

  return (
      <TextElement isUppercase={isUppercase} color={color} isMedium={isMedium}>
        { children }
      </TextElement>
  );
};

export default Text;
