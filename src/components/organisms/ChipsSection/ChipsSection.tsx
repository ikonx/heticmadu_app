import React, { FunctionComponent, useState } from 'react';
import { View } from 'react-native';
import Title from '@components/atoms/Typography/Title/Title';
import ChipsList from '@components/molecules/ChipsList/ChipsList';
import { ChipsListModel } from '@utils/models/chipsList.model';
import Spacer from '@components/atoms/Spacer/Spacer';

interface Props {
  title: string;
  data: ChipsListModel[][];
}

const ChipsSection: FunctionComponent<Props> = ({ title, data }) => {
  const [activeChip, setActiveChip] = useState<(ChipsListModel|null)[]>([
    null,
    null,
    null,
  ]);

  const clickEvent = (item: ChipsListModel, fieldIndex: number) => {
    const newData = [...activeChip];

    if (!activeChip[fieldIndex]) {
      newData[fieldIndex] = item;
    } else {
      newData[fieldIndex] =
        activeChip[fieldIndex] &&
        activeChip[fieldIndex].value === item.value ?
          null
          :
          item
      ;
    }

    setActiveChip(newData);
  };

  return (
    <View>
      <Title variant="h4" isBold>{ title }</Title>
      <Spacer size={16} />
      { data.map((item, index) => (
        <View key={index}>
          <ChipsList
            data={item}
            onClick={(item, index) => clickEvent(item, index)}
            active={activeChip[index] && activeChip[index].value}
            fieldIndex={index}
          />
          <Spacer size={12} />
        </View>
      ))}
    </View>
  );
};

export default ChipsSection;
