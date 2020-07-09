import React, { useContext, useEffect, useState } from 'react';
import { NavigationScreenProp } from 'react-navigation';

import { accessibilityFilter, alimentationFilter, pricingFilter } from '@utils/mocks/filters.data';
import PoisContext from '@src/contexts/pois/pois.context';
import FiltersContext from '@src/contexts/filters/filters.context';
import Spacer from '@src/components/atoms/Spacer/Spacer';
import NavigationHeader from '@src/components/molecules/NavigationHeader/NavigationHeader';
import Buttons from '@src/components/atoms/Buttons/Buttons';
import { TouchableType } from '@src/components/atoms/Buttons/Buttons.enum';
import Text from '@src/components/atoms/Typography/Text/Text';
import Title from '@components/atoms/Typography/Title/Title';
import ChipsList from '@components/molecules/ChipsList/ChipsList';

import { StyledFiltersScreen, StyledContent, StyledButton } from './Filters.style';
import Theme from '@src/styleGuide/Theme';
import { PoiModel } from '@utils/models/pois.model';
import SearchContext from '@src/contexts/search/search.context';

interface Props {
  navigation: NavigationScreenProp<{}, 'Filters'>;
}

const FiltersScreen = ({ navigation }: Props) => {
  const [activeButton, setActiveButton] = useState(false);
  const { pois: defaultPois, setFetchingPois } = useContext(PoisContext);
  const { pois, setPois, setSearch, setSelectedTags } = useContext(SearchContext);
  const { activeFilters, setActiveFilters, defaultFilters } = useContext(FiltersContext);
  const goBack = () => navigation.goBack();
  const isFiltersEmpty = (activeFilters: any) => activeFilters.some((item: any) => (
    Object.keys(item).length !== 0
  ));
  const resetFilters = () => {
    setActiveFilters(defaultFilters);
    setActiveButton(false);
    setFetchingPois(true);
    setPois(defaultPois);
    setSelectedTags([]);
    setSearch('');
    goBack();
  };
  const rightItem = (
    <Buttons variant={TouchableType.ICON} onPress={resetFilters}>
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
  const updateChip = (item: any, fieldIndex: number) => {
    const newFilters = [...activeFilters];

    newFilters[fieldIndex] = item;

    setActiveButton(isFiltersEmpty(newFilters));
    setActiveFilters(newFilters);
  };

  const applyFilters = () => {
    const filters = activeFilters.filter((filter: any) => Object.keys(filter).length > 0);
    const formattedFilters = filters.map((item: any) => item.value);
    const formattedPois = pois.filter((poi: PoiModel) => (
      formattedFilters.every((item: string) => {
        const isCorrectPrice = item.includes('€') && poi.averagePrice === item;
        const isBio = item === 'bio' && poi.bio === '1';

        return poi[item] === true || isCorrectPrice || isBio;
      })
    ));

    setPois(formattedPois);
    goBack();
  };

  useEffect(() => {
    setActiveButton(isFiltersEmpty(activeFilters));
  });

  return (
    <>
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
            data={alimentationFilter}
            active={activeFilters[0].value}
            fieldIndex={0}
            onClick={(item, fieldIndex) => updateChip(item, fieldIndex)}
          />
          <Spacer size={16}/>
          <Spacer size={16}/>
          <Title variant="h4" isBold>Accessibilité</Title>
          <Spacer size={16}/>
          <ChipsList
            data={pricingFilter}
            active={activeFilters[1].value}
            fieldIndex={1}
            onClick={(item, fieldIndex) => updateChip(item, fieldIndex)}
          />
          <Spacer size={16}/>
          <Spacer size={16}/>
          <Title variant="h4" isBold>Tarifs</Title>
          <Spacer size={16}/>
          <ChipsList
            data={accessibilityFilter}
            active={activeFilters[2].value}
            fieldIndex={2}
            onClick={(item, fieldIndex) => updateChip(item, fieldIndex)}
          />
        </StyledContent>
      </StyledFiltersScreen>
      <StyledButton
        variant={TouchableType.IMPORTANT}
        disabled={!activeButton}
        onPress={applyFilters}
      >
        <Text variant="button" color={Theme.Colors.mainWhite} isBold>
          Appliquer
        </Text>
      </StyledButton>
    </>
  );
};

export default FiltersScreen;
