import React, { FunctionComponent } from 'react';
import { SectionList } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  GreenScoreContent,
  GreenScoreHeader,
  StyledReturn,
} from '@components/screens/GreenScore/GreenScoreScreen.style';
import { greenScoreData } from '@utils/mocks/greenScore.data';
import Colors from '@styleGuide/Colors';
import { IconName } from '@assets/icons/IconName.enum';

import { TouchableType } from '@components/atoms/Buttons/Buttons.enum';
import Icon from '@components/atoms/Icons/Icon';
import { Direction } from '@components/atoms/Icons/Chevron/Chevron.style';
import Title from '@components/atoms/Typography/Title/Title';
import Text from '@components/atoms/Typography/Text/Text';
import Spacer from '@components/atoms/Spacer/Spacer';
import GreenScoreIndicator from '@components/molecules/GreenScoreIndicator/GreenScoreIndicator';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const GreenScoreScreen: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GreenScoreHeader>
        <StyledReturn
          variant={TouchableType.ICON}
          onPress={() => navigation.goBack()}
        >
          <Icon
            height={24}
            width={24}
            name={IconName.CHEVRON}
            direction={Direction.LEFT}
            fill={Colors.mainGrey}
          />
        </StyledReturn>
        <Text isBold>Greenscore</Text>
      </GreenScoreHeader>
      <Spacer size={32} />
      <GreenScoreContent>
        <SectionList
          sections={greenScoreData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GreenScoreIndicator
              title={item.title}
              text={item.text}
              color={item.color}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Title variant="h4" isBold>{title}</Title>
          )}
          ItemSeparatorComponent={() => <Spacer size={16}/>}
          SectionSeparatorComponent={() => <Spacer size={24}/>}
          stickySectionHeadersEnabled={false}
        />
      </GreenScoreContent>
    </SafeAreaView>
  );
};

export default GreenScoreScreen;
