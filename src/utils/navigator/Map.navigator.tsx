import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FiltersScreen from '@src/components/screens/Filters/FiltersScreen';
import SearchScreen from '@src/components/screens/Search/SearchScreen';
import PoiDetails from '@src/components/screens/PoiDetails/PoiDetailsScreen';
import GreenScoreScreen from '@components/screens/GreenScore/GreenScoreScreen';
import Colors from '@styleGuide/Colors';

interface Props {}

const MapStack = createStackNavigator();

const MapNavigator: FunctionComponent<Props> = () => {
  return (
    <MapStack.Navigator headerMode="none">
      <MapStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
          cardStyle: { flex: 1 },
          gestureResponseDistance: { vertical: 600 },
          headerStatusBarHeight: 0,
        }}
      />
      <MapStack.Screen
        name="Filters"
        component={FiltersScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
          cardStyle: { flex: 1 },
          gestureResponseDistance: { vertical: 600 },
          headerStatusBarHeight: 0,
        }}
      />
      <MapStack.Screen
        name="Details"
        component={PoiDetails}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
          cardStyle: { flex: 1 },
          gestureResponseDistance: { vertical: 600 },
          headerStatusBarHeight: 400,
        }}
      />
      <MapStack.Screen
        name="GreenScore"
        component={GreenScoreScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
          cardStyle: {
            flex: 1,
            backgroundColor: Colors.mainWhite,
          },
          gestureResponseDistance: { vertical: 600 },
          headerStatusBarHeight: 400,
        }}
      />
    </MapStack.Navigator>
  );
};

export default MapNavigator;
