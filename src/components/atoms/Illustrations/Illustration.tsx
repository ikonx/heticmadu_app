import React, { FunctionComponent } from 'react';
import { IllustrationName } from '../../../assets/illustrations/IllustrationName.enum';
import StyledIllustration from './Illustration.style';

import EnergieIllus from '../../../assets/illustrations/Illustration_1.svg';
import CuisineIllus from '../../../assets/illustrations/Illustration_2.svg';
import MaisonIllus from '../../../assets/illustrations/Illustration_3.svg';
import RecyclageIllus from '../../../assets/illustrations/Illustration_4.svg';

interface Props {
  name: IllustrationName;
}

const Illustration: FunctionComponent<Props> = ({ name }) => {
  const renderIllustration = () => {
    switch (name) {
      case IllustrationName.ENERGIE:
        return <EnergieIllus />;
      case IllustrationName.CUISINE:
        return <CuisineIllus />;
      case IllustrationName.MAISON:
        return <MaisonIllus />;
      case IllustrationName.RECYCLAGE:
        return <RecyclageIllus />;
      default:
        return <EnergieIllus />;
    }
  };

  return <StyledIllustration>{renderIllustration()}</StyledIllustration>;
};

export default Illustration;
