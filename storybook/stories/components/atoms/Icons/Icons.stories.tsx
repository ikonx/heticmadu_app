import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { IconName } from '@assets/icons/IconName.enum';
import Icon from '@components/atoms/Icons/Icon';
import Text from '@components/atoms/Typography/Text/Text';
import Spacer from '@components/atoms/Spacer/Spacer';
import { Direction } from '@components/atoms/Icons/Chevron/Chevron.style';
import List from '@components/atoms/List/List';

interface Props {}

const StyledList = styled(List)``;

const StyledIcon = styled(Icon)`
  width: 25px;
  height: 25px;
`;

const IconsStories: FunctionComponent<Props> = () => {
  return (
    <StyledList>
      <StyledList flexDirection="column">
        <Text>Camera</Text>
        <StyledIcon name={IconName.CAMERA} />
        <Spacer size={16} />
        <Text>Chevron</Text>
        <StyledList>
          <StyledIcon name={IconName.CHEVRON} direction={Direction.TOP} />
          <StyledIcon name={IconName.CHEVRON} direction={Direction.RIGHT} />
          <StyledIcon name={IconName.CHEVRON} direction={Direction.BOTTOM} />
          <StyledIcon name={IconName.CHEVRON} direction={Direction.LEFT} />
        </StyledList>
        <Spacer size={16} />
        <Text>Clock</Text>
        <StyledIcon name={IconName.CLOCK}/>
        <Spacer size={16} />
        <Text>Cross</Text>
        <StyledIcon name={IconName.CROSS}/>
        <Spacer size={16} />
        <Text>Done</Text>
        <StyledIcon name={IconName.DONE}/>
        <Spacer size={16} />
        <Text>Error</Text>
        <StyledIcon name={IconName.ERROR}/>
        <Spacer size={16} />
        <Text>Eyeslash</Text>
        <StyledIcon name={IconName.EYESLASH}/>
        <Spacer size={16} />
        <Text>Eye</Text>
        <StyledIcon name={IconName.EYE}/>
      </StyledList>
      <Spacer size={24}/>
      <StyledList flexDirection="column">
        <Text>File</Text>
        <StyledIcon name={IconName.FILE}/>
        <Spacer size={16} />
        <Text>Filter</Text>
        <StyledIcon name={IconName.FILTER}/>
        <Spacer size={16} />
        <Text>Filters</Text>
        <StyledIcon name={IconName.FILTERS}/>
        <Spacer size={16} />
        <Text>Home</Text>
        <StyledIcon name={IconName.HOME}/>
        <Spacer size={16} />
        <Text>Leaf</Text>
        <StyledIcon name={IconName.LEAF}/>
        <Spacer size={16} />
        <Text>Lock</Text>
        <StyledIcon name={IconName.LOCK}/>
        <Spacer size={16} />
        <Text>Maps</Text>
        <StyledIcon name={IconName.MAPS}/>
        <Spacer size={16} />
        <Text>Phone</Text>
        <StyledIcon name={IconName.PHONE}/>
      </StyledList>
      <Spacer size={24}/>
      <StyledList flexDirection="column">
        <Text>Search</Text>
        <StyledIcon name={IconName.SEARCH}/>
        <Spacer size={16} />
        <Text>Story</Text>
        <StyledIcon name={IconName.STORY}/>
        <Spacer size={16} />
        <Text>TH</Text>
        <StyledIcon name={IconName.TH}/>
        <Spacer size={16} />
        <Text>User</Text>
        <StyledIcon name={IconName.USER}/>
      </StyledList>
    </StyledList>
  );
};

export default IconsStories;
