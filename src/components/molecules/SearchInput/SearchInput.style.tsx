import styled from 'styled-components';
import { View } from 'react-native';

const StyledSearchInput = styled(View)`
  background-color: ${({ theme }) => theme.Colors.mainWhite};
  border: ${({ theme }) => theme.Borders.lightBorder};
  padding: 8px;
  border-radius: 10px;
  max-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export default StyledSearchInput;
