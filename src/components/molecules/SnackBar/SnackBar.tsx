import React, { FunctionComponent } from 'react';
import { SnackBarContainer, SnackBarContent, SnackBarIcon } from '@components/molecules/SnackBar/SnackBar.style';
import { IconName } from '@assets/icons/IconName.enum';
import Theme from '@styleGuide/Theme';
import Text from '@components/atoms/Typography/Text/Text';
import Icon from '@components/atoms/Icons/Icon';
import Spacer from '@components/atoms/Spacer/Spacer';
import Title from '@components/atoms/Typography/Title/Title';

interface Props {
  title: string;
  text: string;
  isError?: boolean;
}

const SnackBar: FunctionComponent<Props> = ({ title, text, isError }) => {
  return (
    <SnackBarContainer>
      <SnackBarIcon background={isError ? Theme.Colors.overlayRed : Theme.Colors.overlayGreen }>
        <Icon
          name={isError ? IconName.ERROR : IconName.DONE}
          style={{ width: '24px', height: '24px' }}
          fill={isError ? Theme.Colors.mainRed : Theme.Colors.mainGreen}
        />
      </SnackBarIcon>
      <Spacer size={16}/>
      <SnackBarContent flexDirection="column">
        <Text variant="label" isBold>{ title }</Text>
        <Title variant="subtitle" color={Theme.Colors.mainGrey}>{ text }</Title>
      </SnackBarContent>
    </SnackBarContainer>
  );
};

export default SnackBar;
