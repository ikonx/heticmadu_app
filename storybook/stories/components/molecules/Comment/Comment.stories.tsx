import React, { FunctionComponent } from 'react';
import Comment from '@components/molecules/Comment/Comment';
import { IconName } from '@assets/icons/IconName.enum';

interface Props {}

const CommentStories: FunctionComponent<Props> = () => {
  return (
    <Comment
      author="Andrea"
      text="a réalisé le défi 👍"
      icon={IconName.USER}
    />
  );
};

export default CommentStories;
