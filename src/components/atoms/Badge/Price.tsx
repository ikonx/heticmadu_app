import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

import StyledBadge from "./Badge.styles";

export interface IPriceBadge {
  price: "€" | "€€" | "€€€";
}

const StyledPrice = styled(StyledBadge)`
  background-color: ${({ theme }) => theme.Colors.secondaryGrey};
`;

const StyledText = styled(Text)`
  font-family: ${({ theme }) => theme.Fonts.DMSans.bold};
  color: ${({ theme }) => theme.Colors.mainBlack};
`;

const Price: React.FunctionComponent<IPriceBadge> = ({
  price,
}: IPriceBadge) => {
  return (
    <StyledPrice>
      <StyledText>{price}</StyledText>
    </StyledPrice>
  );
};

export default Price;
