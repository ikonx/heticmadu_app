import React, { FC } from 'react';
import {
  PrimaryTitle,
  QuaternaryTitle,
  SecondaryTitle,
  Subtitle,
  TertiaryTitle
} from "./Title.style";

interface Props {
  variant?: string;
  isUppercase?: boolean;
  isBold?: boolean;
}

const variants: any = {
  h1: PrimaryTitle,
  h2: SecondaryTitle,
  h3: TertiaryTitle,
  h4: QuaternaryTitle,
  subtitle: Subtitle
};

const Title: FC<Props> = ({ variant = "h1", children, isUppercase, isBold }) => {
  const TitleElement = variants[variant];

  return (
      <TitleElement isUppercase={isUppercase} isBold={isBold}>
        { children }
      </TitleElement>
  );
};

export default Title;
