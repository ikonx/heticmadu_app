import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Text } from 'react-native';

import StyledBadge from './Badge.styles';
import Icon from '../Icons/Icon';
import { IconName } from '../../../assets/icons/IconName.enum';

export interface IGreenScoreBadge {
  score: number | string;
}

const StyledGreenScore = styled(StyledBadge)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: ${({ theme }) => theme.Colors.mainGreen};
`;

const StyledText = styled(Text)`
  font-family: ${({ theme }) => theme.Fonts.DMSans.regular};
  color: ${({ theme }) => theme.Colors.mainWhite};
  margin-left: 8px;
`;

const Price: React.FunctionComponent<IGreenScoreBadge> = ({
  score,
}: IGreenScoreBadge) => {
  const { Colors } = useContext(ThemeContext);

  return (
    <StyledGreenScore>
      <Icon
        name={IconName.LEAF}
        fill={Colors.mainWhite}
        height={16}
        width={16}
      />
      <StyledText>{score}</StyledText>
    </StyledGreenScore>
  );
};

export default Price;
