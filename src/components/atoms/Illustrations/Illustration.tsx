import React, { FunctionComponent } from 'react';
import { IllustrationName } from '@assets/illustrations/IllustrationName.enum';
import LottieView from 'lottie-react-native';
import StyledIllustration from './Illustration.style';

import EnergieIllus from '@assets/illustrations/Illustration_1.json';
import CuisineIllus from '@assets/illustrations/Illustration_2.json';
import MaisonIllus from '@assets/illustrations/Illustration_3.json';
import RecyclageIllus from '@assets/illustrations/Illustration_4.json';

interface Props {
  name: IllustrationName;
}

const Illustration: FunctionComponent<Props> = ({ name }) => {
  const renderIllustration = () => {
    switch (name) {
      case IllustrationName.ENERGIE:
        return EnergieIllus;
      case IllustrationName.CUISINE:
        return CuisineIllus;
      case IllustrationName.MAISON:
        return MaisonIllus;
      case IllustrationName.RECYCLAGE:
        return RecyclageIllus;
      default:
        return EnergieIllus;
    }
  };

  return (
    <StyledIllustration>
      {<LottieView autoPlay autoSize loop source={renderIllustration()} />}
    </StyledIllustration>
  );
};

export default Illustration;
