import React, { useContext, useEffect } from 'react';
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
import Spacer from '@src/components/atoms/Spacer/Spacer';
import TagsList, { ITag } from '@src/components/molecules/TagsList/TagsList';
import PoiCard from '@src/components/molecules/PoiCard/PoiCard';
import { PoiModel } from '@src/utils/models/pois.model';
import SearchContext from '@src/contexts/search/search.context';
import TagsContext from '@src/contexts/tags/tags.context';
import { StyledSearchScreen, StyledContent } from './SearchScreen.style';
import PoisContext from '@src/contexts/pois/pois.context';

interface Props {
  navigation: NavigationScreenProp<{}, 'Search'>;
}

const SearchScreen = ({ navigation }: Props) => {
  const { Colors } = useContext(ThemeContext);
  const { pois: defaultPois } = useContext(PoisContext);
  const { tags, fetchingTags, retreiveTags } = useContext(TagsContext);
  const {
    selectedTags,
    setSelectedTags,
    setSearch,
    searchValue,
    pois,
    setPois,
  } = useContext(SearchContext);
  const formatValue = (value: string) => value.toLowerCase().replace(/\s+/g, '');
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

  const onSearch = (value: string) => {
    // TODO: Cannot type a name + a tag

    const val = formatValue(value);

    if (val !== '') {
      // On search, add tag if search value is equal to one of the tags
      const newTags: ITag[] = [];
      tags.map((item: any) => {
        const formattedTag = formatValue(item.tag);

        if (formattedTag === val || val.includes(formattedTag)) {
          newTags.push({ label: item.tag });
        }
      });

      setSelectedTags(newTags);

      // Filter pois by name
      const newPois = [...pois];
      const poisData = newPois.length === 0 ? defaultPois : newPois;
      const filteredPoisByName = poisData.filter((item: PoiModel) => {
        const hasTags = item.tags && item.tags.some(({ tag } : any) => (
          val.includes(tag)
        ));

        return formatValue(item.name).includes(val) || hasTags;
      });

      setPois(filteredPoisByName);

      // If selected tags is deleted in search, update state
      if (selectedTags.length > 0 && val.length < formatValue(searchValue).length) {
        const newTags = selectedTags.filter((item: { label: string }) => {
          const formattedLabel = formatValue(item.label);
          return val.includes(formattedLabel);
        });

        setSelectedTags(newTags);
      }
    } else {
      setSelectedTags([]);
      setPois(defaultPois);
    }

    setSearch(value);
  };

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

    !isTagSelected && newSelectedTags.push(_tag);

    setSelectedTags(newSelectedTags);
    filterPois(newSelectedTags);
  };

  const openPoiDetails = (poi: PoiModel) => () => {
    navigation.navigate('Details', { poi });
  };

  useEffect(() => {
    tags.length === 0 && retreiveTags();
    pois.length === 0 && searchValue === '' && setPois(defaultPois);
  }, []);

  useEffect(() => {
    let search: string = searchValue;
    selectedTags.map((tag: ITag) => {
      if (!formatValue(search).includes(formatValue(tag.label))) {
        search = `${search} ${tag.label}`;
      }
    });
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
