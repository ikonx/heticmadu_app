import styled from 'styled-components';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Buttons from '@components/atoms/Buttons/Buttons';
import List from '@components/atoms/List/List';

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

export const ChallengeDetailsHeader = styled(List)`
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  height: 40px;
`;

export const StyledReturn = styled(Buttons)`
  position: absolute;
  left: 16px;
  top: 0;
  width: 40px;
`;
