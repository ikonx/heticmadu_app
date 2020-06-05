import React, { FunctionComponent } from 'react';
import Chip from '@components/atoms/Chip/Chip';
import { ChipsListModel } from '@utils/models/chipsList.model';
import Spacer from '@components/atoms/Spacer/Spacer';
import { ChipsListContainer, ChipsListItem } from '@components/molecules/ChipsList/ChipsList.style';
import { Dimensions, FlatList } from 'react-native';

interface Props {
  data: ChipsListModel[];
  onClick: (item: ChipsListModel, index: number) => void;
  active?: string|null;
  fieldIndex: number;
}

const ChipsList: FunctionComponent<Props> = ({ data,  onClick, active, fieldIndex }) => {
  const numColumns = 3;
  const size = (Dimensions.get('window').width - 48) / numColumns;

  return (
    <ChipsListContainer>
      <FlatList
        data={data}
        renderItem={ ({ item, index }) => (
          <>
            <ChipsListItem style={{ width: size }}>
              <Chip
                text={item.text}
                onClick={() => onClick(item, fieldIndex)}
                active={active === item.value}
              />
            </ChipsListItem>
            { (index % 2 !== 0 || index === 0) && <Spacer size={8}/> }
          </>
        )}
        ItemSeparatorComponent={() => <Spacer size={16}/>}
        keyExtractor={item => item.value}
        numColumns={numColumns}
        scrollEnabled={false}
      />
    </ChipsListContainer>
  );
};

export default ChipsList;
