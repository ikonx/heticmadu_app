import { View } from 'react-native';
import styled from 'styled-components';
import List from '@components/atoms/List/List';

export const SnackBarContainer = styled(List)`
  background: ${ ({ theme }) => theme.Colors.mainWhite };
  box-shadow: ${ ({ theme }) => theme.Shadow.shadowBottom };
  border-radius: 10px;
  padding: 12px 16px;
  align-items: center;
`;

export const SnackBarIcon = styled(View)`
  width: 40px;
  height: 40px;
  background: ${ ({ background }) => background };
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const SnackBarContent = styled(List)`
  flex-shrink: 1;
`;
