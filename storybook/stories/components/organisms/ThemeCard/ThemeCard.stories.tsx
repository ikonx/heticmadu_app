import React, { FunctionComponent } from 'react';
import ThemeCard from '@components/organisms/ThemeCard/ThemeCard';
import IllustrationName from '@assets/illustrations/IllustrationName.enum';
import Theme from '@styleGuide/Theme';

interface Props {}

const ThemeCardStories: FunctionComponent<Props> = () => {
  return (
    <ThemeCard
      title="Toutes ses fournitures"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
      illustration={IllustrationName.ENERGIE}
      background={Theme.Colors.mainRed}
      color={Theme.Colors.mainWhite}
    />
  );
};

export default ThemeCardStories;
