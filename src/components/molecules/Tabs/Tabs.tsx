import React, { FunctionComponent } from 'react';
import { TabsModel } from '@utils/models/tabs.model';
import TabItem from '@components/atoms/TabItem/TabItem';
import { TabsContainer } from '@components/molecules/Tabs/Tabs.style';

interface Props {
  data: TabsModel[];
  onClick: (item: TabsModel) => void;
  activeTab: TabsModel;
  columns?: number;
}

const Tabs: FunctionComponent<Props> = ({ data, onClick, activeTab, columns }) => {
  return (
    <TabsContainer horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
      {data.map((item: TabsModel, i) => (
        <TabItem
          key={i}
          text={item.label}
          disabled={item.value !== activeTab.value}
          clickEvent={() => onClick(item)}
          columns={columns}
        />
      ))}
    </TabsContainer>
  );
};

export default Tabs;
