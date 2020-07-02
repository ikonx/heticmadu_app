import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

export const LoginContainer = styled(SafeAreaView)`
  align-items: center;
`;

export const LoginTextBlock = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
