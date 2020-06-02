import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../helpers/Layout';
import ChipsSectionStories from './ChipsSection/ChipsSection.stories';


storiesOf('Organisms', module)
  .addDecorator((getStory: any) => <CenterView>{ getStory() }</CenterView>)
  .add('Chips Section', () => (
    <ChipsSectionStories />
  ))