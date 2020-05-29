import React, { FunctionComponent } from 'react';
import Theme from '@styleGuide/Theme';
import { CardContainer, CardLeft, CardTitle } from './ThemeCard.style';
import Title from '@components/atoms/Typography/Title/Title';
import Text from '@components/atoms/Typography/Text/Text';
import TagsList, { ITag } from '@components/molecules/TagsList/TagsList';
import Illustration from '@components/atoms/Illustrations/Illustration';
import { IllustrationName } from '@assets/illustrations/IllustrationName.enum';

interface Props {
  title: string;
  text: string;
  illustration: IllustrationName;
  color?: string;
  background?: string;
  tagsList?: ITag[];
}

const ThemeCard: FunctionComponent<Props> = ({
  title,
  text,
  illustration,
  background,
  color,
  tagsList,
  }) => {
  return (
    <CardContainer background={background}>
      <CardLeft>
        <TagsList tagsArray={tagsList}/>
        <CardTitle>
          <Title
            variant="h4"
            color={color ? color : Theme.Colors.mainBlack}
            isBold
          >{ title }</Title>
        </CardTitle>
        <Text color={color ? color : Theme.Colors.mainBlack}>{ text }</Text>
      </CardLeft>
      <Illustration name={illustration} />
    </CardContainer>
  );
};

export default ThemeCard;
