import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Theme from '@styleGuide/Theme';
import { TouchableType } from './Buttons.enum';

interface ITouchable extends TouchableOpacityProps {
  variant: TouchableType;
  disabled?: boolean;
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
        z-index: 4;
      `}
    ${({ variant }) =>
      variant === TouchableType.ICON &&
      css`
        background-color: ${Theme.Colors.mainWhite};
        min-width: 40px;
        border: ${({ theme }) => theme.Borders.lightBorder};
        padding: 8px;
        z-index: 4;
      `}
    ${({ variant }) =>
      variant === TouchableType.INVERT &&
      css`
        padding: 8px;
        z-index: 4;
      `}
    ${({ variant }) =>
      variant === TouchableType.FULLWIDTH &&
      css`
        background-color: ${Theme.Colors.mainPurple};
        max-height: 56px;
        width: 100%;
        padding: 11px 16px;
        z-index: 4;
      `}
    ${({ variant }) =>
      variant === TouchableType.IMPORTANT &&
      css`
        background-color: ${Theme.Colors.mainPurple};
        max-height: 56px;
        padding: 16px;
      `}
    ${({ disabled }) =>
      disabled &&
      css`
        background-color: ${Theme.Colors.mainGrey};
      `}
`;

const Buttons: FunctionComponent<ITouchable> = ({
  variant,
  children,
  disabled,
  ...rest
}) => {
  return (
    <StyledTouchable variant={variant} disabled={disabled} {...rest}>
      {children}
    </StyledTouchable>
  );
};

export default Buttons;
