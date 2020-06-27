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
  count: number;
}

const ChallengeBadge: FunctionComponent<Props> = ({ illustration, background, count, ...rest }) => {
  return (
    <ChallengeBadgeContainer background={background}>
      <Illustration
        name={illustration}
        {...rest}
      />
      <ChallengeBadgeCount>
        <Badge.Challenge
          count={count}
          color={background}
        />
      </ChallengeBadgeCount>
    </ChallengeBadgeContainer>
  );
};

export default ChallengeBadge;
