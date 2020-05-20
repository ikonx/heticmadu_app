import React, { FunctionComponent } from 'react';
import Chip from '@components/atoms/Chip/Chip';
import styled from 'styled-components';
import { View } from 'react-native';

interface Props {}

const StyledContainer = styled(View)`
  flex-direction: row;
`;

const StyledChip = styled(View)`
  margin-right: 24px;
`;

const ChipStories: FunctionComponent<Props> = () => {
  return (
    <StyledContainer>
      <StyledChip>
        <Chip text="Chip" onClick={() => null} />
      </StyledChip>
      <Chip text="Chip" onClick={() => null} active/>
    </StyledContainer>
  );
};

export default ChipStories;
