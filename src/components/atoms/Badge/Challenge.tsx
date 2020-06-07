import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import Colors from '@styleGuide/Colors';
import Text from '@components/atoms/Typography/Text/Text';

export interface IChallengeBadge {
  count: number | string;
  color?: string;
}

const StyledContainer = styled(View)`
  background: ${ ({ theme }) => theme.Colors.mainWhite };
  border-radius: 17px;
  padding: 4px 8px;
  align-items: center;
`;

const Challenge: FunctionComponent<IChallengeBadge> = ({ count, color }) => {
  return (
    <StyledContainer>
      <Text
        variant="label"
        color={color ? color : Colors.mainRed}
        isBold
      >
        x { count }
      </Text>
    </StyledContainer>
  );
};

export default Challenge;
