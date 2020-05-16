import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Icon from '../Icons/Icon';
import { IconName } from '@assets/icons/IconName.enum';
import Text from '../Typography/Text/Text';
import Colors from '@styleGuide/Colors';
import { useIsFocused } from '@react-navigation/native';

interface Props {
  icon: IconName;
  text: string;
  onClick?: MouseEvent;
}

const StyledContainer = styled(TouchableOpacity)<{ isActive?: boolean }>`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const NavigationTabItem: FunctionComponent<Props> = ({ icon, text, onClick }) => {
  const isFocused = useIsFocused();

  return (
    <StyledContainer onPress={onClick} isActive={isFocused}>
      <Icon
        name={icon}
        height={24}
        width={24}
        fill={isFocused ? Colors.darknessBlue : Colors.overlayGrey}
      />
      <Text
        variant="legend"
        color={isFocused ? Colors.darknessBlue : Colors.overlayGrey}
      >
        { text }
      </Text>
    </StyledContainer>
  );
};

export default NavigationTabItem;
