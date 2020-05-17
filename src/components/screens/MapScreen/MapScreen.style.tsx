import styled from 'styled-components';
import { FlatList } from 'react-native';
import List from '@src/components/atoms/List/List';

export const StyledFlatList = styled(FlatList)`
  flex: 1;
`;

export const StyledPanel = styled(List)`
  max-height: 300px;
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.mainWhite};
`;
