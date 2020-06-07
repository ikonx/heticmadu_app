import React, { FunctionComponent } from 'react';
import Badge from '@components/atoms/Badge/Badge';
import Spacer from '@components/atoms/Spacer/Spacer';

interface Props {}

const BadgeStories: FunctionComponent<Props> = () => {
  return (
    <>
      <Badge.Price price='€€€'/>
      <Spacer size={16}/>
      <Badge.GreenScore score={400} />
      <Spacer size={16}/>
      <Badge.Challenge count={400} />
    </>
  );
};

export default BadgeStories;
