import React, { FunctionComponent } from 'react';
import { ScrollView } from 'react-native';
import { ChallengeContainer } from '@components/screens/ChallengeScreen/ChallengeScreen.style';
import Title from '@components/atoms/Typography/Title/Title';
import Text from '@components/atoms/Typography/Text/Text';
import Spacer from '@components/atoms/Spacer/Spacer';
import Theme from '@styleGuide/Theme';
import ChallengeCard from '@components/molecules/ChallengeCard/ChallengeCard';
import IllustrationName from '@assets/illustrations/IllustrationName.enum';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';

interface Props {
  navigation?: NavigationScreenProp<NavigationState, NavigationParams>;
}

const ChallengeScreen: FunctionComponent<Props> = ({ navigation }) => {
  const onClickCard = () => {
    navigation && navigation.navigate('Stories');
  };

  return (
    <ScrollView>
      <ChallengeContainer>
        <Title variant="h2" isBold>Défi</Title>
        <Spacer size={8} />
        <Text color={Theme.Colors.mainGrey}>Une multitudes de Défi pleines d’enrichissement</Text>
        <Spacer size={24} />
        <ChallengeCard
          tagsArray={[{ label: '7 Défi' }, { label: 'Énergie' }]}
          title="Toutes ses fournitures"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          background={Theme.Colors.mainRed}
          onPress={onClickCard}
        />
        <Spacer size={16} />
        <ChallengeCard
          tagsArray={[{ label: '14 Défi' }, { label: 'Cuisine' }]}
          title="Toutes ses fournitures"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          background={Theme.Colors.darknessBlue}
          illustration={IllustrationName.CUISINE}
        />
        <Spacer size={16} />
        <ChallengeCard
          tagsArray={[{ label: '2 Défi' }, { label: 'Maison' }]}
          title="Toutes ses fournitures"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          background={Theme.Colors.mainOrange}
          illustration={IllustrationName.MAISON}
        />
        <Spacer size={16} />
        <ChallengeCard
          tagsArray={[{ label: '6 Défi' }, { label: 'Recyclage' }]}
          title="Toutes ses fournitures"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          background={Theme.Colors.mainPurple}
          illustration={IllustrationName.RECYCLAGE}
        />
      </ChallengeContainer>
    </ScrollView>
  );
};

export default ChallengeScreen;
