import React, { FunctionComponent } from 'react';
import ChallengeCard from '@components/molecules/ChallengeCard/ChallengeCard';

interface Props {}

const ChallengeCardStories: FunctionComponent<Props> = () => {
  return (
    <ChallengeCard
      tagsArray={[{ label: 'Text' }, { label: 'Text' }]}
      title="Challenge Card"
      description="Lorem ipsum"
    />
  );
};

export default ChallengeCardStories;
