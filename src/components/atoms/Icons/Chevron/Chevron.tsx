import React, { FunctionComponent } from "react";
import { StyledChevron } from "./Chevron.style";

interface IChevron {
  direction: Direction;
}

export enum Direction {
  TOP = "top",
  BOTTOM = "bottom",
  LEFT = "left",
  RIGHT = "right",
}

const Chevron: FunctionComponent<IChevron> = ({ direction }) => {
  return <StyledChevron direction={direction} />;
};

export default Chevron;
