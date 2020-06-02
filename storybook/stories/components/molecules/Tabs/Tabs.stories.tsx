import React, { FunctionComponent } from 'react';
import Tabs from '@components/molecules/Tabs/Tabs';
import { tabsData } from '@utils/mocks/tabs.data';

interface Props {}

const TabsStories: FunctionComponent<Props> = () => {
  return (
    <Tabs
      data={tabsData}
      onClick={() => console.log('OK')}
      activeTab={tabsData[0]}
    />
  );
};

export default TabsStories;
