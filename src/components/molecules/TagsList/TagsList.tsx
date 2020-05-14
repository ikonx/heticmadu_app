import React from 'react';

import StyledTagList from './TagList.style';
import Tag from '../../atoms/Tag/Tag';
import { View } from 'react-native';

interface Props {
  tagsArray: { label: string }[];
}

const TagsList = ({ tagsArray }: Props) => {
  return (
    <StyledTagList>
      {tagsArray.map(({ label }, index) => {
        const gotMarginRight = index < tagsArray.length - 1;
        return (
          <View style={{ marginRight: gotMarginRight ? 8 : 0 }}>
            <Tag text={label} />
          </View>
        );
      })}
    </StyledTagList>
  );
};

TagsList.defaultProps = {
  tagsArray: [{ label: 'salut' }, { label: 'salam' }, { label: 'shalom' }],
};

export default TagsList;
