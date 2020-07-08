import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../helpers/Layout';
import ChallengeBadgeStories from './ChallengeBadge/ChallengeBadge.stories';
import ChallengeCardStories from './ChallengeCard/ChallengeCard.stories';
import ChallengeRowStories from './ChallengeRow/ChallengeRow.stories';
import ChipsListStories from './ChipsList/ChipsList.stories';
import InputFormBlockStories from './InputFormBlock/InputFormBlock.stories';
import CommentStories from './Comment/Comment.stories';
import GreenScoreIndicatorStories from './GreenScoreIndicator/GreenScoreIndicator.stories';
import LeaderboardRowStories from './LeaderboardRow/LeaderboardRow.stories';
import LogoutModalStories from './LogoutModal/LogoutModal.stories';
import NavigationHeaderStories from './NavigationHeader/NavigationHeader.stories';
import PoiCardStories from './PoiCard/PoiCard.stories';
import ProfileStories from './Profile/Profile.stories';
import SearchInputStories from './SearchInput/SearchInput.stories';
import SnackBarStories from './SnackBar/SnackBar.stories';
import TabsStories from './Tabs/Tabs.stories';
import TagsListStories from './TagsList/TagsList.stories';

storiesOf('Molecules', module)
  .addDecorator((getStory: any) => <CenterView>{ getStory() }</CenterView>)
  .add('Challenge Badge', () => <ChallengeBadgeStories />)
  .add('Challenge Card', () => <ChallengeCardStories />)
  .add('Challenge Row', () => <ChallengeRowStories />)
  .add('Chips List', () => <ChipsListStories />)
  .add('Input Form', () => <InputFormBlockStories />)
  .add('Comment', () => <CommentStories />)
  .add('Green Score Indicator', () => <GreenScoreIndicatorStories />)
  .add('Leaderboard Row', () => <LeaderboardRowStories />)
  .add('Logout Modal', () => <LogoutModalStories />)
  .add('Navigation Header', () => <NavigationHeaderStories />)
  .add('Poi Card', () => <PoiCardStories />)
  .add('Profile', () => <ProfileStories />)
  .add('Search Input', () => <SearchInputStories />)
  .add('SnackBar', () => <SnackBarStories />)
  .add('Tabs', () => <TabsStories />)
  .add('Tags List', () => <TagsListStories />);
