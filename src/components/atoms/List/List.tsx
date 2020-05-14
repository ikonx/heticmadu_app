import { FunctionComponent } from 'react';
import { View, ViewProps } from 'react-native';
import styled, { StyledFunction } from 'styled-components';

interface IProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

const List: StyledFunction<IProps & FunctionComponent<ViewProps>> = styled(
  View,
)`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
`;

export default List;
