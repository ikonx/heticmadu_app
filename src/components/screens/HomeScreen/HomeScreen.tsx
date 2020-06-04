import React from 'react';
import PoiCard from '@src/components/molecules/PoiCard/PoiCard';
import { poisData } from '@src/utils/mocks/pois.data';
import Title from '@components/atoms/Typography/Title/Title';
import Spacer from '@components/atoms/Spacer/Spacer';
import ChallengeCard from '@components/molecules/ChallengeCard/ChallengeCard';
import { ScrollView } from 'react-native';
import { HomeContainer, HomePlaces } from './HomeScreen.style';
import { SafeAreaView } from 'react-navigation';

interface Props {}

const HomeScreen = (_: Props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Spacer size={24} />
        <HomeContainer>
          <Title isBold>Hello, Victor ✌🏼</Title>
          <HomePlaces>
            <Title variant="h3" isBold>
              Lieu à visiter
            </Title>
            <Spacer size={16} />
            <PoiCard poi={poisData[0]} gotBorder fullWidth />
          </HomePlaces>
          <Title variant="h3" isBold>
            Story en cours
          </Title>
          <Spacer size={16} />
          <ChallengeCard
            tagsArray={[{ label: '7 Stories' }, { label: 'Énergie' }]}
            title="Toutes ses fournitures"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          />
        </HomeContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
