import React, {FunctionComponent} from 'react';
import { View } from "react-native";
import styled from "styled-components";
import TabItem from "../../atoms/TabItem/TabItem";

interface Props {
  onClick: (i: number) => void;
  activeTab: number;
}

const TabsContainer = styled(View)`
  flex-direction: row;
`;

const tabsData = ['Tous', 'Restaurant', 'Boutique', 'Activité'];

const Tabs: FunctionComponent<Props> = ({ onClick, activeTab }) => {
  return (
    <TabsContainer>
      { tabsData.map((item, i) => (
        <TabItem
          text={item}
          disabled={i !== activeTab}
          clickEvent={() => onClick(i)}
          key={i}
        />
      ))}
    </TabsContainer>
  );
};

export default Tabs;
