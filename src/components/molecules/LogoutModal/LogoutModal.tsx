import React, { FunctionComponent } from 'react';
import Theme from '@styleGuide/Theme';
import { ModalContainer, ModalFooter, ModalTitle } from '@components/molecules/LogoutModal/LogoutModal.style';
import Text from '@components/atoms/Typography/Text/Text';
import Title from '@components/atoms/Typography/Title/Title';
import Buttons from '@components/atoms/Buttons/Buttons';
import { TouchableType } from '@components/atoms/Buttons/Buttons.enum';

interface Props {
  title: string;
  subtitle: string;
  cancelText: string;
  cancelAction: () => void;
  confirmText: string;
  confirmAction: () => void;
}

const LogoutModal: FunctionComponent<Props> = ({
  title,
  subtitle,
  cancelText,
  cancelAction,
  confirmText,
  confirmAction,
}) => {
  return (
    <ModalContainer>
      <ModalTitle>
        <Text isBold>{ title }</Text>
      </ModalTitle>
      <Title variant="subtitle" color={Theme.Colors.mainGrey}>{ subtitle }</Title>
      <ModalFooter>
        <Buttons variant={TouchableType.INVERT} onPress={cancelAction}>
          <Text variant="button" color={Theme.Colors.mainRed} isBold>{ cancelText }</Text>
        </Buttons>
        <Buttons variant={TouchableType.DEFAULT} onPress={confirmAction}>
          <Text variant="button" color={Theme.Colors.mainWhite} isBold>{ confirmText }</Text>
        </Buttons>
      </ModalFooter>
    </ModalContainer>
  );
};

export default LogoutModal;
