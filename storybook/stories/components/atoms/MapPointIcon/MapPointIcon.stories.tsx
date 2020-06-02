import React, { FunctionComponent } from 'react';
import MapPointIcon from '@components/atoms/MapPointIcon/MapPointIcon';
import { poisData } from '@utils/mocks/pois.data';

interface Props {}

const MapPointIconStories: FunctionComponent<Props> = () => {
  return (
    <>
      <MapPointIcon point={poisData[0]} />
      <MapPointIcon point={poisData[1]} />
      <MapPointIcon point={poisData[2]} />
    </>
  );
};

export default MapPointIconStories;
