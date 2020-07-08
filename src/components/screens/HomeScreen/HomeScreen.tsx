import React, { useContext } from 'react';
import PoiCard from '@src/components/molecules/PoiCard/PoiCard';
import { poisData } from '@src/utils/mocks/pois.data';
import Title from '@components/atoms/Typography/Title/Title';
import Spacer from '@components/atoms/Spacer/Spacer';
import ChallengeCard from '@components/molecules/ChallengeCard/ChallengeCard';
import { ScrollView, Button, Text } from 'react-native';
import { HomeChallenges, HomeContainer, HomePlaces } from './HomeScreen.style';
import { seedPois, seedTags } from '@src/utils/seeder';
import UserContext from '@src/contexts/user/user.context';

interface Props {}

const HomeScreen = (_: Props) => {
  const { user } = useContext(UserContext);
  const seed = () => {
    // seedTags();
  };

  return (
    <HomeContainer>
      <ScrollView style={{ paddingBottom: 66 }}>
        <Title isBold>Hello, {user.firstName} ✌🏼</Title>
        {/* <Button title="seed" onPress={seed} /> */}
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
