import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { TouchableOpacity, View } from 'react-native';
import Text from '../Typography/Text/Text';
import Colors from '../../../styleGuide/Colors';

interface Props {
  text: string;
  disabled?: boolean;
  clickEvent: () => void;
}

const TabItemContainer = styled(TouchableOpacity)`
  width: auto;
  align-items: center;
  opacity: ${ ({ disabled }) => disabled ? 0.32 : 1 };
`;

const TabItemBorder = styled(View)`
  width: 100%;
  height: 1px;
  background: ${ ({ isDisabled, theme }) => isDisabled ? theme.Colors.mainGrey : theme.Colors.darknessBlue };
  margin-top: 8px;
`;

const TabItemText = styled(View)`
  padding: 16px 8px;
`;

const TabItem: FunctionComponent<Props> = ({ text, disabled, clickEvent }) => {
  return (
    <TabItemContainer onPress={clickEvent}>
      <TabItemText>
        <Text
          variant="legendI"
          color={disabled ? Colors.mainGrey : Colors.darknessBlue}
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
