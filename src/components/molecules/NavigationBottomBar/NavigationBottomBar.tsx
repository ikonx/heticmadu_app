import React, { FunctionComponent } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationTabItem from '../../atoms/NavigationTabItem/NavigationTabItem';
import { NavigationItemModel } from '../../../utils/models/navigationItem.model';

interface Props {
  data: NavigationItemModel[];
}

const Tab = createBottomTabNavigator();

const TabStyle = {
  style: {
    height: 58,
  },
};

const NavigationBottomBar: FunctionComponent<Props> = ({ data }) => {
  return (
    <Tab.Navigator tabBarOptions={TabStyle}>
      { data.map((item, i) => (
        <Tab.Screen key={i} name={item.name} component={item.component} options={{
          tabBarButton: ({ onPress }) =>
            <NavigationTabItem icon={item.icon} text={item.text} onClick={onPress}/>,
        }}/>
      ))}
    </Tab.Navigator>
  );
};

export default NavigationBottomBar;
