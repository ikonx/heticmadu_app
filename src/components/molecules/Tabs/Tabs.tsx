import React, { FunctionComponent } from 'react';
import { View } from "react-native";
import styled from "styled-components";
import TabItem from "../../atoms/TabItem/TabItem";

interface Props {
  onClick: () => void;
}

const TabsContainer = styled(View)`
  flex-direction: row;
`;

const Tabs: FunctionComponent<Props> = ({ onClick }) => {
  return (
    <TabsContainer>
      <TabItem text="Tous" clickEvent={onClick}/>
      <TabItem text="Restaurant" clickEvent={onClick}  disabled/>
      <TabItem text="Boutique" clickEvent={onClick} disabled/>
      <TabItem text="Activité" clickEvent={onClick} disabled/>
    </TabsContainer>
  );
};

export default Tabs;
