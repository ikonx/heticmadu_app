import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '@styleGuide/Colors';

import ChallengeList from '@components/screens/ChallengeList/ChallengeList';
import ChallengeDetails from '@components/screens/ChallengeDetails/ChallengeDetails';
import RewardScreen from '@components/screens/Reward/RewardScreen';
import CouponScreen from '@components/screens/Coupon/CouponScreen';

interface Props {}

const ChallengeStack = createStackNavigator();

const ChallengeOptions = {
  cardStyle: {
    backgroundColor: Colors.mainWhite,
  },
  header: () => null,
};

const ChallengeNavigator: FunctionComponent<Props> = () => {
  return (
    <ChallengeStack.Navigator headerMode="screen">
      <ChallengeStack.Screen
        name="List"
        component={ChallengeList}
        options={ChallengeOptions}
      />
      <ChallengeStack.Screen
        name="Details"
        component={ChallengeDetails}
        options={ChallengeOptions}
      />
      <ChallengeStack.Screen
        name="Reward"
        component={RewardScreen}
        options={ChallengeOptions}
      />
    </ChallengeStack.Navigator>
  );
};

export default ChallengeNavigator;
