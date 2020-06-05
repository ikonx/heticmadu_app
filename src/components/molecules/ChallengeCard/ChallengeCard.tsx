import React, { useContext } from 'react';
import Text from '@components/atoms/Typography/Text/Text';
import TagsList, { ITag } from '@components/molecules/TagsList/TagsList';
import Illustration from '@components/atoms/Illustrations/Illustration';
import IllustrationName from '@assets/illustrations/IllustrationName.enum';
import { ThemeContext } from 'styled-components';
import Spacer from '@components/atoms/Spacer/Spacer';
import Title from '@components/atoms/Typography/Title/Title';
import {
  StyledChallengeCard,
  StyledContent,
  StyledTouchable,
} from './ChallengeCard.style';
import { View } from 'react-native';

interface Props {
  tagsArray: ITag[];
  title: string;
  description: string;
  background?: string;
  illustration?: IllustrationName;
}

const ChallengeCard = ({
  title,
  description,
  tagsArray,
  background,
  illustration,
  ...rest
}: Props) => {
  const { Colors } = useContext(ThemeContext);
  return (
    <StyledTouchable activeOpacity={0.6} {...rest}>
      <StyledChallengeCard direction="row" background={background}>
        <StyledContent flexDirection="column">
          <TagsList
            tagsArray={tagsArray}
            style={{ maxHeight: 28 }}
          />
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
        </StyledContent>
        <Spacer size={16} />
        <Illustration name={illustration || IllustrationName.ENERGIE} />
      </StyledChallengeCard>
    </StyledTouchable>
  );
};

export default ChallengeCard;
