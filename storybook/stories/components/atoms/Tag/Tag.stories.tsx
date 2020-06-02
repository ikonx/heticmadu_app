import React, { FunctionComponent } from 'react';
import Tag from '@components/atoms/Tag/Tag';
import Spacer from '@components/atoms/Spacer/Spacer';
import Theme from '@styleGuide/Theme';

interface Props {}

const TagStories: FunctionComponent<Props> = () => {
  return (
    <>
      <Tag text="Tag" />
      <Spacer size={16}/>
      <Tag text="Tag disabled" disabled/>
      <Spacer size={16}/>
      <Tag text="Tag color" color={Theme.Colors.mainPurple}/>
    </>
  );
};

export default TagStories;
