import { View } from 'react-native';
import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import List from '@components/atoms/List/List';

export const ChallengeListContainer = styled(SafeAreaView)`
  padding: 0;
  flex: 1;
`;

export const StyledHeader = styled(List)`
  padding: 24px 20px 24px 16px;
  align-items: center;
  justify-content: space-between;
  background: ${ ({ theme }) => theme.Colors.mainGreen };
`;

export const StyledHeaderText = styled(View)`
  flex: 1;
`;

export const StyledContent = styled(View)`
  margin: 0 16px;
  flex: 1;
`;
