import React, { FunctionComponent } from 'react';
import LottieView from 'lottie-react-native';
import { IconName } from '@assets/icons/IconName.enum';
import Colors from '@styleGuide/Colors';
import Title from '@components/atoms/Typography/Title/Title';
import Icon from '@components/atoms/Icons/Icon';
import Spacer from '@components/atoms/Spacer/Spacer';
import Text from '@components/atoms/Typography/Text/Text';
import {
  RowContainer,
  RowLeft,
} from '@components/molecules/LeaderboardRow/LeaderboardRow.style';
import { StyledImage } from '@src/components/atoms/Avatar/Avatar';
import trophyJson from '@assets/illustrations/trophy.json';

interface Props {
  rank: number | string;
  name: string;
  text: string;
}

const LeaderboardRow: FunctionComponent<Props> = ({ rank, name, text }) => {
  return (
    <RowContainer>
      <RowLeft>
        {rank === 1 ? (
          <>
            <LottieView
              autoPlay
              autoSize
              loop
              source={trophyJson}
              style={{ height: 64, width: 64, position: 'absolute', left: -8 }}
            />
             <Spacer size={12} />
          </>
        ) : (
          <Title variant="h3" isBold>
            {rank}
          </Title>
        )}
        <Spacer size={16} />
        {/* <Icon name={IconName.USER} /> */}
        <StyledImage
          style={{ height: 32, width: 32 }}
          source={{
            uri: `https://source.unsplash.com/9${rank}${rank}x90${rank}/?face`,
          }}
        />
        <Spacer size={16} />
        <Text isBold>{name}</Text>
      </RowLeft>
      <Text variant="label" color={Colors.mainGrey} isBold>
        {text}
      </Text>
    </RowContainer>
  );
};

export default LeaderboardRow;
