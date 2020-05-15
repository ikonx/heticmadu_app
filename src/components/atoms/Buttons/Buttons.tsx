import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { TouchableType } from './Buttons.enum';
import Theme from '../../../styleGuide/Theme';

interface ITouchable {
  variant: TouchableType;
}

const StyledTouchable = styled(TouchableOpacity)<ITouchable>`
    borderRadius : 8px;
    max-height: 40px;
    flex-direction: row;
    flex-wrap: nowrap;
    ${({ variant }) =>
      variant === TouchableType.DEFAULT &&
      css`
        background-color: ${Theme.Colors.mainPurple};
        min-width: 40px;
        padding: 8px 16px;
      `}
    ${({ variant }) =>
      variant === TouchableType.ICON &&
      css`
        background-color: ${Theme.Colors.secondaryGrey};
        min-width: 40px;
        border: ${Theme.Borders.mainBorder};
        padding: 8px;
      `}
    ${({ variant }) =>
      variant === TouchableType.INVERT &&
      css`
        background-color: ${Theme.Colors.mainWhite};
        padding: 8px;
      `}
    ${({ variant }) =>
      variant === TouchableType.FULLWIDTH &&
      css`
        background-color: ${Theme.Colors.mainPurple};
        max-height: 56px;
        min-width: 343px;
        padding: 17px 47px;
      `}
`;

const Buttons: FunctionComponent<ITouchable> = ({ variant, children }) => {
  return (
    <StyledTouchable variant={variant} onPress={() => console.log('res')}>
      {children}
    </StyledTouchable>
  );
};

export default Buttons;
