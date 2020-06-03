import React, { FunctionComponent } from 'react';
import TabItem from '@components/atoms/TabItem/TabItem';

interface Props {}

const TabItemStories: FunctionComponent<Props> = () => {
  return (
    <>
      <TabItem
        text="Tab Item"
        clickEvent={() => console.log('OK')}
      />
      <TabItem
        text="Tab Item"
        clickEvent={() => console.log('OK')}
        disabled
      />
    </>
  );
};

export default TabItemStories;
