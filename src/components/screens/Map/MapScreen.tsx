import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useRef,
} from 'react';

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
import PoisContext from '@src/contexts/pois/pois.context';

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
  const { pois: defaultPois } = useContext(PoisContext);
  const [pois, setPois] = useState(defaultPois);
  const onTabChange = (tab: TabsModel) => {
    let result = [...defaultPois];

    result = tab.value
      ? result.filter((item: PoiModel) => item.category === tab.value)
      : defaultPois;
    setPois(result);
    setTab(tab);
  };
  const flatListRef: any = useRef();
  useEffect(() => {
    if (flatListRef && flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: false, offset: 0 });
      console.log('scroll');
    }
  }, [activeTab]);

  const searchHandler = () => {
    navigation.navigate('Maps');
  };

  const openPoiDetails = (poi: PoiModel) => () => {
    navigation.navigate('Maps', {
      screen: 'Details',
      params: { poi },
    });
  };

  return (
    <List flexDirection="column" style={{ flex: 1 }}>
      <Map pois={pois} />
      <StyledPanel flexDirection="column">
        <Buttons
          variant={TouchableType.FULLWIDTH}
          style={{
            width: 'auto',
            alignSelf: 'center',
            position: 'absolute',
            top: -64,
            zIndex: 3,
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
        <Tabs data={tabsArray} activeTab={activeTab} onClick={onTabChange} />
        <StyledFlatList
          ref={flatListRef}
          pointerEvents="auto"
          horizontal
          data={pois}
          extraData={pois}
          keyExtractor={(item: PoiModel) => item.id.toString()}
          renderItem={({ item }: any) => (
            <PoiCard
              key={item.id.toString()}
              poi={item}
              onPress={openPoiDetails}
            />
          )}
        />
      </StyledPanel>
    </List>
  );
};

export default MapScreen;
