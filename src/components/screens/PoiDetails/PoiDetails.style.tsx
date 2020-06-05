import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';

export const PoiDetailsContainer = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.Colors.mainWhite};
  flex: 1;
`;
