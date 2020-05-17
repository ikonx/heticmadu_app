import React from 'react';
import { View } from 'react-native';
import Text from '@src/components/atoms/Typography/Text/Text';
import { SafeAreaView } from 'react-navigation';
import PoiCard from '@src/components/molecules/PoiCard/PoiCard';
import { poisData } from '@src/utils/mocks/pois.data';

interface Props {}

const HomeScreen = (_: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text variant="default">Wesh alors</Text>
      </View>
      <PoiCard poi={poisData[0]} gotBorder />
    </SafeAreaView>
  );
};

export default HomeScreen;
