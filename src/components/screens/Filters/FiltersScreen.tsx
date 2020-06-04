import React from 'react';
import { NavigationScreenProp } from 'react-navigation';

import Spacer from '@src/components/atoms/Spacer/Spacer';
import NavigationHeader from '@src/components/molecules/NavigationHeader/NavigationHeader';
import Buttons from '@src/components/atoms/Buttons/Buttons';
import { TouchableType } from '@src/components/atoms/Buttons/Buttons.enum';
import Text from '@src/components/atoms/Typography/Text/Text';

import { StyledFiltersScreen, StyledContent } from './Filters.style';
import Theme from '@src/styleGuide/Theme';

interface Props {
  navigation: NavigationScreenProp<{}, 'Filters'>;
}

const FiltersScreen = ({ navigation }: Props) => {
  const goBack = () => navigation.goBack();
  const goToFiltersScreen = () => {
    navigation.navigate('Filters');
  };
  const rightItem = (
    <Buttons variant={TouchableType.ICON} onPress={goToFiltersScreen}>
      <Text variant="button" color={Theme.Colors.mainPurple} isBold>
        Réinitialiser
      </Text>
    </Buttons>
  );
  const middleItem = (
    <Text variant="default" color={Theme.Colors.mainBlack} isBold>
      Filtres
    </Text>
  );
  return (
    <StyledFiltersScreen forceInset={{ bottom: 'never' }}>
      <Spacer size={8} />
      <NavigationHeader
        onBack={goBack}
        middleItem={middleItem}
        rightItem={rightItem}
      />
      <Spacer size={8} />
      <StyledContent>
        <Buttons
          variant={TouchableType.DEFAULT}
          style={{ justifyContent: 'center' }}
        >
          <Text variant="button" color={Theme.Colors.mainWhite} isBold>
            Appliquer
          </Text>
        </Buttons>
      </StyledContent>
    </StyledFiltersScreen>
  );
};

export default FiltersScreen;
