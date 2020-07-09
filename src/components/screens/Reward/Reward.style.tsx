import styled from 'styled-components';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Buttons from '@components/atoms/Buttons/Buttons';

export const RewardContainer = styled(SafeAreaView)`
  padding-top: 24px;
`;

export const RewardCross = styled(Buttons)`
  width: 24px;
  margin-left: auto;
  margin-right: 16px;
`;

export const RewardBadge = styled(View)`
  min-width: 277px;
  min-height: 183px;
  margin: 90px auto 0;
`;

export const RewardTitle = styled(View)`
  margin-top: 80px;
  padding: 0 24px;
`;

export const RewardSubtitle = styled(View)`
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const RewardButton = styled(Buttons)`
  margin: 0 16px;
  justify-content: center;
  position: absolute;
  right: 16px;
  left: 16px;
  bottom: 40px;
`;

export const RewardIllustration = styled(View)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
