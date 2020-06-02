import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Illustration from '@components/atoms/Illustrations/Illustration';
import Text from '@components/atoms/Typography/Text/Text';
import IllustrationName from '@assets/illustrations/IllustrationName.enum';
import Spacer from '@components/atoms/Spacer/Spacer';
import List from '@components/atoms/List/List';

interface Props {}

const StyledList = styled(List)``;

const IllustrationsStories: FunctionComponent<Props> = () => {
  return (
    <StyledList>
      <StyledList flexDirection="column">
        <Text>Energie</Text>
        <Illustration name={IllustrationName.ENERGIE} />
        <Spacer size={16} />
        <Text>Cuisine</Text>
        <Illustration name={IllustrationName.CUISINE} />
      </StyledList>
      <Spacer size={24} />
      <StyledList flexDirection="column">
        <Text>Maison</Text>
        <Illustration name={IllustrationName.MAISON} />
        <Spacer size={16} />
        <Text>Recyclage</Text>
        <Illustration name={IllustrationName.RECYCLAGE} />
      </StyledList>
    </StyledList>
  );
};

export default IllustrationsStories;
