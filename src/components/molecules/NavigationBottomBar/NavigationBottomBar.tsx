import React, { FunctionComponent } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import NavigationTabItem from '@components/atoms/NavigationTabItem/NavigationTabItem';
import { NavigationItemModel } from '@utils/models/navigationItem.model';
import SearchScreen from '@src/components/screens/Search/SearchScreen';
import ChallengeNavigator from '@utils/navigator/Challenge.navigator';
import FiltersScreen from '@src/components/screens/Filters/FiltersScreen';

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
      <Tab.Navigator tabBarOptions={TabStyle} initialRouteName="Map">
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
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RootStack.Screen name="Main" component={MainTabsScreen} />
      <RootStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
          cardStyle: { flex: 1 },
          gestureResponseDistance: { vertical: 600 },
        }}
      />
      <RootStack.Screen
        name="Filters"
        component={FiltersScreen}
        options={{
          title: 'Filters',
          headerTransparent: true,
          headerShown: false,
          cardStyle: { flex: 1 },
          gestureResponseDistance: { vertical: 600 },
        }}
      />
      <RootStack.Screen name="Stories" component={ChallengeNavigator}/>
    </RootStack.Navigator>
  );
};

export default NavigationBottomBar;
