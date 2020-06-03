import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../helpers/Layout';
import MapStories from './Map/Map.stories';

storiesOf('Organisms', module)
  .addDecorator((getStory: any) => <CenterView>{ getStory() }</CenterView>)
  .add('Map', () => <MapStories />);
