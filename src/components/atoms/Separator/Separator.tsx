import styled from 'styled-components';
import { View } from 'react-native';

const Separator = styled(View)`
  background-color: ${({ theme }) => theme.Colors.secondaryGrey};
  height: 1px;
  width: 100%;
`;

export default Separator;
