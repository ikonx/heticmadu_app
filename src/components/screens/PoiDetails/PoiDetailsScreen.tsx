import React, { FunctionComponent } from 'react';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import {
  PoiDetailsContainer,
  StyledButton,
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

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  route: any;
}

const PoiDetails: FunctionComponent<Props> = ({ navigation, route }) => {
  const { poi } = route.params;
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <PoiDetailsContainer forceInset={{ top: 'never' }}>
      <ScrollView>
        <NavigationHeader onBack={goBack} />
        <PoiCard poi={poi} fullWidth />
        <Title variant="h2" isBold>
          {poi.name}
        </Title>
        <Spacer size={8} />
        <Text color={Theme.Colors.mainGrey}>
          Choisier d’abord le thème que vous voulez{' '}
        </Text>
        <Spacer size={24} />
      </ScrollView>
    </PoiDetailsContainer>
  );
};

export default PoiDetails;
