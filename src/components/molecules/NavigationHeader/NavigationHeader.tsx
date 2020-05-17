import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from 'styled-components';

import Icon from '@components/atoms/Icons/Icon';
import { IconName } from '@src/assets/icons/IconName.enum';
import { Direction } from '@src/components/atoms/Icons/Chevron/Chevron.style';
import Buttons from '@src/components/atoms/Buttons/Buttons';
import { TouchableType } from '@src/components/atoms/Buttons/Buttons.enum';
import { StyledNavigationHeader } from './NavigationHeader.style';
import Title from '@src/components/atoms/Typography/Title/Title';
import Spacer from '@src/components/atoms/Spacer/Spacer';

interface Props {
  title?: string;
  middleItem?: JSX.Element;
  rightItem?: JSX.Element;
  onBack: () => void;
}

const NavigationHeader = ({ title, middleItem, rightItem, onBack }: Props) => {
  const { Colors } = useContext(ThemeContext);

  return (
    <StyledNavigationHeader>
      <Buttons variant={TouchableType.ICON} onPress={onBack}>
        <Icon
          height={24}
          width={24}
          name={IconName.CHEVRON}
          direction={Direction.LEFT}
          fill={Colors.mainGrey}
        />
      </Buttons>
      <Spacer size={16} />
      <View style={{ alignItems: 'center', flex: 1 }}>
        {title && (
          <>
            <Title variant="h2">Salut</Title>
          </>
        )}
        {middleItem && middleItem}
      </View>
      {title && <Spacer size={60} style={{ height: 0 }} />}
      {rightItem && (
        <>
          <Spacer size={16} />
          {rightItem}
        </>
      )}
    </StyledNavigationHeader>
  );
};

export default NavigationHeader;
