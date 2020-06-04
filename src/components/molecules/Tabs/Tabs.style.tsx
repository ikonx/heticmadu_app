import { View } from 'react-native';
import styled from 'styled-components';
import { ScrollView } from 'react-native-gesture-handler';

export const TabsContainer = styled(ScrollView)`
  flex-direction: row;
  background-color: ${({ theme }) => theme.Colors.mainWhite};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
