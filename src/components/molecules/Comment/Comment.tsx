import React, { FunctionComponent } from 'react';
import Icon from '@components/atoms/Icons/Icon';
import { IconName } from '@assets/icons/IconName.enum';
import Spacer from '@components/atoms/Spacer/Spacer';
import { CommentContainer } from '@components/molecules/Comment/Comment.style';
import Text from '@components/atoms/Typography/Text/Text';
import { Text as TextContainer } from 'react-native';

interface Props {
  author: string;
  text: string;
  icon: IconName;
}

const Comment: FunctionComponent<Props> = ({ author, text, icon }) => {
  return (
    <CommentContainer>
      <Icon name={icon} width={40} height={40}/>
      <Spacer size={16}/>
      <TextContainer>
        <Text variant="button" isBold>{ author }</Text>
        <Text variant="button"> { text }</Text>
      </TextContainer>
    </CommentContainer>
  );
};

export default Comment;
