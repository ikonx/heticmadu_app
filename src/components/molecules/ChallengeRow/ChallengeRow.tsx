import React, { FunctionComponent } from 'react';
import Text from '@components/atoms/Typography/Text/Text';
import Icon from '@components/atoms/Icons/Icon';
import { StyledContainer, StyledIcon } from './ChallengeRow.style';
import { IconName } from '@assets/icons/IconName.enum';
import Theme from '@styleGuide/Theme';
import Spacer from '@components/atoms/Spacer/Spacer';
import { TouchableOpacity } from 'react-native';

interface Props {
  text: string;
  icon: IconName;
  clickEvent: () => void;
  disabled?: boolean;
  color: string;
}

const ChallengeRow: FunctionComponent<Props> = ({
  text,
  icon,
  clickEvent,
  disabled ,
  color,
}) => {
  return (
    <TouchableOpacity onPress={clickEvent} disabled={disabled}>
      <StyledContainer>
          <StyledIcon color={ disabled ? Theme.Colors.secondaryGrey : color }>
            <Icon name={icon} color={ disabled ? Theme.Colors.mainBlack : Theme.Colors.mainWhite}/>
          </StyledIcon>
          <Spacer size={16}/>
          <Text>{ text }</Text>
      </StyledContainer>
    </TouchableOpacity>
  );
};

export default ChallengeRow;
