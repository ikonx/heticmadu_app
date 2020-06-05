import styled from 'styled-components';
import { TextInput } from 'react-native';

const StyledInputLogin = styled(TextInput)<{
  inputType: string;
}>`
  color: ${({ theme }) => theme.Colors.mainBlack};
  font-size: 16px;
  height: 39px;
  width: 85%;
  z-index: 2;
  margin-top: 4px;
`;

export default StyledInputLogin;
