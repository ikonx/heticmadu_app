import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Theme from '@styleGuide/Theme';
import { TouchableType } from './Buttons.enum';

interface ITouchable extends TouchableOpacityProps {
  variant: TouchableType;
}

const StyledTouchable = styled(TouchableOpacity)<ITouchable>`
    borderRadius : 8px;
    max-height: 40px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;

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
        background-color: ${Theme.Colors.mainWhite};
        min-width: 40px;
        border: ${({ theme }) => theme.Borders.lightBorder};
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
        width: 343px;
        padding: 11px 16px;
      `}
    ${({ variant }) =>
      variant === TouchableType.IMPORTANT &&
      css`
        background-color: ${Theme.Colors.mainPurple};
        max-height: 56px;
        padding: 16px;
      `}
`;

const Buttons: FunctionComponent<ITouchable> = ({
  variant,
  children,
  ...rest
}) => {
  return (
    <StyledTouchable variant={variant} {...rest}>
      {children}
    </StyledTouchable>
  );
};

export default Buttons;
