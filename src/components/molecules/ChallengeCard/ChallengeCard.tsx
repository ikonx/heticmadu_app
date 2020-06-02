import React, { useContext } from 'react';
import { StyledChallengeCard, StyledText } from './ChallengeCard.style';
import Text from '@components/atoms/Typography/Text/Text';
import TagsList, { ITag } from '@components/molecules/TagsList/TagsList';
import Illustration from '@components/atoms/Illustrations/Illustration';
import IllustrationName from '@assets/illustrations/IllustrationName.enum';
import { ThemeContext } from 'styled-components';
import Spacer from '@components/atoms/Spacer/Spacer';
import { TouchableHighlight } from 'react-native';
import Title from '@components/atoms/Typography/Title/Title';

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
        <StyledText flexDirection="column">
          <TagsList tagsArray={tagsArray} />
          <Spacer size={8} />
          <Title variant="h4" isBold color={Colors.mainWhite}>
            {title}
          </Title>
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
