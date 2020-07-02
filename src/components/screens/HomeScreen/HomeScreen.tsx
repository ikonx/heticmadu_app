import React from 'react';
import PoiCard from '@src/components/molecules/PoiCard/PoiCard';
import { poisData } from '@src/utils/mocks/pois.data';
import Title from '@components/atoms/Typography/Title/Title';
import Spacer from '@components/atoms/Spacer/Spacer';
import ChallengeCard from '@components/molecules/ChallengeCard/ChallengeCard';
import { ScrollView } from 'react-native';
import { HomeChallenges, HomeContainer, HomePlaces } from './HomeScreen.style';

interface Props {}

const HomeScreen = (_: Props) => {
  return (
    <HomeContainer>
      <ScrollView style={{ paddingBottom: 66 }}>
        <Title isBold>Hello, Victor ✌🏼</Title>
        <HomePlaces>
          <Title variant="h3" isBold>
            Lieu à visiter
          </Title>
          <Spacer size={16} />
          <PoiCard poi={poisData[0]} gotBorder fullWidth />
        </HomePlaces>
        <Title variant="h3" isBold>
          Défi en cours
        </Title>
        <Spacer size={16} />
        <HomeChallenges>
          <ChallengeCard
            tagsArray={[{ label: '7 Défi' }, { label: 'Énergie' }]}
            title="Toutes ses fournitures"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          />
        </HomeChallenges>
      </ScrollView>
    </HomeContainer>
  );
};

export default HomeScreen;
