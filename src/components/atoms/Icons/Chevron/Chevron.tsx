import React, { FunctionComponent } from "react";
import { StyledChevron } from "./Chevron.style";
import { Direction } from "./Chevron.style";

interface IChevron {
  direction: Direction;
}

const Chevron: FunctionComponent<IChevron> = ({ direction }) => {
  return <StyledChevron direction={direction} />;
};

export default Chevron;
