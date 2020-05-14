import React, { FunctionComponent } from 'react';
import Text from '../Typography/Text/Text';
import styled from 'styled-components';
import { TouchableOpacity, View } from 'react-native';
import Colors from '../../../styleGuide/Colors';

interface Props {
  text: string;
  disabled?: boolean;
  clickEvent: () => void;
}

const TabItemContainer = styled(TouchableOpacity)<{ disabled?: boolean }>`
  width: auto;
  align-items: center;
  opacity: ${({ disabled }) => (disabled ? 0.32 : 1)};
`;

const TabItemBorder = styled(View)<{ isDisabled?: boolean }>`
  width: 100%;
  height: 1px;
  background: ${({ isDisabled, theme }) =>
    isDisabled ? theme.Colors.mainGrey : theme.Colors.darknessBlue};
  margin-top: 8px;
`;

const TabItemText = styled(View)`
  padding: 0 13px;
`;

const TabItem: FunctionComponent<Props> = ({ text, disabled, clickEvent }) => {
  return (
    <TabItemContainer onPress={clickEvent} disabled={disabled}>
      <TabItemText>
        <Text
          variant="legendI"
          color={disabled ? Colors.mainGrey : Colors.darknessBlue}
          isMedium={true}
        >
          {text}
        </Text>
      </TabItemText>
      <TabItemBorder isDisabled={disabled} />
    </TabItemContainer>
  );
};

export default TabItem;
