import React, { FunctionComponent } from 'react';
import Theme from '@styleGuide/Theme';
import Buttons from '@components/atoms/Buttons/Buttons';
import Text from '@components/atoms/Typography/Text/Text';
import { TouchableType } from '@components/atoms/Buttons/Buttons.enum';
import Spacer from '@components/atoms/Spacer/Spacer';

interface Props {}

const ButtonsStories: FunctionComponent<Props> = () => {
  return (
    <>
      <Buttons variant={TouchableType.DEFAULT}>
        <Text variant="button" color={Theme.Colors.mainWhite} isBold>Button Default</Text>
      </Buttons>
      <Spacer size={16} />
      <Buttons variant={TouchableType.ICON}>
        <Text variant="button">Button Icon</Text>
      </Buttons>
      <Spacer size={16} />
      <Buttons
        variant={TouchableType.FULLWIDTH}
        style={{ justifyContent: 'center' }}
      >
        <Text variant="button" color={Theme.Colors.mainWhite} isBold>Button FullWidth</Text>
      </Buttons>
      <Spacer size={16} />
      <Buttons variant={TouchableType.INVERT}>
        <Text variant="button" isBold>Button Invert</Text>
      </Buttons>
    </>
  );
};

export default ButtonsStories;
