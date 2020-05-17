import React, { FunctionComponent } from 'react';
import List from '@components/atoms/List/List';
import Chips from '@components/atoms/Chips/Chips';
import { ChipsListModel } from '@utils/models/chipsList.model';
import Spacer from '@components/atoms/Spacer/Spacer';
import styled from 'styled-components';

interface Props {
  data: ChipsListModel[];
  onClick: (item: ChipsListModel) => void;
  active?: string|null;
}

const ChipsListContainer = styled(List)``;

const ChipsListItem = styled(List)``;

const ChipsList: FunctionComponent<Props> = ({ data,  onClick, active }) => {
  return (
    <ChipsListContainer>
      { data.map((item, i) => (
        <ChipsListItem key={i}>
          <Chips
            key={i}
            text={item.text}
            onClick={() => onClick(item)}
            active={active === item.value}
          />
          <Spacer size={8}/>
        </ChipsListItem>
      ))}
    </ChipsListContainer>
  );
};

export default ChipsList;
