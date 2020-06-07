import React, { useContext } from 'react';

import StyledTagList from './TagsList.style';
import Tag from '@components/atoms/Tag/Tag';
import { View, ScrollViewProps } from 'react-native';
import { ThemeContext } from 'styled-components';
import { some } from 'lodash';

export interface ITag {
  label: string;
}
interface Props extends ScrollViewProps {
  tagsArray: ITag[];
  selectedTags: ITag[];
  onTagPress?: (tag: ITag) => void;
}

const TagsList = ({ tagsArray, selectedTags, onTagPress, ...rest }: Props) => {
  const { Colors } = useContext(ThemeContext);

  return (
    <View>
      <StyledTagList
        horizontal
        showsHorizontalScrollIndicator={false}
        {...rest}
      >
        {tagsArray.map((tag, index) => {
          const gotMarginRight = index < tagsArray.length - 1;
          const isTagSelected: boolean = some(selectedTags, tag);
          const { label } = tag;

          return (
            !isTagSelected && (
              <View
                key={index}
                style={{ marginRight: gotMarginRight ? 8 : 0 }}
                onTouchEnd={() => onTagPress && onTagPress(tag)}
              >
                <Tag text={label} color={Colors.tags[label]} />
              </View>
            )
          );
        })}
      </StyledTagList>
    </View>
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
