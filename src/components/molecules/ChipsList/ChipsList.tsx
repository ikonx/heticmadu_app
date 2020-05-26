import React, { FunctionComponent } from 'react';
import Chip from '@components/atoms/Chip/Chip';
import { ChipsListModel } from '@utils/models/chipsList.model';
import Spacer from '@components/atoms/Spacer/Spacer';
import { ChipsListContainer, ChipsListItem } from '@components/molecules/ChipsList/ChipsList.style';

interface Props {
  data: ChipsListModel[];
  onClick: (item: ChipsListModel, index: number) => void;
  active?: string|null;
  fieldIndex: number;
}

const ChipsList: FunctionComponent<Props> = ({ data,  onClick, active, fieldIndex }) => {
  return (
    <ChipsListContainer>
      { data.map((item, i) => (
        <ChipsListItem key={i}>
          <Chip
            key={i}
            text={item.text}
            onClick={() => onClick(item, fieldIndex)}
            active={active === item.value}
          />
          <Spacer size={8}/>
        </ChipsListItem>
      ))}
    </ChipsListContainer>
  );
};

export default ChipsList;
