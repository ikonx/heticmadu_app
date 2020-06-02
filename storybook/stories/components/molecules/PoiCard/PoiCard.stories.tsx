import React, { FunctionComponent } from 'react';
import PoiCard from '@components/molecules/PoiCard/PoiCard';
import { poisData } from '@utils/mocks/pois.data';

interface Props {}

const PoiCardStories: FunctionComponent<Props> = () => {
  return (
    <>
      <PoiCard poi={poisData[0]} />
      <PoiCard poi={poisData[1]} />
    </>
  );
};

export default PoiCardStories;
