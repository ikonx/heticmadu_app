import styled from 'styled-components';
import { Image, ScrollView, Text, View } from 'react-native';
import Buttons from '@components/atoms/Buttons/Buttons';

export const RewardCross = styled(Buttons)`
  width: 24px;
  margin-left: auto;
  margin-right: 16px;
`;

export const StyledImage = styled(Image)`
  width: 207px;
  height: 207px;
  margin: 24px auto 0 auto;
  border-radius: 10px;
`;

export const CouponText = styled(Text)`
  padding: 0 20px 0 20px;
  margin: 32px auto 0 auto;
  text-align: center;
  font-weight: 500;
`;

export const TimelineContainer = styled(View)`
  margin: 10px auto 0 auto;
`;

export const TimelineLine = styled(View)`
  width: 1px;
  height: 330px;
  background: rgba(115, 139, 255, 0.16);
  position: absolute;
  top: 30px;
  left: 11.8px;
`;

export const NoCoupon = styled(View)`
  width: 207px;
  height: 207px;
  margin: 24px auto 0 auto;
  border-radius: 10px;
  background: #efefef;
`;

export const StyledCouponContainer = styled(ScrollView)`
  padding-top: 16px;
  margin-bottom: 32px;
`;
