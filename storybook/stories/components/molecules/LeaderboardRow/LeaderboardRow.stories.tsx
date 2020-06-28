import React, { FunctionComponent } from 'react';
import LeaderboardRow from '@components/molecules/LeaderboardRow/LeaderboardRow';

interface Props {}

const LeaderboardRowStories: FunctionComponent<Props> = () => {
  return (
    <LeaderboardRow
      rank={1}
      name="Andrea"
      text="20 Défi réaliser"
    />
  );
};

export default LeaderboardRowStories;
