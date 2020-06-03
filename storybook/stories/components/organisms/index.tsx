import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../helpers/Layout';
import ChipsSectionStories from './ChipsSection/ChipsSection.stories';
import MapStories from './Map/Map.stories';


storiesOf('Organisms', module)
  .addDecorator((getStory: any) => <CenterView>{ getStory() }</CenterView>)
  .add('Chips Section', () => <ChipsSectionStories />)
  .add('Map', () => <MapStories />)