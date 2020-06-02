import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import Map from '@components/organisms/Map/Map';

interface Props {}

const MapStories: FunctionComponent<Props> = () => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <Map />
    </View>
  );
};

export default MapStories;
