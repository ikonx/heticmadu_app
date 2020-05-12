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
  color?: string;
  isMedium?: boolean;
}

const variants: any = {
  h1: PrimaryTitle,
  h2: SecondaryTitle,
  h3: TertiaryTitle,
  h4: QuaternaryTitle,
  subtitle: Subtitle
};

const Title: FC<Props> = ({ variant = "h1", children, isUppercase, color, isMedium }) => {
  const TitleElement = variants[variant];

  return (
      <TitleElement isUppercase={isUppercase} color={color} isMedium={isMedium}>
        { children }
      </TitleElement>
  );
};

export default Title;
