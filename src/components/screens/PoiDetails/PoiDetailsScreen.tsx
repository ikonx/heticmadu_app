import React, { FunctionComponent } from 'react';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import {
  PoiDetailsContainer,
  StyledContent,
} from '@components/screens/PoiDetails/PoiDetails.style';
import Title from '@components/atoms/Typography/Title/Title';
import Text from '@components/atoms/Typography/Text/Text';
import Spacer from '@components/atoms/Spacer/Spacer';
import Theme from '@styleGuide/Theme';
import { PoiModel } from '@src/utils/models/pois.model';
import Buttons from '@src/components/atoms/Buttons/Buttons';
import { TouchableType } from '@src/components/atoms/Buttons/Buttons.enum';
import Icon from '@src/components/atoms/Icons/Icon';
import Colors from '@src/styleGuide/Colors';
import { IconName } from '@src/assets/icons/IconName.enum';
import { Direction } from '@src/components/atoms/Icons/Chevron/Chevron.style';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import PoiCard from '@src/components/molecules/PoiCard/PoiCard';
import List from '@src/components/atoms/List/List';
import NavigationHeader from '@src/components/molecules/NavigationHeader/NavigationHeader';
import Separator from '@src/components/atoms/Separator/Separator';
import TagsList, { ITag } from '@src/components/molecules/TagsList/TagsList';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  route: any;
}

const PoiDetails: FunctionComponent<Props> = ({ navigation, route }) => {
  const { poi } = route.params;
  const goBack = () => {
    navigation.goBack();
  };
  console.log(poi.description);
  return (
    <PoiDetailsContainer forceInset={{ top: 'never' }}>
      <Spacer size={8} />
      <NavigationHeader
        rightItem={
          <Buttons variant={TouchableType.ICON} onPress={goBack}>
            <Icon
              height={24}
              width={24}
              name={IconName.CROSS}
              direction={Direction.LEFT}
              fill={Colors.mainGrey}
            />
          </Buttons>
        }
      />
      <ScrollView>
        <PoiCard
          poi={poi}
          fullWidth
          onPressGreenscore={() => navigation.navigate('GreenScore')}
        />
        <StyledContent>
          <Separator />
          <Spacer size={24} />
          <TagsList
            tagsArray={poi.tags.map((tag: ITag) => ({
              label: tag,
              value: tag,
            }))}
            selectedTags={[]}
          />
          <Spacer size={24} />
          <>
            <Title variant="h2" isBold>
              Description
            </Title>
            <Text color={Theme.Colors.mainGrey}>{poi.description}</Text>
          </>
          <Spacer size={24} />
          <>
            <Title variant="h2" isBold>
              Horaires
            </Title>
            <Text color={Theme.Colors.mainGrey}>mdrrrr</Text>
          </>
          <Spacer size={24} />
          <>
            <Title variant="h2" isBold>
              Téléphone
            </Title>
            <Text color={Theme.Colors.mainGrey}>{poi.phoneNumber}</Text>
          </>
          <Spacer size={24} />
          <>
            <Title variant="h2" isBold>
              Aliments et boisson
            </Title>
            <Text color={Theme.Colors.mainGrey}>Veggie, Gluten & Soda</Text>
          </>
          <Spacer size={24} />
          <>
            <Title variant="h2" isBold>
              Accessibilité
            </Title>
            <Text color={Theme.Colors.mainGrey}>Non renseigné</Text>
          </>
        </StyledContent>
      </ScrollView>
    </PoiDetailsContainer>
  );
};

export default PoiDetails;
