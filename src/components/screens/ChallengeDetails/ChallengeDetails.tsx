import React, { FunctionComponent, SyntheticEvent } from 'react';
import { Image, NativeScrollEvent, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  ChallengeDetailsContainer,
  ChallengeDetailsUser,
  StyledButton,
  StyledContainer,
} from './ChallengeDetails.style';
import Colors from '@styleGuide/Colors';
import Title from '@components/atoms/Typography/Title/Title';
import Text from '@components/atoms/Typography/Text/Text';
import Spacer from '@components/atoms/Spacer/Spacer';
import StoryImage from '@assets/img/temp-story-details.png';
import Separator from '@components/atoms/Separator/Separator';
import { TouchableType } from '@components/atoms/Buttons/Buttons.enum';
import Icon from '@components/atoms/Icons/Icon';
import { IconName } from '@assets/icons/IconName.enum';

interface Props {}

const ChallengeDetails: FunctionComponent<Props> = () => {
  const navigation = useNavigation();
  const scrollEvent = (e: SyntheticEvent<any, NativeScrollEvent>) => {
    navigation.setOptions({
      title: e.nativeEvent.contentOffset.y > 20 ? 'Ma feuille l\'unique' : '',
    });
  };

  return (
    <StyledContainer>
      <ScrollView onScroll={scrollEvent} scrollEventThrottle={10}>
        <ChallengeDetailsContainer>
          <Title variant="h2" isBold>Ma feuille l’unique</Title>
          <Spacer size={12}/>
          <Text color={Colors.mainGrey}>
            Le papier est la ressource à
            rationaliser de manière prioritaire.
            Il représente 75% des déchets produits en entreprise
            et le taux de recyclage est de seulement 35% pour le papier utilisé en entreprise.
            Pour une utilisation éco-responsable,
            quelques gestes simples peuvent être mis en place pour réduire l’utilisation :)
          </Text>
        </ChallengeDetailsContainer>
        <Spacer size={24}/>
        <Spacer size={24}/>
        <Image
          source={StoryImage}
          style={{
            width: '100%',
          }}
        />
        <Spacer size={24}/>
        <Spacer size={24}/>
        <ChallengeDetailsContainer>
          <Title variant="h4" isBold>Objectifs du défi</Title>
          <Spacer size={12}/>
          <Text color={Colors.mainGrey}>
            Dans les bureaux, l'imprimante, de plus en plus accessible,
            nous pousse à "sortir" de nombreux documents numériques, au cas où.
            Or, trop souvent ces impressions sont inexploitées tout en négligeant le
            formidable moyen de stockage qu'est notre ordinateur via une
            bonne gestion de nos fichiers.
          </Text>
          <Spacer size={24}/>
          <Spacer size={24}/>
          <ChallengeDetailsUser>
            <Icon name={IconName.USER} width={40} height={40}/>
            <Spacer size={16}/>
            <Text variant="button" isBold>Andrea</Text>
            <Text variant="button"> a réalisé le défi 👍 </Text>
          </ChallengeDetailsUser>
          <Spacer size={24}/>
          <Separator />
          <Spacer size={24}/>
          <ChallengeDetailsUser>
            <Icon name={IconName.USER} width={40} height={40}/>
            <Spacer size={16}/>
            <Text variant="button" isBold>Andrea</Text>
            <Text variant="button"> a réalisé le défi 👍 </Text>
          </ChallengeDetailsUser>
        </ChallengeDetailsContainer>
        <Spacer size={24}/>
        <Spacer size={24}/>
      </ScrollView>
      <StyledButton variant={TouchableType.IMPORTANT}>
        <Text variant="button" color={Colors.mainWhite} isBold>Je participe au défi</Text>
      </StyledButton>
    </StyledContainer>
  );
};

export default ChallengeDetails;
