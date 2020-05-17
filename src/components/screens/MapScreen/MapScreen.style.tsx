import styled from 'styled-components';
import { View, FlatList } from 'react-native';
import List from '@src/components/atoms/List/List';

export const StyledView = styled(View)`
  min-width: 300px;
  height: 250px;
  background: #ff0052;
  margin-right: 4px;
`;

export const StyledFlatList = styled(FlatList)`
  flex: 1;
`;

export const StyledPanel = styled(List)`
  max-height: 300px;
  flex: 1;
`;
