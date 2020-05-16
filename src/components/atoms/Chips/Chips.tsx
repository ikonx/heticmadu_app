import React, { FunctionComponent } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Text from '../Typography/Text/Text';
import Colors from '../../../styleGuide/Colors';
import StyledView from './Chips.style';

interface Props {
  text: string;
  active?: boolean;
  onClick: () => void;
}

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
