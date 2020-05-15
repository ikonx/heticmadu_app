import React, { FunctionComponent } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Text from '../Typography/Text/Text';
import styled from 'styled-components';
import Colors from '../../../styleGuide/Colors';

interface Props {
  text: string;
  active?: boolean;
  onClick: () => void;
}

const StyledView = styled(View)<{ isActive?: boolean }>`
  background: ${ ({ isActive, theme }) => isActive ? theme.Colors.mainPurple : theme.Colors.mainWhite };
  border: ${ ({ isActive, theme }) => !isActive ? `1px solid ${theme.Colors.secondaryGrey}` : 'none' };
  padding: 12px 33px;
  border-radius: 8px;
`;

const Chips: FunctionComponent<Props> = ({ text, active, onClick }) => {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <StyledView isActive={active}>
        <Text
          variant="label"
          color={active ? Colors.mainWhite : Colors.mainGrey}
          isBold
        >
          { text }
        </Text>
      </StyledView>
    </TouchableWithoutFeedback>
  );
};

export default Chips;
