import styled from 'styled-components';
import { View } from 'react-native';

export const ChallengeBadgeContainer = styled(View)<{ background?: string }>`
  background: ${({ background, theme }) => background || theme.Colors.mainRed};
  border-radius: 10px;
  border: ${({ theme }) => theme.Borders.mainBorder};
  padding: 5px 14px;
  min-height: 110px;
  justify-content: center;
`;

export const ChallengeBadgeCount = styled(View)`
  position: absolute;
  top: 12px;
  right: 14px;
`;
