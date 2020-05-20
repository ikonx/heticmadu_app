import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../helpers/Layout';
import ChipsListStories from './ChipsList/ChipsList.stories';


storiesOf('Molecules', module)
  .addDecorator((getStory: any) => <CenterView>{ getStory() }</CenterView>)
  .add('Chips List', () => (
    <ChipsListStories />
  ))