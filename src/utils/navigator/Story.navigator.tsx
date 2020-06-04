import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StoryList from '@components/screens/StoryList/StoryList';

interface Props {}

const StoryStack = createStackNavigator();

const StoryNavigator: FunctionComponent<Props> = () => {
  return (
    <StoryStack.Navigator mode="modal" headerMode="none">
      <StoryStack.Screen name="List" component={StoryList}/>
    </StoryStack.Navigator>
  );
};

export default StoryNavigator;
