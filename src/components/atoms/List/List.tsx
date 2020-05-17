import { FunctionComponent } from 'react';
import { View, ViewProps, FlexStyle } from 'react-native';
import styled, { StyledFunction } from 'styled-components';

interface IProps {
  flewDirection?: FlexStyle['flexDirection'];
}

const List: StyledFunction<IProps & FunctionComponent<ViewProps>> = styled(
  View,
)`
  display: flex;
  flex-direction: ${({ flewDirection }) => flewDirection || 'row'};
`;

export default List;
