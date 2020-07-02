import React, { FunctionComponent } from 'react';
import Text from '../Typography/Text/Text';
import Colors from '@styleGuide/Colors';
import { TabItemBorder, TabItemContainer, TabItemText } from '@components/atoms/TabItem/TabItem.style';

interface Props {
  text: string;
  disabled?: boolean;
  clickEvent: () => void;
  columns?: number;
}

const TabItem: FunctionComponent<Props> = ({ text, disabled, clickEvent, columns }) => {
  return (
    <TabItemContainer onPress={clickEvent} columns={columns}>
      <TabItemText>
        <Text
          variant="legendI"
          color={disabled ? Colors.secondaryGrey : Colors.darknessBlue}
          isBold
        >
          {text}
        </Text>
      </TabItemText>
      <TabItemBorder isDisabled={disabled} />
    </TabItemContainer>
  );
};

export default TabItem;
