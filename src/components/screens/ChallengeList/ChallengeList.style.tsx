import { View } from 'react-native';
import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import List from '@components/atoms/List/List';
import Buttons from '@components/atoms/Buttons/Buttons';

export const ChallengeListContainer = styled(SafeAreaView)`
  padding: 0;
  flex: 1;
`;

export const StyledHeader = styled(List)`
  padding: 0 20px 24px 16px;
  background: ${ ({ theme }) => theme.Colors.mainRed };
`;

export const StyledHeaderText = styled(View)`
  flex: 1;
`;

export const StyledContent = styled(View)`
  margin: 0 16px;
  flex: 1;
`;

export const StyledButton = styled(Buttons)`
  margin-left: auto;
  margin-top: 24px;
  margin-right: 16px;
  width: 40px;
`;
