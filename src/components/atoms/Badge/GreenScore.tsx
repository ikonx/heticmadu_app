import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Text, TouchableOpacity } from 'react-native';

import { IconName } from '@assets/icons/IconName.enum';
import StyledBadge from './Badge.styles';
import Icon from '../Icons/Icon';

export interface IGreenScoreBadge {
  score: number | string;
  onClick?: () => void;
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
  onClick,
}: IGreenScoreBadge) => {
  const { Colors } = useContext(ThemeContext);

  return (
    <TouchableOpacity onPress={onClick} disabled={!onClick}>
      <StyledGreenScore>
        <Icon
          name={IconName.LEAF}
          fill={Colors.mainWhite}
          height={16}
          width={16}
        />
        <StyledText>{score}</StyledText>
      </StyledGreenScore>
    </TouchableOpacity>
  );
};

export default Price;
