import styled from 'styled-components';
import { SafeAreaView } from 'react-navigation';
import { View } from 'react-native';
import Buttons from '@components/atoms/Buttons/Buttons';

export const StyledFiltersScreen = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.Colors.mainWhite};
  flex: 1;
`;

export const StyledContent = styled(View)`
  background-color: ${({ theme }) => theme.Colors.mainWhite};
  padding: 0 16px 16px 16px;
  margin-top: 24px;
`;

export const StyledButton = styled(Buttons)`
  justify-content: center;
  flex: 1;
  margin: 0 16px 24px;
`;
