import React, { FunctionComponent } from 'react';
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
      initialRouteName="Main"
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <RootStack.Screen name="Main" component={MainTabsScreen} />
      <RootStack.Screen name="Stories" component={ChallengesNavigator} />
      <RootStack.Screen name="Maps" component={MapNavigator} />
    </RootStack.Navigator>
  );
};

export default NavigationBottomBar;
