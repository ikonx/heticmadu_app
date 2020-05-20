import { View } from 'react-native';
import styled from 'styled-components';

export const TabsContainer = styled(View)`
  flex-direction: row;
  background-color: ${({ theme }) => theme.Colors.mainWhite};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  justify-content: space-between;
`;
