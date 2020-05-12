import React, { FunctionComponent } from 'react';
import { TextButton, TextDefault, TextLabel, TextLegend, TextLink } from "./Text.style";

interface Props {
  variant: string;
  isUppercase?: boolean;
  isBold?: boolean;
}

const variants: any = {
  default: TextDefault,
  defaultI: TextDefault,
  legend: TextLegend,
  label: TextLabel,
  button: TextButton,
  link: TextLink
};

const Text: FunctionComponent<Props> = ({ variant, children, isUppercase, isBold }) => {
  const TextElement = variants[variant];

  return (
      <TextElement isUppercase={isUppercase} isBold={isBold}>
        { children }
      </TextElement>
  );
};

export default Text;
