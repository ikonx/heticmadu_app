import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { TabsModel } from '@utils/models/tabs.model';
import TabItem from '@components/atoms/TabItem/TabItem';

interface Props {
  data: TabsModel[];
  onClick: (item: TabsModel) => void;
  activeTab: string;
}

const TabsContainer = styled(View)`
  flex-direction: row;
`;

const Tabs: FunctionComponent<Props> = ({ data, onClick, activeTab }) => {
  return (
    <TabsContainer>
      { data.map((item: TabsModel, i) => (
        <TabItem
          text={item.label}
          disabled={item.value !== activeTab}
          clickEvent={() => onClick(item)}
          key={i}
        />
      ))}
    </TabsContainer>
  );
};

export default Tabs;
