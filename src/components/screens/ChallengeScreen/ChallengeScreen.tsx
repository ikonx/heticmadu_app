import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
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
import { challengesThemes } from '@utils/mocks/challengesThemes.data';
import { ChallengeListData } from '@utils/mocks/challengeList.data';

interface Props {
  navigation?: NavigationScreenProp<NavigationState, NavigationParams>;
}

const ChallengeScreen: FunctionComponent<Props> = ({ navigation }) => {
  const getIllustration = (type: string) => {
    let illustration;
    let color;

    switch (type) {
      case 'cuisine':
        illustration = IllustrationName.CUISINE;
        color = Colors.categories.cooking;
        return {
          illustration,
          color,
        };
      case 'energie':
        illustration = IllustrationName.ENERGIE;
        color = Colors.categories.energy;
        return {
          illustration,
          color,
        };
      case 'maison':
        illustration = IllustrationName.MAISON;
        color = Colors.categories.house;
        return {
          illustration,
          color,
        };
      case 'recyclage':
        illustration = IllustrationName.RECYCLAGE;
        color = Colors.categories.recycle;
        return {
          illustration,
          color,
        };
      default:
        illustration = IllustrationName.ENERGIE;
        color = Colors.mainGreen;
        return {
          illustration,
          color,
        };
    }
  };
  const onClickCard = (item: any, style) => {
    navigation && navigation.navigate('Stories', {
      screen: 'List',
      params: {
        item,
        style,
      },
    });
  };

  return (
    <ChallengeContainer>
      <Title variant="h2" isBold>
        Défis
      </Title>
      <Spacer size={8} />
      <Text color={Colors.mainGrey}>
        Une multitude de Défis pleine d’enrichissements
      </Text>
      <Spacer size={24} />
      <Spacer size={16} />
      <FlatList
        data={challengesThemes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ChallengeCard
            tagsArray={[{ label: `${ChallengeListData.length} Défi` }, { label: item.type }]}
            title={item.title}
            description={item.description}
            background={getIllustration(item.type).color}
            illustration={getIllustration(item.type).illustration}
            onPress={() => onClickCard(item, getIllustration(item.type))}
          />
        )}
        ItemSeparatorComponent={() => <Spacer size={16}/>}
        ListFooterComponent={() => <Spacer size={24} />}
      />
    </ChallengeContainer>
  );
};

export default ChallengeScreen;
