import styled from 'styled-components';
import { Text } from 'react-native';

const BaseTitle = styled(Text)<{ isBold?: boolean, isUppercase?: boolean }>`
    text-transform: ${ props => props.isUppercase ? 'uppercase' : 'none'};
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
