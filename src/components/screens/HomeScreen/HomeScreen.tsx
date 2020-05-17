import React from 'react';
import { View } from 'react-native';
import Text from '@src/components/atoms/Typography/Text/Text';
import { SafeAreaView } from 'react-navigation';

interface Props {}

const HomeScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text variant="default">Wesh alors</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
