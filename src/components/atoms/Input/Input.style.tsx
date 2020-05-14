import styled from 'styled-components';
import { TextInput } from 'react-native';

const StyledInput = styled(TextInput)`
  background-color: ${({ theme }) => theme.Colors.secondaryGrey};
  color: ${({ theme }) => theme.Colors.mainGrey};
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  padding: 4px 4px 8px 4px;
`;

export default StyledInput;
