import React, { FunctionComponent } from 'react';
import Chips from '../../../../../src/components/atoms/Chips/Chips';
import styled from 'styled-components';
import { View } from 'react-native';

interface Props {}

const StyledContainer = styled(View)`
  flex-direction: row;
`;

const StyledChips = styled(View)`
  margin-right: 24px;
`;

const ChipsStories: FunctionComponent<Props> = () => {
  return (
    <StyledContainer>
      <StyledChips>
        <Chips text="Chips" onClick={() => null} />
      </StyledChips>
      <Chips text="Chips" onClick={() => null}  active/>
    </StyledContainer>
  );
};

export default ChipsStories;
