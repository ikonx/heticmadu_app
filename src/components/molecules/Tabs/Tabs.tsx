import React, { FunctionComponent } from 'react';
import { TabsModel } from '@utils/models/tabs.model';
import TabItem from '@components/atoms/TabItem/TabItem';
import { TabsContainer } from '@components/molecules/Tabs/Tabs.style';

interface Props {
  data: TabsModel[];
  onClick: (item: TabsModel) => void;
  activeTab: TabsModel;
}

const Tabs: FunctionComponent<Props> = ({ data, onClick, activeTab }) => {
  return (
    <TabsContainer>
      { data.map((item: TabsModel, i) => (
        <TabItem
          text={item.label}
          disabled={item.value !== activeTab.value}
          clickEvent={() => onClick(item)}
          key={i}
        />
      ))}
    </TabsContainer>
  );
};

export default Tabs;
