import styled from 'styled-components';
import { View } from 'react-native';
import Theme from '@src/styleGuide/Theme';

const StyledInputBlock = styled(View)<{
  inputFocus?: boolean;
}>`
  width: 90%;
  padding: 12px;
  background-color: ${Theme.Colors.mainWhite};
  border: ${({ inputFocus }) =>
    inputFocus ? Theme.Borders.avatarBorder : Theme.Borders.lightBorder};
  border-radius: 10px;
  position: relative;
`;

export default StyledInputBlock;
