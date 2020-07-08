import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

export const LoginContainer = styled(SafeAreaView)`
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

export const LoginTextBlock = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
