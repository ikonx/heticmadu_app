import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, StatusBar, Text } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

import { StyledMap, StyledMarker } from './Map.style';
import { poisData } from '../../../utils/mocks/pois.data';
import MapPointIcon from '../../atoms/MapPointIcon/MapPointIcon';
import PositionIndicator from '../../atoms/PositionIndicator/PositionIndicator';

interface Props {
  pois: {}[];
}

const Map = ({ pois }: Props) => {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text: any = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log('location', location);
  }

  return (
    <StyledMap style={StyleSheet.absoluteFill}>
      <StatusBar backgroundColor={'transparent'} translucent />
      {location && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={StyleSheet.absoluteFillObject}
          maxZoomLevel={18}
          minZoomLevel={1}
          initialRegion={{
            longitude: location.longitude || 2.287592,
            latitude: location.latitude || 48.862725,
            latitudeDelta: 0,
            longitudeDelta: 0,
          }}
          customMapStyle={[
            {
              featureType: 'administrative.land_parcel',
              elementType: 'labels',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'poi',
              elementType: 'labels.text',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'poi.business',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'road',
              elementType: 'labels.icon',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'road.local',
              elementType: 'labels',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
            {
              featureType: 'transit',
              stylers: [
                {
                  visibility: 'off',
                },
              ],
            },
          ]}
        >
          <Marker
            coordinate={{
              longitude: location.longitude,
              latitude: location.latitude,
            }}
            style={{ zIndex: 2 }}
          >
            <PositionIndicator />
          </Marker>
          {pois.map(({ longitude, latitude, name, id, category }) => (
            <Marker key={id} coordinate={{ longitude, latitude }} title={name}>
              <MapPointIcon point={{ category }} />
            </Marker>
          ))}
        </MapView>
      )}
    </StyledMap>
  );
};

Map.defaultProps = {
  pois: poisData,
};

export default Map;
