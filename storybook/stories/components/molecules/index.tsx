import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../helpers/Layout';
import ChipsListStories from './ChipsList/ChipsList.stories';
import LogoutModalStories from './LogoutModal/LogoutModal.stories';


storiesOf('Molecules', module)
  .addDecorator((getStory: any) => <CenterView>{ getStory() }</CenterView>)
  .add('Chips List', () => (
    <ChipsListStories />
  ))
  .add('Logout Modal', () => (
    <LogoutModalStories />
  ))