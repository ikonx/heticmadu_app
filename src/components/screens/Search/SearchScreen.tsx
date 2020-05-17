import React from 'react';
import Text from '@src/components/atoms/Typography/Text/Text';
import { SafeAreaView, NavigationScreenProp } from 'react-navigation';
import Icon from '@src/components/atoms/Icons/Icon';
import { IconName } from '@src/assets/icons/IconName.enum';
import { Direction } from '@src/components/atoms/Icons/Chevron/Chevron.style';
import Buttons from '@src/components/atoms/Buttons/Buttons';
import { TouchableType } from '@src/components/atoms/Buttons/Buttons.enum';

interface Props {
  navigation: NavigationScreenProp<{}, 'Search'>;
}

const SearchScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <Buttons variant={TouchableType.ICON} onPress={() => navigation.goBack()}>
        <Icon
          height={24}
          width={24}
          name={IconName.CHEVRON}
          direction={Direction.LEFT}
        />
        <Text variant="default">retour</Text>
      </Buttons>
      <Text variant="legend">Search screen</Text>
    </SafeAreaView>
  );
};

export default SearchScreen;
