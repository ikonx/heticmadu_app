import React, { FunctionComponent } from 'react';
import { IconName } from '@assets/icons/IconName.enum';
import Colors from '@styleGuide/Colors';
import Title from '@components/atoms/Typography/Title/Title';
import Icon from '@components/atoms/Icons/Icon';
import Spacer from '@components/atoms/Spacer/Spacer';
import Text from '@components/atoms/Typography/Text/Text';
import { RowContainer, RowLeft } from '@components/molecules/LeaderboardRow/LeaderboardRow.style';

interface Props {
  rank: number|string;
  name: string;
  text: string;
}

const LeaderboardRow: FunctionComponent<Props> = ({ rank, name, text }) => {
  return (
    <RowContainer>
      <RowLeft>
        <Title variant="h3" isBold>{ rank }</Title>
        <Spacer size={16}/>
        <Icon name={IconName.USER}/>
        <Spacer size={16}/>
        <Text isBold>{ name }</Text>
      </RowLeft>
      <Text
        variant="label"
        color={Colors.mainGrey}
        isBold
      >
        { text }
      </Text>
    </RowContainer>
  );
};

export default LeaderboardRow;
