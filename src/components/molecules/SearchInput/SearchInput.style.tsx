import styled from 'styled-components';
import { View } from 'react-native';

const StyledSearchInput = styled(View)`
  background-color: ${({ theme }) => theme.Colors.secondaryGrey};
  padding: 8px;
  border-radius: 10px;
  max-width: 230px;
  max-height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export default StyledSearchInput;
