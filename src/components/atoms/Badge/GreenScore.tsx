import React from "react";
import styled from "styled-components";
import { Text } from "react-native";

import StyledBadge from "./Badge.styles";

export interface IGreenScoreBadge {
  score: number | string;
}

const StyledGreenScore = styled(StyledBadge)`
  background-color: ${({ theme }) => theme.Colors.mainGreen};
`;

const StyledText = styled(Text)`
  font-family: ${({ theme }) => theme.Fonts.DMSans.regular};
  color: ${({ theme }) => theme.Colors.mainWhite};
`;

const Price: React.FunctionComponent<IGreenScoreBadge> = ({
  score,
}: IGreenScoreBadge) => {
  return (
    <StyledGreenScore>
      <StyledText>{score}</StyledText>
    </StyledGreenScore>
  );
};

export default Price;
