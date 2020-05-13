import styled, { css } from 'styled-components';
import ChevronSVG from '../../../../assets/icons/Chevron.svg';
import { SvgProps } from 'react-native-svg';

export enum Direction {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
}

interface IProps extends SvgProps {
  direction?: Direction;
}

export const StyledChevron = styled<React.FunctionComponent<IProps>>(
  ChevronSVG
)` 
    ${({ direction }) =>
      direction === Direction.RIGHT &&
      css`
        transform: rotate(0deg);
      `}
    ${({ direction }) =>
      direction === Direction.LEFT &&
      css`
        transform: rotate(180deg);
      `}
    ${({ direction }) =>
      direction === Direction.TOP &&
      css`
        transform: rotate(-90deg);
      `}
    ${({ direction }) =>
      direction === Direction.BOTTOM &&
      css`
        transform: rotate(90deg);
      `}
`;
