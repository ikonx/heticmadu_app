import React, { FunctionComponent } from 'react';
import Illustration from '@components/atoms/Illustrations/Illustration';
import IllustrationName from '@assets/illustrations/IllustrationName.enum';
import {
  ChallengeBadgeContainer,
  ChallengeBadgeCount,
} from '@components/molecules/ChallengeBadge/ChallengeBadge.style';
import Badge from '@components/atoms/Badge/Badge';

interface Props {
  illustration: IllustrationName;
  background?: string;
}

const ChallengeBadge: FunctionComponent<Props> = ({ illustration, background }) => {
  return (
    <ChallengeBadgeContainer background={background}>
      <Illustration
        name={illustration}
        style={{ minHeight: 172 }}
      />
      <ChallengeBadgeCount>
        <Badge.Challenge
          count={2}
          color={background}
        />
      </ChallengeBadgeCount>
    </ChallengeBadgeContainer>
  );
};

export default ChallengeBadge;
