import React from 'react';
import { NavigationScreenProp } from 'react-navigation';

import Spacer from '@src/components/atoms/Spacer/Spacer';
import NavigationHeader from '@src/components/molecules/NavigationHeader/NavigationHeader';
import Buttons from '@src/components/atoms/Buttons/Buttons';
import { TouchableType } from '@src/components/atoms/Buttons/Buttons.enum';
import Text from '@src/components/atoms/Typography/Text/Text';
import Title from '@components/atoms/Typography/Title/Title';
import ChipsList from '@components/molecules/ChipsList/ChipsList';

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
        <Title variant="h4" isBold>Aliments et boissons</Title>
        <Spacer size={16} />
        <ChipsList
          data={[
            { text: 'Vegan', value: 'vegan' },
            { text: 'Veggie', value: 'veggie' },
            { text: 'Glutenfree', value: 'glutenfree' },
            { text: 'Bio', value: 'bio' },
          ]}
          fieldIndex={1}
          onClick={() => console.log('OK')}
        />
        <Spacer size={16}/>
        <Spacer size={16}/>
        <Title variant="h4" isBold>Accessibilité</Title>
        <Spacer size={16}/>
        <ChipsList
          data={[
            { text: 'Fauteuil', value: 'fauteuil' },
            { text: 'Enfant', value: 'enfant' },
            { text: 'Chien', value: 'chien' },
          ]}
          fieldIndex={1}
          onClick={() => console.log('OK')}
        />
        <Spacer size={16}/>
        <Spacer size={16}/>
        <Title variant="h4" isBold>Tarifs</Title>
        <Spacer size={16}/>
        <ChipsList
          data={[
            { text: '€', value: '€' },
            { text: '€€', value: '€€' },
            { text: '€€€', value: '€€€' },
          ]}
          fieldIndex={1}
          onClick={() => console.log('OK')}
        />
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
