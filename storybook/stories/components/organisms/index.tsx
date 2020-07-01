import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../helpers/Layout';
import MapStories from './Map/Map.stories';
import LoginFormStories from './Forms/LoginForm.stories';

storiesOf('Organisms', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('Map', () => <MapStories />)
  .add('LoginForm', () => <LoginFormStories />);

