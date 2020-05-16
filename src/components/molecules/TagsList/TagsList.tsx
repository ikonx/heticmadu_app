import React from 'react';

import StyledTagList from './TagsList.style';
import Tag from '@components/atoms/Tag/Tag';
import { View } from 'react-native';

export interface ITag {
  label: string;
}
interface Props {
  tagsArray: ITag[];
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
