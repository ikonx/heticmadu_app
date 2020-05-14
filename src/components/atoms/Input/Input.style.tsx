import styled from 'styled-components';
import { TextInput } from 'react-native';

const StyledInput = styled(TextInput)`
  color: ${({ theme }) => theme.Colors.mainGrey};
  font-size: 16px;
  flex: 1;
`;

export default StyledInput;
