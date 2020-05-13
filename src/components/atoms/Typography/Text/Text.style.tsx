import styled from 'styled-components';
import { Text } from 'react-native';

const BaseText = styled(Text)<{
  color?: string;
  isUppercase: boolean;
  isMedium?: boolean;
}>`
  text-transform: ${(props) => (props.isUppercase ? 'uppercase' : 'none')};
  color: ${(props) =>
    props.color ? props.color : props.theme.Colors.mainBlack};
  font-family: ${(props) =>
    props.isMedium
      ? props.theme.Fonts.DMSans.medium
      : props.theme.Fonts.DMSans.regular};
`;

export const TextLegend = styled(BaseText)`
  font-size: 12px;
  line-height: 18px;
`;

export const TextLegendImportant = styled(TextLegend)`
  font-size: 16px;
`;

export const TextDefault = styled(BaseText)`
  font-size: 16px;
  line-height: 24px;
`;

export const TextLabel = styled(BaseText)`
  font-size: 12px;
`;

export const TextButton = styled(BaseText)`
  font-size: 16px;
`;

export const TextLink = styled(BaseText)`
  font-size: 12px;
`;
