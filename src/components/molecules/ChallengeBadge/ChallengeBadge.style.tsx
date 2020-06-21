import styled from 'styled-components';
import { View } from 'react-native';

export const ChallengeBadgeContainer = styled(View)<{ background?: string; }>`
  background: ${ ({ background, theme }) => background ? background : theme.Colors.mainRed };
  border-radius: 10px;
  border: ${ ({ theme }) => theme.Borders.mainBorder };
  min-width: 277px;
  padding: 5px 14px;
`;

export const ChallengeBadgeCount = styled(View)`
  position: absolute;
  top: 12px;
  right: 14px;
`;
