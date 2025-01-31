import styled from 'styled-components';
import { FlatList } from 'react-native';
import List from '@src/components/atoms/List/List';

export const StyledFlatList = styled(FlatList)`
  background-color: ${({ theme }) => theme.Colors.mainWhite};
`;

export const StyledPanel = styled(List)`
  max-height: 300px;
  flex: 1;
`;
