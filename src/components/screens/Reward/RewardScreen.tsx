import React, { FunctionComponent } from 'react';
import { RewardBadge, RewardButton, RewardContainer, RewardCross, RewardSubtitle, RewardTitle } from './Reward.style';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { TouchableType } from '@components/atoms/Buttons/Buttons.enum';
import Icon from '@components/atoms/Icons/Icon';
import { IconName } from '@assets/icons/IconName.enum';
import { Direction } from '@components/atoms/Icons/Chevron/Chevron.style';
import Colors from '@styleGuide/Colors';
import ChallengeBadge from '@components/molecules/ChallengeBadge/ChallengeBadge';
import IllustrationName from '@assets/illustrations/IllustrationName.enum';
import Title from '@components/atoms/Typography/Title/Title';
import Text from '@components/atoms/Typography/Text/Text';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
const RewardScreen: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <>
      <RewardContainer>
        <RewardCross variant={TouchableType.ICON} onPress={() => navigation.goBack()}>
          <Icon
            height={24}
            width={24}
            name={IconName.CROSS}
            direction={Direction.LEFT}
            fill={Colors.mainGrey}
          />
        </RewardCross>
        <RewardBadge>
          <ChallengeBadge
            illustration={IllustrationName.ENERGIE}
            count={2}
            style={{
              minHeight: 172,
            }}
          />
        </RewardBadge>
        <RewardTitle>
          <Title variant="h3" align="center" isBold>Félicitation vous avez reussi
            le défi Ma feuille l’unique 🎉</Title>
        </RewardTitle>
        <RewardSubtitle>
          <Text>
            Vous avez débloqué un coupon de reduction
          </Text>
        </RewardSubtitle>
      </RewardContainer>
      <RewardButton variant={TouchableType.IMPORTANT}>
        <Text
          variant="button"
          color={Colors.mainWhite}
          isBold
        >
          Voir le coupon
        </Text>
      </RewardButton>
    </>
  );
};

export default RewardScreen;
