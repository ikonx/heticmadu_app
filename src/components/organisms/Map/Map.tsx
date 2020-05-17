import React, { useState, useEffect, useRef } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, StatusBar, Text } from 'react-native';
import * as Location from 'expo-location';

import { StyledMap } from './Map.style';
import { poisData } from '@utils/mocks/pois.data';
import MapPointIcon from '@components/atoms/MapPointIcon/MapPointIcon';
import { PoiModel } from '@src/utils/models/pois.model';

interface Props {
  pois: PoiModel[];
}

const Map = ({ pois }: Props) => {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);
  const mapRef: any = useRef(null);

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

  useEffect(() => {
    if (mapRef.current) {
      const markers = [
        ...pois.map(({ longitude, latitude }) => ({
          longitude,
          latitude,
        })),
      ];
      mapRef.current.fitToCoordinates(markers, {
        edgePadding: { top: 100, right: 70, bottom: 100, left: 70 },
      });
    }
  }, [pois]);

  if (errorMsg) {
    return <Text>{errorMsg}</Text>;
  }

  return (
    <StyledMap style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />
      {location && (
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1, padding: 50 }}
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
          showsUserLocation
          showsBuildings={false}
          showsIndoors={false}
          showsIndoorLevelPicker={false}
        >
          {/* <Marker
            coordinate={{
              longitude: location.longitude,
              latitude: location.latitude,
            }}
            style={{ zIndex: 2 }}
          >
            <PositionIndicator />
          </Marker> */}
          {pois.map((poi: PoiModel) => {
            const { longitude, latitude, name, id } = poi;
            return (
              <Marker
                key={id}
                coordinate={{ longitude, latitude }}
                title={name}
              >
                <MapPointIcon point={poi} />
              </Marker>
            );
          })}
        </MapView>
      )}
    </StyledMap>
  );
};

Map.defaultProps = {
  pois: poisData,
};

export default Map;
