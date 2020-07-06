import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { NavigationScreenProp } from 'react-navigation';
import {
  some,
  intersectionWith,
  isEqual,
  differenceWith,
  isObjectLike,
} from 'lodash';

import NavigationHeader from '@src/components/molecules/NavigationHeader/NavigationHeader';
import SearchInput from '@src/components/molecules/SearchInput/SearchInput';
import Buttons from '@src/components/atoms/Buttons/Buttons';
import { TouchableType } from '@src/components/atoms/Buttons/Buttons.enum';
import Icon from '@src/components/atoms/Icons/Icon';
import { IconName } from '@src/assets/icons/IconName.enum';
import Spacer from '@src/components/atoms/Spacer/Spacer';
import TagsList, { ITag } from '@src/components/molecules/TagsList/TagsList';
import PoiCard from '@src/components/molecules/PoiCard/PoiCard';
import { poisData } from '@src/utils/mocks/pois.data';
import { PoiModel } from '@src/utils/models/pois.model';
import { StyledSearchScreen, StyledContent } from './SearchScreen.style';

interface Props {
  navigation: NavigationScreenProp<{}, 'Search'>;
}

const SearchScreen = ({ navigation }: Props) => {
  const { Colors } = useContext(ThemeContext);
  const [searchValue, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<ITag[]>([]);
  const [pois, setPois] = useState<PoiModel[]>([...poisData]);
  const [defaultPois] = useState<PoiModel[]>([...poisData]);
  const goToFiltersScreen = () => {
    navigation.navigate('Filters');
  };
  const rightItem = (
    <Buttons variant={TouchableType.ICON} onPress={goToFiltersScreen}>
      <Icon
        height={24}
        width={24}
        name={IconName.FILTERS}
        color={Colors.mainGrey}
      />
    </Buttons>
  );

  const goBack = () => navigation.goBack();

  const onSearch = (value: string) => {};

  const filterPois = (existingTags: ITag[]) => {
    const newPois = [...pois];
    const formatedExistingTags = existingTags.map((item: ITag) => item.label);

    existingTags.length > 0
      ? newPois.filter((item: PoiModel) =>
          intersectionWith(item.tags, formatedExistingTags, isEqual),
        )
      : defaultPois;
    setPois(newPois);
  };

  const updateTags = (_tag: ITag) => {
    const newSelectedTags = [...selectedTags];
    const isTagSelected: boolean = some(selectedTags, _tag);
    if (isTagSelected) {
    } else {
      newSelectedTags.push(_tag);
    }
    setSelectedTags(newSelectedTags);
  };

  const openPoiDetails = (poi: PoiModel) => () => {
    navigation.navigate('Details', { poi });
  };

  useEffect(() => {
    let search: string = ' ';
    selectedTags.map((tag: ITag) => (search = `${search} ${tag.label}`));
    setSearch(search);
  }, [selectedTags]);

  return (
    <StyledSearchScreen forceInset={{ bottom: 'never' }}>
      <Spacer size={8} />
      <NavigationHeader
        onBack={goBack}
        middleItem={<SearchInput onSearch={onSearch} value={searchValue} />}
        rightItem={rightItem}
      />
      <Spacer size={8} />
      <TagsList
        onTagPress={updateTags}
        selectedTags={selectedTags}
        tagsArray={[
          { label: 'africain' },
          { label: 'indien' },
          { label: 'italien' },
          { label: 'junkfood' },
          { label: 'mexicain' },
        ]}
        contentContainerStyle={{
          paddingLeft: 20,
        }}
      />
      <Spacer size={24} />
      <StyledContent
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {pois.map((poi: PoiModel) => (
          <React.Fragment key={`poiCard_${poi.id}`}>
            <PoiCard gotBorder poi={poi} fullWidth onPress={openPoiDetails} />
            <Spacer size={16} />
          </React.Fragment>
        ))}
      </StyledContent>
    </StyledSearchScreen>
  );
};

export default SearchScreen;
