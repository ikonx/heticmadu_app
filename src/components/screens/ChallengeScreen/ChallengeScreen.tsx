import React, { FunctionComponent } from 'react';
import { ScrollView } from 'react-native';
import { ChallengeContainer } from '@components/screens/ChallengeScreen/ChallengeScreen.style';
import Title from '@components/atoms/Typography/Title/Title';
import Text from '@components/atoms/Typography/Text/Text';
import Spacer from '@components/atoms/Spacer/Spacer';
import ChallengeCard from '@components/molecules/ChallengeCard/ChallengeCard';
import IllustrationName from '@assets/illustrations/IllustrationName.enum';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import Colors from '@styleGuide/Colors';

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
        <Title variant="h2" isBold>
          Défis
        </Title>
        <Spacer size={8} />
        <Text color={Colors.mainGrey}>
          Une multitude de Défis pleine d’enrichissements
        </Text>
        <Spacer size={24} />
        <ChallengeCard
          tagsArray={[{ label: '7 Défis' }, { label: 'Énergie' }]}
          title="Toutes ses fournitures"
          description="Apprenez à mieux gérer vos fournitures au travail. "
          background={Colors.categories.energy}
          onPress={onClickCard}
        />
        <Spacer size={16} />
        <ChallengeCard
          tagsArray={[{ label: '14 Défis' }, { label: 'Cuisine' }]}
          title="Des recettes éco"
          description="Des recettes délicieuses et éco-responsables."
          background={Colors.categories.cooking}
          illustration={IllustrationName.CUISINE}
        />
        <Spacer size={16} />
        <ChallengeCard
          tagsArray={[{ label: '2 Défis' }, { label: 'Maison' }]}
          title="Éco à la maison"
          description="De bonnes habitudes pour mon corps et pour la planète."
          background={Colors.categories.house}
          illustration={IllustrationName.MAISON}
        />
        <Spacer size={16} />
        <ChallengeCard
          tagsArray={[{ label: '6 Défis' }, { label: 'Recyclage' }]}
          title="La boucle du recyclage"
          description="Apprenez à mieux recycler pour mieux consommer."
          background={Colors.categories.recycle}
          illustration={IllustrationName.RECYCLAGE}
        />
      </ChallengeContainer>
    </ScrollView>
  );
};

export default ChallengeScreen;
