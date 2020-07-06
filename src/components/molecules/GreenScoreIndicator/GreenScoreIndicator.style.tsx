import styled from 'styled-components';
import { View } from 'react-native';
import List from '@components/atoms/List/List';

export const IndicatorCircle = styled(View)<{ background: string|number }>`
  background-color: ${({ background }) => background};
  width: 12px;
  height: 12px;
`;

export const StyledList = styled(List)`
  align-items: center;
`;
