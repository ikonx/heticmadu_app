import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../helpers/Layout';
import Typography from './Typography/Typography';


storiesOf('Atoms', module)
  .addDecorator((getStory: any) => <CenterView>{ getStory() }</CenterView>)
  .add('Typography', () => (
    <Typography />
  ))