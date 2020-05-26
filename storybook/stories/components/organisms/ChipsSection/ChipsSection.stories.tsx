import React, { FunctionComponent } from 'react';
import ChipsSection from '@components/organisms/ChipsSection/ChipsSection';
import { dataChips } from '@utils/mocks/chips.data';

interface Props {}

const ChipsSectionStories: FunctionComponent<Props> = () => {
  return (
    <ChipsSection title="Aliments et boissons" data={dataChips}/>
  );
};

export default ChipsSectionStories;
