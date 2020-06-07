import styled from 'styled-components';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native';

export const StyledFiltersScreen = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.Colors.mainWhite};
  flex: 1;
`;

export const StyledContent = styled(View)`
  background-color: ${({ theme }) => theme.Colors.mainWhite};
  padding: 0 16px 16px 16px;
  margin-top: 24px;
`;
