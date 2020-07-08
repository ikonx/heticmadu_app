import React, { FunctionComponent, useContext, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import NavigationTabItem from '@components/atoms/NavigationTabItem/NavigationTabItem';
import { NavigationItemModel } from '@utils/models/navigationItem.model';
import ChallengesNavigator from '@utils/navigator/Challenge.navigator';
import MapNavigator from '@src/utils/navigator/Map.navigator';
import LoginScreen from '@src/components/screens/Login/Login';
import CreateAccountScreen from '@src/components/screens/CreateAccount/CreateAccount';
import ProfileNavigator from '@utils/navigator/Profile.navigator';
import UserContext from '@src/contexts/user/user.context';
import { UserModel } from '@src/utils/models/user.model';

interface Props {
  data: NavigationItemModel[];
}

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const TabStyle = {
  style: {
    padding: 8,
  },
};

const NavigationBottomBar: FunctionComponent<Props> = ({ data }) => {
  const { user }: { user: UserModel } = useContext(UserContext);

  function MainTabsScreen() {
    return (
      <Tab.Navigator tabBarOptions={TabStyle}>
        {data.map((item, i) => (
          <Tab.Screen
            key={i}
            name={item.name}
            component={item.component}
            options={{
              tabBarButton: ({ onPress }) => (
                <NavigationTabItem
                  icon={item.icon}
                  text={item.text}
                  onClick={onPress}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    );
  }

  return (
    <RootStack.Navigator
      mode="modal"
      headerMode="none"
      initialRouteName="Login"
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      {!user.isLogin ? (
        <>
          <RootStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ animationTypeForReplace: 'pop' }}
          />
          <RootStack.Screen
            name="CreateAccount"
            component={CreateAccountScreen}
          />
        </>
      ) : (
        <>
          <RootStack.Screen name="Main" component={MainTabsScreen} />
          <RootStack.Screen name="Stories" component={ChallengesNavigator} />
          <RootStack.Screen name="Maps" component={MapNavigator} />
          <RootStack.Screen name="Profile" component={ProfileNavigator} />
        </>
      )}
    </RootStack.Navigator>
  );
};

export default NavigationBottomBar;
