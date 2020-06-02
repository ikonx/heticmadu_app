import React, { FunctionComponent } from 'react';
import ChallengeRow from '@components/molecules/ChallengeRow/ChallengeRow';
import { IconName } from '@assets/icons/IconName.enum';
import Theme from '@src/styleGuide/Theme';
import Spacer from '@components/atoms/Spacer/Spacer';

interface Props {}

const ChallengeRowStories: FunctionComponent<Props> = () => {
  return (
    <>
      <ChallengeRow
        text="Story"
        icon={IconName.LOCK}
        clickEvent={() => console.log('OK')}
        color={Theme.Colors.mainBlue}
        disabled
      />
      <Spacer size={16} />
      <ChallengeRow
        text="Story"
        icon={IconName.STORY}
        clickEvent={() => console.log('OK')}
        color={Theme.Colors.mainPurple}
      />
    </>
  );
};

export default ChallengeRowStories;
