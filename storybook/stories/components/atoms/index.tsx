import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../helpers/Layout';
import AvatarStories from './Avatar/Avatar.stories';
import ButtonsStories from './Buttons/Buttons.stories';
import BadgeStories from './Badge/Badge.stories';
import ChipStories from './Chip/Chip.stories';
import IconsStories from './Icons/Icons.stories';
import IllustrationsStories from './Illustrations/Illustrations.stories';
import InputStories from './Input/Input.stories';
import InputFormStories from './InputForm/InputForm.stories';
import MapPointIconStories from './MapPointIcon/MapPointIcon.stories';
import PositionIndicatorStories from './PositionIndicator/PositionIndicator.stories';
import TabItemStories from './TabItem/TabItem.stories';
import TagStories from './Tag/Tag.stories';
import TypographyStories from './Typography/Typography.stories';


storiesOf('Atoms', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('Avatar', () => <AvatarStories />)
  .add('Badge', () => <BadgeStories />)
  .add('Buttons', () => <ButtonsStories />)
  .add('Chip', () => <ChipStories />)
  .add('Icons', () => <IconsStories />)
  .add('Illustrations', () => <IllustrationsStories />)
  .add('Input', () => <InputStories />)
  .add('InputForm', () => <InputFormStories />)
  .add('Map Point Icon', () => <MapPointIconStories />)
  .add('Position Indicator', () => <PositionIndicatorStories />)
  .add('Tab Item', () => <TabItemStories />)
  .add('Tag', () => <TagStories />)
  .add('Typography', () => <TypographyStories />);