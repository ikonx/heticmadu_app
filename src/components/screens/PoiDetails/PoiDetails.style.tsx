import styled from 'styled-components';
import { SafeAreaView } from 'react-navigation';
import { View } from 'react-native';

export const PoiDetailsContainer = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.Colors.mainWhite};
  flex: 1;
`;

export const StyledContent = styled(View)`
  padding: 0 16px;
`;
