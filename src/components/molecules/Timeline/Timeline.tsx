import React from 'react';
import PointTimeline from '@components/atoms/PointTimeline/PointTimeline';
import { StyledTimeline } from '@components/molecules/Timeline/Timeline.style';
import { View, Text } from 'react-native';

const Timeline = ({ category, nbOfChallenge, couponType, count }: any) => {
  return (
    <View>
      <StyledTimeline>
        <PointTimeline
          isActive={count >= nbOfChallenge}
          spaceRight={16}
        ></PointTimeline>
        <View>
          <Text style={[{ fontWeight: '600' }]}>1x coupon {couponType}</Text>
          <Text style={[{ color: '#9294A0' }]}>
            {nbOfChallenge} défis necessaires dans {category}
          </Text>
        </View>
      </StyledTimeline>
    </View>
  );
};

export default Timeline;
