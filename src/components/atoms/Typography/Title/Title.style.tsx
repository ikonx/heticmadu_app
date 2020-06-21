import styled from 'styled-components';
import { Text } from 'react-native';

const BaseTitle = styled(Text)<{
  color?: string,
  isUppercase?: boolean,
  isBold?: boolean,
  align?: string,
}>`
  text-transform: ${ ({ isUppercase }) => isUppercase ? 'uppercase' : 'none'};
  color: ${ ({ color, theme }) => color ? color : theme.Colors.mainBlack };
  text-align: ${ ({ align }) => align ? align : 'left' };
  font-family: ${ ({ isBold, theme }) => isBold ? theme.Fonts.DMSans.bold : theme.Fonts.DMSans.regular };
`;

export const PrimaryTitle = styled(BaseTitle)`
  font-size: 32px;
  line-height: 48px;
`;

export const SecondaryTitle = styled(BaseTitle)`
  font-size: 24px;
`;

export const TertiaryTitle = styled(BaseTitle)`
  font-size: 20px;
`;

export const QuaternaryTitle = styled(BaseTitle)`
  font-size: 18px;
`;

export const Subtitle = styled(BaseTitle)`
  font-size: 14px;
`;
