import React, { useContext } from 'react';

import StyledTagList from './TagsList.style';
import Tag from '@components/atoms/Tag/Tag';
import { View } from 'react-native';
import { ThemeContext } from 'styled-components';

export interface ITag {
  label: string;
}
interface Props {
  tagsArray: ITag[];
}

const TagsList = ({ tagsArray }: Props) => {
  const { Colors } = useContext(ThemeContext);

  return (
    <StyledTagList
      horizontal
      contentContainerStyle={{
        paddingLeft: 20,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {tagsArray.map(({ label }, index) => {
        const gotMarginRight = index < tagsArray.length - 1;
        return (
          <View key={index} style={{ marginRight: gotMarginRight ? 8 : 0 }}>
            <Tag text={label} color={Colors.tags[label]} />
          </View>
        );
      })}
    </StyledTagList>
  );
};

TagsList.defaultProps = {
  tagsArray: [
    { label: 'africain' },
    { label: 'indien' },
    { label: 'italien' },
    { label: 'junkfood' },
    { label: 'mexicain' },
  ],
};

export default TagsList;
