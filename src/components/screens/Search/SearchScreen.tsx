import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { NavigationScreenProp } from 'react-navigation';

import NavigationHeader from '@src/components/molecules/NavigationHeader/NavigationHeader';
import SearchInput from '@src/components/molecules/SearchInput/SearchInput';
import Buttons from '@src/components/atoms/Buttons/Buttons';
import { TouchableType } from '@src/components/atoms/Buttons/Buttons.enum';
import Icon from '@src/components/atoms/Icons/Icon';
import { IconName } from '@src/assets/icons/IconName.enum';
import { StyledSearchScreen, StyledContent } from './SearchScreen.style';
import Spacer from '@src/components/atoms/Spacer/Spacer';
import TagsList from '@src/components/molecules/TagsList/TagsList';
import PoiCard from '@src/components/molecules/PoiCard/PoiCard';
import { poisData } from '@src/utils/mocks/pois.data';

interface Props {
  navigation: NavigationScreenProp<{}, 'Search'>;
}

const SearchScreen = ({ navigation }: Props) => {
  const { Colors } = useContext(ThemeContext);
  const [searchValue, setSearch] = useState('');

  const rightItem = (
    <Buttons variant={TouchableType.ICON}>
      <Icon
        height={24}
        width={24}
        name={IconName.FILTERS}
        color={Colors.mainGrey}
      />
    </Buttons>
  );

  const goBack = () => navigation.goBack();

  return (
    <StyledSearchScreen forceInset={{ bottom: 'never' }}>
      <Spacer size={8} />
      <NavigationHeader
        onBack={goBack}
        middleItem={
          <SearchInput
            onSearch={value => setSearch(value)}
            value={searchValue}
          />
        }
        rightItem={rightItem}
      />
      <Spacer size={8} />
      <TagsList />
      <Spacer size={24} />
      <StyledContent
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {poisData.map(poi => (
          <>
            <PoiCard gotBorder poi={poi} fullWidth />
            <Spacer size={16} />
          </>
        ))}
      </StyledContent>
    </StyledSearchScreen>
  );
};

export default SearchScreen;
