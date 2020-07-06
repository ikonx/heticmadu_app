import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components';

import Colors from '@styleGuide/Colors';
import { IconName } from '@assets/icons/IconName.enum';

import ChallengeList from '@components/screens/ChallengeList/ChallengeList';
import ChallengeDetails from '@components/screens/ChallengeDetails/ChallengeDetails';
import { TouchableType } from '@components/atoms/Buttons/Buttons.enum';
import Icon from '@components/atoms/Icons/Icon';
import { Direction } from '@components/atoms/Icons/Chevron/Chevron.style';
import Buttons from '@components/atoms/Buttons/Buttons';
import RewardScreen from '@components/screens/Reward/RewardScreen';

interface Props {}

const ChallengeStack = createStackNavigator();

const StyledButton = styled(Buttons)`
  margin-left: auto;
  margin-top: 24px;
  margin-right: 16px;
  width: 40px;
`;

const ChallengeNavigator: FunctionComponent<Props> = () => {
  return (
    <ChallengeStack.Navigator headerMode="screen">
      <ChallengeStack.Screen
        name="List"
        component={ChallengeList}
        options={({ navigation }) => ({
          cardStyle: {
            backgroundColor: Colors.mainWhite,
          },
          title: '',
          headerStatusBarHeight: 0,
          headerStyle: {
            elevation: 0,
            backgroundColor: Colors.mainGreen,
            shadowOpacity: 0,
          },
          headerRight: () => (
            <StyledButton
              variant={TouchableType.ICON}
              onPress={() => navigation.goBack()}
            >
              <Icon
                height={24}
                width={24}
                name={IconName.CROSS}
                direction={Direction.LEFT}
                fill={Colors.mainGrey}
              />
            </StyledButton>
          ),
        })}
      />
      <ChallengeStack.Screen
        name="Details"
        component={ChallengeDetails}
        options={{
          cardStyle: {
            backgroundColor: Colors.mainWhite,
          },
          header: () => null,
        }}
      />
      <ChallengeStack.Screen
        name="Reward"
        component={RewardScreen}
        options={{
          cardStyle: {
            backgroundColor: Colors.mainWhite,
          },
          header: () => null,
        }}
      />
    </ChallengeStack.Navigator>
  );
};

export default ChallengeNavigator;
