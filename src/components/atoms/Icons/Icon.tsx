import React, { FunctionComponent } from 'react';
import { IconName } from '../../../assets/icons/IconName.enum';

import HomeIcon from '../../../assets/icons/Home.svg';
import CrossIcon from '../../../assets/icons/Cross.svg';
import LockIcon from '../../../assets/icons/Lock.svg';
import MapsIcon from '../../../assets/icons/Maps.svg';
import StoryIcon from '../../../assets/icons/Story.svg';
import Search from '../../../assets/icons/Search.svg';
import UserIcon from '../../../assets/icons/User.svg';
import DoneIcon from '../../../assets/icons/Done.svg';
import PhoneIcon from '../../../assets/icons/Phone.svg';
import FilterIcon from '../../../assets/icons/Filter.svg';
import LeafIcon from '../../../assets/icons/Leaf.svg';
import FileIcon from '../../../assets/icons/File.svg';
import ClockIcon from '../../../assets/icons/Clock.svg';
import ThIcon from '../../../assets/icons/Th.svg';

import { Direction, StyledChevron } from './Chevron/Chevron.style';
import { StyledIcon } from './Icon.style';

interface Props {
  name: IconName;
  direction?: Direction;
  fill?: string;
}

const Icon: FunctionComponent<Props> = ({ name, direction, fill }) => {
  const renderIcon = () => {
    switch (name) {
      case IconName.CHEVRON:
        return <StyledChevron direction={direction} fill={fill} />;
      case IconName.CLOCK:
        return <ClockIcon color="#FCFCFC" />;
      case IconName.CROSS:
        return <CrossIcon />;
      case IconName.DONE:
        return <DoneIcon />;
      case IconName.FILE:
        return <FileIcon />;
      case IconName.FILTER:
        return <FilterIcon />;
      case IconName.HOME:
        return <HomeIcon />;
      case IconName.LEAF:
        return <LeafIcon />;
      case IconName.LOCK:
        return <LockIcon />;
      case IconName.MAPS:
        return <MapsIcon />;
      case IconName.PHONE:
        return <PhoneIcon />;
      case IconName.SEARCH:
        return <Search />;
      case IconName.STORY:
        return <StoryIcon />;
      case IconName.TH:
        return <ThIcon />;
      case IconName.USER:
        return <UserIcon />;
      default:
        return <HomeIcon />;
        break;
    }
  };

  return <StyledIcon fill={fill}>{renderIcon()}</StyledIcon>;
};

export default Icon;
