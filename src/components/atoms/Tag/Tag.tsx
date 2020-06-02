import React, { FunctionComponent } from 'react';
import Text from '../Typography/Text/Text';
import Colors from '@styleGuide/Colors';
import { TagContainer } from '@components/atoms/Tag/Tag.style';

interface Props {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  color?: string;
}

const Tag: FunctionComponent<Props> = ({ text, onClick, disabled, color }) => {
  return (
    <TagContainer onPress={onClick} disabled={disabled} color={color}>
      <Text
        variant="label"
        color={Colors.mainWhite}
        isBold
        style={{ textTransform: 'capitalize' }}
      >
        {text}
      </Text>
    </TagContainer>
  );
};

export default Tag;
