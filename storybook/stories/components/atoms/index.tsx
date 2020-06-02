import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../helpers/Layout';
import TypographyStories from './Typography/Typography.stories';
import ChipStories from './Chip/Chip.stories';


storiesOf('Atoms', module)
  .addDecorator((getStory: any) => <CenterView>{ getStory() }</CenterView>)
  .add('Typography', () => (
    <TypographyStories />
  ))
  .add('Chip', () => (
    <ChipStories />
  ))