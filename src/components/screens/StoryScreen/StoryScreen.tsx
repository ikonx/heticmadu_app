import React, { FunctionComponent } from 'react';
import { ScrollView } from 'react-native';
import { StoryContainer } from '@components/screens/StoryScreen/StoryScreen.style';
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

const StoryScreen: FunctionComponent<Props> = ({ navigation }) => {
  const onClickCard = () => {
    navigation && navigation.navigate('Stories');
  };

  return (
    <ScrollView>
      <StoryContainer>
        <Title variant="h2" isBold>Story</Title>
        <Spacer size={8} />
        <Text color={Theme.Colors.mainGrey}>Choisier d’abord le thème que vous voulez </Text>
        <Spacer size={24} />
        <ChallengeCard
          tagsArray={[{ label: '7 Stories' }, { label: 'Énergie' }]}
          title="Toutes ses fournitures"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          background={Theme.Colors.mainRed}
          onPress={onClickCard}
        />
        <Spacer size={16} />
        <ChallengeCard
          tagsArray={[{ label: '14 Stories' }, { label: 'Cuisine' }]}
          title="Toutes ses fournitures"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          background={Theme.Colors.darknessBlue}
          illustration={IllustrationName.CUISINE}
        />
        <Spacer size={16} />
        <ChallengeCard
          tagsArray={[{ label: '2 Stories' }, { label: 'Maison' }]}
          title="Toutes ses fournitures"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          background={Theme.Colors.mainOrange}
          illustration={IllustrationName.MAISON}
        />
        <Spacer size={16} />
        <ChallengeCard
          tagsArray={[{ label: '6 Stories' }, { label: 'Recyclage' }]}
          title="Toutes ses fournitures"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          background={Theme.Colors.mainPurple}
          illustration={IllustrationName.RECYCLAGE}
        />
        <Spacer size={16} />
        <ChallengeCard
          tagsArray={[{ label: '6 Stories' }, { label: 'Recyclage' }]}
          title="Toutes ses fournitures"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          background={Theme.Colors.mainPurple}
          illustration={IllustrationName.RECYCLAGE}
        />
      </StoryContainer>
    </ScrollView>
  );
};

export default StoryScreen;
