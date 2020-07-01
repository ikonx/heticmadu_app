import { View } from 'react-native';
import styled from 'styled-components';
import Buttons from '@components/atoms/Buttons/Buttons';
import List from '@components/atoms/List/List';

export const GreenScoreHeader = styled(List)`
  align-items: center;
  justify-content: center;
  height: 40px;
`;

export const StyledReturn = styled(Buttons)`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 16px;
  top: 0;
`;

export const GreenScoreContent = styled(View)`
  margin: 0 16px;
  flex: 1;
`;
