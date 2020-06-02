import React from 'react';
import PoiCard from '@src/components/molecules/PoiCard/PoiCard';
import { poisData } from '@src/utils/mocks/pois.data';
<<<<<<< HEAD
import Avatar from '@src/components/atoms/Avatar/Avatar';
=======
import Title from '@components/atoms/Typography/Title/Title';
import { HomeContainer, HomePlaces } from './HomeScreen.style';
import Spacer from '@components/atoms/Spacer/Spacer';
import ChallengeCard from '@components/molecules/ChallengeCard/ChallengeCard';
import { ScrollView } from 'react-native';
>>>>>>> b387ae9d4439f996e2259938f8670a10cd39d5d4

interface Props {}

const HomeScreen = (_: Props) => {
  return (
<<<<<<< HEAD
    <SafeAreaView>
      <View>
        <Text variant="default">Wesh alors</Text>
      </View>
      <PoiCard poi={poisData[0]} gotBorder />
      <Avatar />
    </SafeAreaView>
=======
    <ScrollView>
      <Spacer size={24}/>
      <HomeContainer>
        <Title isBold>Hello, Victor ✌🏼</Title>
        <HomePlaces>
          <Title variant="h3" isBold>Lieu à visiter</Title>
          <Spacer size={16}/>
          <PoiCard poi={poisData[0]} gotBorder fullWidth/>
        </HomePlaces>
        <Title variant="h3" isBold>Story en cours</Title>
        <Spacer size={16} />
        <ChallengeCard
          tagsArray={[{ label: '7 Stories' }, { label: 'Énergie' }]}
          title="Toutes ses fournitures"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />
      </HomeContainer>
    </ScrollView>
>>>>>>> b387ae9d4439f996e2259938f8670a10cd39d5d4
  );
};

export default HomeScreen;
