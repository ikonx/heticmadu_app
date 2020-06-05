import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import List from '@components/atoms/List/List';

export const StyledChallengeCard = styled(List)<{ background?: string }>`
  border-radius: 12px;
  padding: 24px;
  background-color: ${({ theme, background }) =>
    background || theme.Colors.mainGreen};
  max-height: 160px;
  width: 100%;
  border: ${({ theme }) => theme.Borders.mainBorder};
  align-items: center;
`;

export const StyledContent = styled(List)`
  flex: 1;
  align-items: flex-start;
`;

export const StyledTouchable = styled(TouchableOpacity)``;
