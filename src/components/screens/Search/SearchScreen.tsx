import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { NavigationScreenProp } from 'react-navigation';
import { FlatList } from 'react-native';
import {
  some,
  intersectionWith,
  isEqual,
} from 'lodash';

import NavigationHeader from '@src/components/molecules/NavigationHeader/NavigationHeader';
import SearchInput from '@src/components/molecules/SearchInput/SearchInput';
import Buttons from '@src/components/atoms/Buttons/Buttons';
import { TouchableType } from '@src/components/atoms/Buttons/Buttons.enum';
import Icon from '@src/components/atoms/Icons/Icon';
import { IconName } from '@src/assets/icons/IconName.enum';
import { StyledSearchScreen, StyledContent } from './SearchScreen.style';
import Spacer from '@src/components/atoms/Spacer/Spacer';
import TagsList, { ITag } from '@src/components/molecules/TagsList/TagsList';
import PoiCard from '@src/components/molecules/PoiCard/PoiCard';
import { PoiModel } from '@src/utils/models/pois.model';
import PoisContext from '@src/contexts/pois/pois.context';
import TagsContext from '@src/contexts/tags/tags.context';

interface Props {
  navigation: NavigationScreenProp<{}, 'Search'>;
}

const SearchScreen = ({ navigation }: Props) => {
  const { Colors } = useContext(ThemeContext);
  const [searchValue, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<ITag[]>([]);
  const { pois: defaultPois } = useContext(PoisContext);
  const [pois, setPois] = useState(defaultPois);
  const { tags, fetchingTags, retreiveTags } = useContext(TagsContext);
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
    const poisData = newPois.length === 0 ? defaultPois : newPois;
    const filteredPois = poisData.filter((item: PoiModel) => {
      const itemTags = item.tags ? item.tags.map((item: any) => item.tag) : [];

      return intersectionWith(itemTags, formatedExistingTags, isEqual).length > 0;
    });

    setPois(existingTags.length > 0 ? filteredPois : defaultPois);
  };

  const updateTags = (_tag: ITag) => {
    const newSelectedTags = [...selectedTags];
    const isTagSelected: boolean = some(selectedTags, _tag);
    if (isTagSelected) {
    } else {
      newSelectedTags.push(_tag);
    }
    setSelectedTags(newSelectedTags);
    filterPois(newSelectedTags);
  };

  const openPoiDetails = (poi: PoiModel) => () => {
    navigation.navigate('Details', { poi });
  };

  useEffect(() => {
    tags.length === 0 && retreiveTags();
  }, []);

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
        tagsArray={tags.map(({ tag }) => ({ label: tag }))}
        contentContainerStyle={{
          paddingLeft: 20,
        }}
        isLoading={fetchingTags}
      />
      <Spacer size={24} />
      <StyledContent
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <FlatList
          data={pois}
          renderItem={({ item }) => (
            <React.Fragment key={`poiCard_${item.id}`}>
              <PoiCard gotBorder poi={item} fullWidth onPress={openPoiDetails} />
              <Spacer size={16} />
            </React.Fragment>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </StyledContent>
    </StyledSearchScreen>
  );
};

export default SearchScreen;
