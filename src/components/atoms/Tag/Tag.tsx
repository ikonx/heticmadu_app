import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import Text from '../Typography/Text/Text';
import Colors from '../../../styleGuide/Colors';

interface Props {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  color?: string;
}

const TagContainer = styled(TouchableOpacity)<{ color?: string }>`
  background: ${({ color, theme }) =>
    color ? color : `${theme.Colors.mainBlack}25`};
  padding: 4px 8px;
  border-radius: 48px;
`;

const Tag: FunctionComponent<Props> = ({ text, onClick, disabled, color }) => {
  return (
    <TagContainer onPress={onClick} disabled={disabled} color={color}>
      <Text variant="label" color={Colors.mainWhite} isBold>
        {text}
      </Text>
    </TagContainer>
  );
};

export default Tag;
