import styled from 'styled-components';
import { View } from 'react-native';

export const StyledIcon = styled(View)<{
  fill?: string;
}>`
  > svg > path {
    fill: ${(props) =>
      props.fill ? props.fill : props.theme.Colors.mainBlack};
  }
`;
