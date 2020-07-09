import React, { useContext } from 'react';
import PoiCard from '@src/components/molecules/PoiCard/PoiCard';
import { poisData } from '@src/utils/mocks/pois.data';
import Title from '@components/atoms/Typography/Title/Title';
import Spacer from '@components/atoms/Spacer/Spacer';
import ChallengeCard from '@components/molecules/ChallengeCard/ChallengeCard';
import { ScrollView } from 'react-native';
import { HomeChallenges, HomeContainer, HomePlaces } from './HomeScreen.style';
import UserContext from '@src/contexts/user/user.context';
import { PoiModel } from '@utils/models/pois.model';

interface Props {
  navigation: any;
}

const HomeScreen = (_: Props) => {
  const { user } = useContext(UserContext);
  const onPressPoi = (poi: PoiModel) => () => {
    _.navigation.navigate('Maps', {
      screen: 'Details',
      params: { poi },
    });
  };
  const onPressChallenge = () => {
    _.navigation.navigate('Stories');
  };

  return (
    <HomeContainer>
      <ScrollView style={{ paddingBottom: 66 }}>
        <Title isBold>Hello, {user.firstName} ✌🏼</Title>
        {/* <Button title="seed" onPress={seed} /> */}
        <HomePlaces animation="fadeIn">
          <Title variant="h3" isBold>
            Lieu à visiter
          </Title>
          <Spacer size={16} />
          <PoiCard
            poi={poisData[0]}
            onPress={onPressPoi}
            gotBorder
            fullWidth
          />
        </HomePlaces>
        <Title variant="h3" isBold>
          Défi suggéré
        </Title>
        <Spacer size={16} />
        <HomeChallenges animation="fadeIn">
          <ChallengeCard
            tagsArray={[{ label: '7 Défis' }, { label: 'Énergie' }]}
            title="Toutes ses fournitures"
            description="Apprenez à mieux gérer vos fournitures au travail."
            onPress={onPressChallenge}
          />
        </HomeChallenges>
      </ScrollView>
    </HomeContainer>
  );
};

export default HomeScreen;
