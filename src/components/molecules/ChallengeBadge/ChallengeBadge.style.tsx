import styled from 'styled-components';
import { View } from 'react-native';

export const ChallengeBadgeContainer = styled(View)<{ background?: string; }>`
  background: ${ ({ background, theme }) => background ? background : theme.Colors.mainRed };
  border-radius: 10px;
  border: ${ ({ theme }) => theme.Borders.mainBorder };
  min-width: 160px;
  padding: 0 8px;
`;

export const ChallengeBadgeCount = styled(View)`
  position: absolute;
  top: 8px;
  right: 8px;
`;
