import React from 'react';
import {
  RewardCross,
  StyledImage,
  CouponText,
  TimelineContainer,
  NoCoupon,
  StyledCouponContainer,
  TimelineLine,
} from './Coupon.style';
import { TouchableType } from '@components/atoms/Buttons/Buttons.enum';
import Icon from '@components/atoms/Icons/Icon';
import { IconName } from '@assets/icons/IconName.enum';
import { Direction } from '@components/atoms/Icons/Chevron/Chevron.style';
import Colors from '@styleGuide/Colors';
import Timeline from '@components/molecules/Timeline/Timeline';
import { Text } from 'react-native';

function getCouponType(category: string) {
  switch (category) {
    case 'cuisine':
      return 'restaurant';
    case 'maison':
      return 'boutique';
    case 'recyclage':
      return 'boutique';
    case 'energie':
      return 'activité';
    default:
      return 'default';
  }
}

const CouponScreen = ({ navigation, route }) => {
  const { count } = route.params.item;
  const { illustration } = route.params.item;
  const couponType = getCouponType(illustration);
  return (
    <StyledCouponContainer>
      <RewardCross
        variant={TouchableType.ICON}
        onPress={() => navigation.goBack()}
      >
        <Icon
          height={24}
          width={24}
          name={IconName.CROSS}
          direction={Direction.LEFT}
          fill={Colors.mainGrey}
        />
      </RewardCross>
      {count >= 3 ? (
        <StyledImage
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/7/78/Qrcode_wikipedia_fr_v2clean.png',
          }}
        ></StyledImage>
      ) : (
        <NoCoupon></NoCoupon>
      )}

      <CouponText>
        {count >= 3
          ? 'Bénéficier de -15% sur votre addition dans tous les restaurants partenaires'
          : "Malheuresement vous n'avez pas encore de réduction de disponible 😥. \n Réalisez des défis pour en débloquer."}
      </CouponText>
      <CouponText>Prochain coupon...</CouponText>
      {couponType !== undefined ? (
        <TimelineContainer>
          <TimelineLine></TimelineLine>
          <Timeline
            count={count}
            couponType={couponType}
            category={illustration}
            nbOfChallenge={3}
          ></Timeline>
          <Timeline
            count={count}
            couponType={couponType}
            category={illustration}
            nbOfChallenge={6}
          ></Timeline>
          <Timeline
            count={count}
            couponType={couponType}
            category={illustration}
            nbOfChallenge={12}
          ></Timeline>
          <Timeline
            count={count}
            couponType={couponType}
            category={illustration}
            nbOfChallenge={18}
          ></Timeline>
          <Timeline
            count={count}
            couponType={couponType}
            category={illustration}
            nbOfChallenge={24}
          ></Timeline>
        </TimelineContainer>
      ) : (
        <Text>loading...</Text>
      )}
    </StyledCouponContainer>
  );
};

export default CouponScreen;
