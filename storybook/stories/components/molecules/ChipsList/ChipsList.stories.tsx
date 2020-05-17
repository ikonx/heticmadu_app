import React, { FunctionComponent, useState } from 'react';
import ChipsList from '@components/molecules/ChipsList/ChipsList';
import { ChipsListModel } from '@utils/models/chipsList.model';

interface Props {}

const fakeData: ChipsListModel[] = [
  {
    text: 'Chips',
    value: '1',
  },
  {
    text: 'Chips',
    value: '2',
  },
  {
    text: 'Chips',
    value: '3',
  },
];

const ChipsListStories: FunctionComponent<Props> = () => {
  const [activeChip, setActiveChip] = useState<ChipsListModel|null>(null);
  const clickEvent = (item: ChipsListModel) => {
    if (!activeChip) {
      setActiveChip(item);
    } else {
      setActiveChip(activeChip.value === item.value ? null : item);
    }
  }

  return (
    <ChipsList data={fakeData} onClick={(item) => clickEvent(item)} active={activeChip && activeChip.value} />
  );
};

export default ChipsListStories;
