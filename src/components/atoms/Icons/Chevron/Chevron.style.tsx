import styled, { css } from "styled-components";
import { Direction } from "./Chevron";
import ChevronSVG from "../../../../assets/icons/Chevron.svg";
import { SvgProps } from "react-native-svg";

interface IProps extends SvgProps {
  direction: Direction;
}
export const StyledChevron = styled<SvgProps>(ChevronSVG)`
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
