import React from "react";
import Price, { IPriceBadge } from "./Price";
import GreenScore, { IGreenScoreBadge } from "./GreenScore";

interface IBadge {
  Price: React.FunctionComponent<IPriceBadge>;
  GreenScore: React.FunctionComponent<IGreenScoreBadge>;
}

const Badge: IBadge = {
  Price,
  GreenScore,
};

export default Badge;
