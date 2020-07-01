import styled from 'styled-components';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

export const StyledSearchScreen = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.Colors.mainWhite};
`;

export const StyledContent = styled(ScrollView)`
  background-color: ${({ theme }) => theme.Colors.mainWhite};
  padding: 0 16px 16px 16px;
`;
