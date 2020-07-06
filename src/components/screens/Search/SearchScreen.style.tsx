import styled from 'styled-components';
import { SafeAreaView } from 'react-navigation';
import { View } from 'react-native';

export const StyledSearchScreen = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.Colors.mainWhite};
`;

export const StyledContent = styled(View)`
  background-color: ${({ theme }) => theme.Colors.mainWhite};
  padding: 0 16px 16px 16px;
`;
