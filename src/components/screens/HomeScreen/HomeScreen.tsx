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
import { challengesThemes } from '@utils/mocks/challengesThemes.data';
import Colors from '@styleGuide/Colors';

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
  const onPressChallenge = (item: any) => {
    _.navigation.navigate('Stories', {
      screen: 'List',
      params: {
        item,
        style: {
          color: Colors.categories.energy,
          illustration: 'energie',
        },
      },
    });
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
            title={challengesThemes[0].title}
            description={challengesThemes[0].description}
            onPress={() => onPressChallenge(challengesThemes[0])}
          />
        </HomeChallenges>
      </ScrollView>
    </HomeContainer>
  );
};

export default HomeScreen;
