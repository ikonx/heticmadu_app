import List from '../../atoms/List/List';
import styled from 'styled-components';

export const StyledChallengeCard = styled(List)`
  border-radius: 12px;
  padding: 24px;
  background-color: ${({ theme }) => '#F68482' || theme.Colors.mainGreen};
  max-height: 160px;
  width: 100%;
  border: ${ ({ theme }) => theme.Borders.mainBorder };
`;

export const StyledText = styled(List)`
  flex: 1;
`;
