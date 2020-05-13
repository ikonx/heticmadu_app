import styled, { css } from 'styled-components';
import { Direction } from './Chevron';

export const StyledChevron = styled.svg<{ direction: Direction }>`
    transform : rotate(0deg);
    ${({ direction }) =>
      direction === Direction.LEFT &&
      css`
        transform: rotate(180deg);
      `}
    ${({ direction }) =>
      direction === Direction.TOP &&
      css`
        transform: rotate(45deg);
      `}
    ${({ direction }) =>
      direction === Direction.BOTTOM &&
      css`
        transform: rotate(-45deg);
      `}
`;
