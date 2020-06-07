import React, { FunctionComponent } from 'react';
import ChallengeBadge from '@components/molecules/ChallengeBadge/ChallengeBadge';
import IllustrationName from '@assets/illustrations/IllustrationName.enum';
import Colors from '@styleGuide/Colors';

interface Props {}

const ChallengeBadgeStories: FunctionComponent<Props> = () => {
  return (
    <ChallengeBadge
      illustration={IllustrationName.ENERGIE}
      background={Colors.mainPurple}
    />
  );
};

export default ChallengeBadgeStories;
