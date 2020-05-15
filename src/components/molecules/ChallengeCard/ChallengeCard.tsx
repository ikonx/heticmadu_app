import React, { useContext } from 'react';
import { StyledChallengeCard, StyledText } from './ChallengeCard.style';
import Text from '@components/atoms/Typography/Text/Text';
import TagsList, { ITag } from '@components/molecules/TagsList/TagsList';
import Illustration from '@components/atoms/Illustrations/Illustration';
import IllustrationName from '@assets/illustrations/IllustrationName.enum';
import { ThemeContext } from 'styled-components';
import Spacer from '@components/atoms/Spacer/Spacer';
import { TouchableHighlight } from 'react-native';

interface Props {
  tagsArray: ITag[];
  title: string;
  description: string;
}

const ChallengeCard = ({ title, description, tagsArray }: Props) => {
  const { Colors } = useContext(ThemeContext);
  return (
    <TouchableHighlight>
      <StyledChallengeCard direction="row">
        <StyledText direction="column">
          <TagsList tagsArray={tagsArray} />
          <Spacer size={8} />
          <Text variant="legendI" isBold color={Colors.mainWhite}>
            {title}
          </Text>
          <Spacer size={8} />
          <Text
            variant="default"
            color={Colors.mainWhite}
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            {description}
          </Text>
        </StyledText>
        <Spacer size={16} />
        <Illustration name={IllustrationName.ENERGIE} />
      </StyledChallengeCard>
    </TouchableHighlight>
  );
};

export default ChallengeCard;
