import React from 'react';
import SkeletonContent from 'react-native-skeleton-content';
import { Text } from 'react-native';

export const TagPlaceholder = () => (
  <SkeletonContent
    containerStyle={{
      flex: 1,
      flexDirection: 'row',
      paddingLeft: 16,
      marginBottom: 24,
    }}
    layout={[
      {
        key: '1',
        width: 100,
        height: 28,
        borderRadius: 20,
        marginRight: 8,
      },
      { key: '2', width: 100, height: 28, borderRadius: 20, marginRight: 8 },
      { key: '3', width: 100, height: 28, borderRadius: 20 },
    ]}
    isLoading={true}
  />
);
