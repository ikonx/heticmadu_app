import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '@styleGuide/Colors';
import ProfileEdit from '@components/screens/ProfileEdit/ProfileEdit';
import { TouchableType } from '@components/atoms/Buttons/Buttons.enum';
import Icon from '@components/atoms/Icons/Icon';
import { IconName } from '@assets/icons/IconName.enum';
import Buttons from '@components/atoms/Buttons/Buttons';
import { Direction } from '@components/atoms/Icons/Chevron/Chevron.style';
import CouponScreen from '@components/screens/Coupon/CouponScreen';

interface Props {}

const ProfileStack = createStackNavigator();

const ProfileCross = styled(Buttons)`
  margin-top: 24px;
  margin-left: 16px;
`;

const ProfileNavigator: FunctionComponent<Props> = () => {
  return (
    <ProfileStack.Navigator headerMode="screen">
      <ProfileStack.Screen
        name="Edit"
        component={ProfileEdit}
        options={({ navigation }) => ({
          cardStyle: {
            backgroundColor: Colors.mainBackground,
          },
          title: '',
          headerStatusBarHeight: 0,
          headerStyle: {
            elevation: 0,
            backgroundColor: Colors.mainBackground,
            shadowOpacity: 0,
          },
          headerLeft: () => (
            <ProfileCross
              variant={TouchableType.ICON}
              onPress={() => navigation.goBack()}
            >
              <Icon
                height={24}
                width={24}
                name={IconName.CHEVRON}
                fill={Colors.mainGrey}
                direction={Direction.LEFT}
              />
            </ProfileCross>
          ),
        })}
      />
      <ProfileStack.Screen
        name="Coupon"
        component={CouponScreen}
        options={({ navigation }) => ({
          cardStyle: {
            backgroundColor: Colors.mainBackground,
          },
          title: '',
          headerStatusBarHeight: 0,
          headerStyle: {
            elevation: 0,
            backgroundColor: Colors.mainBackground,
            shadowOpacity: 0,
          },
          headerLeft: () => (
            <ProfileCross
              variant={TouchableType.ICON}
              onPress={() => navigation.goBack()}
            >
              <Icon
                height={24}
                width={24}
                name={IconName.CHEVRON}
                fill={Colors.mainGrey}
                direction={Direction.LEFT}
              />
            </ProfileCross>
          ),
        })}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
