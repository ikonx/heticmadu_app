import styled from 'styled-components';
import { Animated } from 'react-native';

const BaseText = styled(Animated.Text)<{
  color?: string;
  isUppercase: boolean;
  isBold?: boolean;
  inputFocus?: boolean;
}>`
  text-transform: ${({ isUppercase }) => (isUppercase ? 'uppercase' : 'none')};
  color: ${({ color, theme }) => color || theme.Colors.mainBlack};
  font-family: ${({ isBold, theme }) =>
    isBold ? theme.Fonts.DMSans.bold : theme.Fonts.DMSans.regular};
`;

export const TextLegend = styled(BaseText)`
  font-size: 12px;
  line-height: 18px;
`;

export const TextLegendImportant = styled(TextLegend)`
  font-size: 16px;
  line-height: 23px;
`;

export const TextDefault = styled(BaseText)`
  font-size: 16px;
  line-height: 24px;
`;

export const TextLabel = styled(BaseText)`
  font-size: 15px;
`;

export const TextButton = styled(BaseText)`
  font-size: 16px;
`;

export const TextLink = styled(BaseText)`
  font-size: 12px;
`;

export const TextLabelInput = styled(BaseText)`
  font-size: ${({ inputFocus }) => (inputFocus ? '12px' : '16px')};
  top: ${({ inputFocus }) => (inputFocus ? '4px' : '50%')};
  z-index: 1;
  position: absolute;
`;
