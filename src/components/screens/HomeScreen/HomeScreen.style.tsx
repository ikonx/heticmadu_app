import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';

export const HomeContainer = styled(SafeAreaView)`
  margin: 24px 16px 0;
`;

export const HomePlaces = styled(Animatable.View)`
  margin: 24px 0;
`;

export const HomeChallenges = styled(Animatable.View)`
  margin-bottom: 66px;
`;
