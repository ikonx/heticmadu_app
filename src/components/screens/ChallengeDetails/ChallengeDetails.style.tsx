import styled from 'styled-components';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Buttons from '@components/atoms/Buttons/Buttons';

export const StyledContainer = styled(SafeAreaView)`
  margin-top: 24px;
  padding-top: 0;
  flex: 1;
`;

export const ChallengeDetailsContainer = styled(View)`
  margin: 0 16px;
`;

export const StyledButton = styled(Buttons)`
  position: absolute;
  right: 16px;
  left: 16px;
  bottom: 16px;
  align-items: center;
  justify-content: center;
`;
