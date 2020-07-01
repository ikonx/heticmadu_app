import React, { FunctionComponent } from 'react';
import Colors from '@styleGuide/Colors';
import GreenScoreIndicator from '@components/molecules/GreenScoreIndicator/GreenScoreIndicator';

interface Props {}

const GreenScoreIndicatorStories: FunctionComponent<Props> = () => {
  return (
    <GreenScoreIndicator
      title="Énergie"
      text="Fournisseur green"
      color={Colors.mainGreen}
    />
  );
};

export default GreenScoreIndicatorStories;
