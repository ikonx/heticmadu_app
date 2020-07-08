import React, { FunctionComponent, useContext } from 'react';
import Icon from '../Icons/Icon';
import { IconName } from '@assets/icons/IconName.enum';
import Text from '../Typography/Text/Text';
import Colors from '@styleGuide/Colors';
import { useIsFocused } from '@react-navigation/native';
import { StyledContainer } from '@components/atoms/NavigationTabItem/NavigationTabItem.style';
import UserContext from '@src/contexts/user/user.context';
import { StyledImage } from '../Avatar/Avatar';

interface Props {
  icon: IconName;
  text: string;
  onClick?: MouseEvent;
}

const NavigationTabItem: FunctionComponent<Props> = ({
  icon,
  text,
  onClick,
}) => {
  const isFocused = useIsFocused();
  const { user } = useContext(UserContext);

  return (
    <StyledContainer onPress={onClick} isActive={isFocused}>
      {text === 'Profil' ? (
        <StyledImage
          style={{ height: 24, width: 24 }}
          source={{ uri: user.picture || 'https://picsum.photos/200/300' }}
        />
      ) : (
        <Icon
          name={icon}
          height={24}
          width={24}
          fill={isFocused ? Colors.darknessBlue : Colors.overlayGrey}
        />
      )}
      <Text
        variant="legend"
        color={isFocused ? Colors.darknessBlue : Colors.overlayGrey}
        isBold={isFocused}
      >
        {text}
      </Text>
    </StyledContainer>
  );
};

export default NavigationTabItem;
