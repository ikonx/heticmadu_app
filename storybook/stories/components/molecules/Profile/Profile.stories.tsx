import React, { FunctionComponent } from 'react';
import Profile from '@components/molecules/Profile/Profile';

interface Props {}

const ProfileStories: FunctionComponent<Props> = () => {
  return (
    <Profile
      title="John Doe"
      text="7 Défi réalisés"
    />
  );
};

export default ProfileStories;
