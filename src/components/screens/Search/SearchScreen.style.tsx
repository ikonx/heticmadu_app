import { View } from 'react-native';
import styled from 'styled-components';
import { SafeAreaView } from 'react-navigation';

export const StyledSearchScreen = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.Colors.mainWhite};
  flex: 1;
`;

export const StyledContent = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.Colors.mainWhite};
  flex: 1;
  padding: 0 16px 16px 16px;
`;
