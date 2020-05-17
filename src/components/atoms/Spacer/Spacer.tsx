import { View, ViewProps } from 'react-native';
import styled, { StyledFunction } from 'styled-components';
import { FunctionComponent } from 'react';

interface IProps {
  size: 4 | 8 | 12 | 16 | 20 | 24;
}

const Spacer: StyledFunction<IProps & FunctionComponent<ViewProps>> = styled(
  View,
)`
  height: ${({ size }) => size || 0}px;
  width: ${({ size }) => size || 0}px;
`;

export default Spacer;
