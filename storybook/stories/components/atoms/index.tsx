import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../helpers/Layout';
import TypographyStories from './Typography/Typography.stories';
import ChipsStories from './Chips/Chips.stories';


storiesOf('Atoms', module)
  .addDecorator((getStory: any) => <CenterView>{ getStory() }</CenterView>)
  .add('Typography', () => (
    <TypographyStories />
  ))
  .add('Chips', () => (
    <ChipsStories />
  ))