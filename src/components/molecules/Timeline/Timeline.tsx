import React from 'react';
import PointTimeline from '@components/atoms/PointTimeline/PointTimeline';
import { StyledTimeline } from '@components/molecules/Timeline/Timeline.style';
import { View, Text } from 'react-native';

const Timeline = ({ category, number, couponType, count }) => {
  return (
    <View>
      <StyledTimeline>
        <PointTimeline isActive={count >= number} spaceRight={16} />
        <View>
          <Text style={[{ fontWeight: '600' }]}>1x coupon {couponType}</Text>
          <Text style={[{ color: '#9294A0' }]}>
            {number} défis necessaires dans {category}
          </Text>
        </View>
      </StyledTimeline>
    </View>
  );
};

export default Timeline;
