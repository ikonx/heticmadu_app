import React, { FunctionComponent } from 'react';
import { IllustrationName } from '@assets/illustrations/IllustrationName.enum';
import LottieView from 'lottie-react-native';
import StyledIllustration from './Illustration.style';

import EnergieIllus from '@assets/illustrations/Illustration_1-bis.json';
import CuisineIllus from '@assets/illustrations/Illustration_2-bis.json';
import MaisonIllus from '@assets/illustrations/Illustration_3-bis.json';
import RecyclageIllus from '@assets/illustrations/Illustration_4-bis.json';
import ConfettiIllus from '@assets/illustrations/Illustration_Confetti.json';

interface Props {
  name: IllustrationName;
}

const Illustration: FunctionComponent<Props> = ({ name, ...rest }) => {
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
      case IllustrationName.CONFETTI:
        return ConfettiIllus;
      default:
        return EnergieIllus;
    }
  };

  return (
    <StyledIllustration>
      {
        <LottieView
          autoPlay
          autoSize
          loop
          source={renderIllustration()}
          {...rest}
        />
      }
    </StyledIllustration>
  );
};

export default Illustration;
