import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { TabsModel } from '@utils/models/tabs.model';
import List from '@src/components/atoms/List/List';
import Map from '@src/components/organisms/Map/Map';
import Tabs from '@src/components/molecules/Tabs/Tabs';
import { StyledPanel, StyledFlatList } from './MapScreen.style';
import { poisData } from '@utils/mocks/pois.data';
import { PoiModel } from '@src/utils/models/pois.model';
import Buttons from '@src/components/atoms/Buttons/Buttons';
import { TouchableType } from '@src/components/atoms/Buttons/Buttons.enum';
import Icon from '@src/components/atoms/Icons/Icon';
import { IconName } from '@src/assets/icons/IconName.enum';
import Text from '@src/components/atoms/Typography/Text/Text';
import { ThemeContext } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import PoiCard from '@src/components/molecules/PoiCard/PoiCard';

interface Props {
  navigation: any;
}

const tabsArray: TabsModel[] = [
  {
    label: 'Tous',
    value: '',
  },
  {
    label: 'Restaurant',
    value: 'restau',
  },
  {
    label: 'Boutique',
    value: 'shop',
  },
  {
    label: 'Activité',
    value: 'activity',
  },
];

const MapScreen = (_: Props) => {
  const navigation = useNavigation();
  const { Colors } = useContext(ThemeContext);
  const [activeTab, setTab] = useState({ ...tabsArray[0] });
  const [pois, setPois] = useState(poisData);

  const onTabChange = (tab: TabsModel) => {
    let result = [...poisData];

    result = tab.value
      ? result.filter((item: PoiModel) => item.category === tab.value)
      : poisData;
    setPois(result);
    setTab(tab);
  };

  const searchHandler = () => {
    navigation.navigate('Search');
  };

  return (
    <SafeAreaView style={StyleSheet.absoluteFill} forceInset={{ top: 'never' }}>
      <List flexDirection="column" style={StyleSheet.absoluteFill}>
        <Map pois={pois} />
        <SafeAreaView style={{ flex: .7, flexDirection: 'column-reverse' }}>
          <StyledPanel flexDirection="column">
            <Tabs
              data={tabsArray}
              activeTab={activeTab}
              onClick={onTabChange}
            />
            <StyledFlatList
              pointerEvents="auto"
              horizontal
              data={pois}
              renderItem={({ item }: any) => <PoiCard poi={item} />}
            />
          </StyledPanel>
          <Buttons
            variant={TouchableType.FULLWIDTH}
            style={{
              width: 'auto',
              maxWidth: 150,
              alignSelf: 'center',
              marginBottom: 16,
              position: 'absolute',
              top: -66,
            }}
            onPress={searchHandler}
          >
            <Icon
              height={24}
              width={24}
              name={IconName.SEARCH}
              fill={Colors.mainWhite}
              style={{ marginRight: 8 }}
            />
            <Text variant="button" color={Colors.mainWhite}>
              Rechercher
            </Text>
          </Buttons>
        </SafeAreaView>
      </List>
    </SafeAreaView>
  );
};

export default MapScreen;
