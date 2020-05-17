import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { SafeAreaView, NavigationScreenProp } from 'react-navigation';

import Text from '@src/components/atoms/Typography/Text/Text';
import NavigationHeader from '@src/components/molecules/NavigationHeader/NavigationHeader';
import SearchInput from '@src/components/molecules/SearchInput/SearchInput';
import Buttons from '@src/components/atoms/Buttons/Buttons';
import { TouchableType } from '@src/components/atoms/Buttons/Buttons.enum';
import Icon from '@src/components/atoms/Icons/Icon';
import { IconName } from '@src/assets/icons/IconName.enum';
import { StyledSearchScreen } from './SearchScreen.style';

interface Props {
  navigation: NavigationScreenProp<{}, 'Search'>;
}

const SearchScreen = ({ navigation }: Props) => {
  const { Colors } = useContext(ThemeContext);

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

  return (
    <StyledSearchScreen>
      <NavigationHeader />
      <NavigationHeader title="Salut" />
      <NavigationHeader middleItem={<SearchInput />} />
      <NavigationHeader middleItem={<SearchInput />} rightItem={rightItem} />
      <Text variant="legend">Search screen</Text>
    </StyledSearchScreen>
  );
};

export default SearchScreen;
