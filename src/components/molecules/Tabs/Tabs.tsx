import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { TabsModel } from '@utils/models/tabs.model';
import TabItem from '@components/atoms/TabItem/TabItem';

interface Props {
  data: TabsModel[];
  onClick: (item: TabsModel) => void;
  activeTab: TabsModel;
}

const TabsContainer = styled(View)`
  flex-direction: row;
  background-color: ${({ theme }) => theme.Colors.mainWhite};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  justify-content: space-between;
`;

const Tabs: FunctionComponent<Props> = ({ data, onClick, activeTab }) => {
  return (
    <TabsContainer>
      {data.map((item: TabsModel, i) => (
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
