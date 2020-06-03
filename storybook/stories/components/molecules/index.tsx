import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../helpers/Layout';
import ChallengeCardStories from './ChallengeCard/ChallengeCard.stories';
import ChallengeRowStories from './ChallengeRow/ChallengeRow.stories';
import ChipsListStories from './ChipsList/ChipsList.stories';
import LogoutModalStories from './LogoutModal/LogoutModal.stories';
import NavigationHeaderStories from './NavigationHeader/NavigationHeader.stories';
import PoiCardStories from './PoiCard/PoiCard.stories';
import SearchInputStories from './SearchInput/SearchInput.stories';
import SnackBarStories from './SnackBar/SnackBar.stories';
import TabsStories from './Tabs/Tabs.stories';
import TagsListStories from './TagsList/TagsList.stories';

storiesOf('Molecules', module)
  .addDecorator((getStory: any) => <CenterView>{ getStory() }</CenterView>)
  .add('Challenge Card', () => <ChallengeCardStories />)
  .add('Challenge Row', () => <ChallengeRowStories />)
  .add('Chips List', () => <ChipsListStories />)
  .add('Logout Modal', () => <LogoutModalStories />)
  .add('Navigation Header', () => <NavigationHeaderStories />)
  .add('Poi Card', () => <PoiCardStories />)
  .add('Search Input', () => <SearchInputStories />)
  .add('SnackBar', () => <SnackBarStories />)
  .add('Tabs', () => <TabsStories />)
  .add('Tags List', () => <TagsListStories />)
