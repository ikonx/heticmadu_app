import { View } from 'react-native';
import styled from 'styled-components';
import List from '@components/atoms/List/List';

export const StyledContainer = styled(List)`
  align-items: center;
`;

export const StyledIcon = styled(View)`
  padding: 8px;
  background: ${ ({ color }) => color };
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;
