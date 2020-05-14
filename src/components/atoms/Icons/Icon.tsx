import React, { FunctionComponent, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { IconName } from '../../../assets/icons/IconName.enum';
import { Direction, StyledChevron } from './Chevron/Chevron.style';
import StyledIcon from './Icon.style';

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

interface Props {
  name: IconName;
  direction?: Direction;
  fill?: string;
}

const Icon: FunctionComponent<Props> = ({ name, direction, fill }) => {
  const { Colors } = useContext(ThemeContext);
  const renderIcon = () => {
    switch (name) {
      case IconName.CHEVRON:
        return <StyledChevron direction={direction} fill={fill} />;
      case IconName.CLOCK:
        return <ClockIcon color={fill || Colors.mainBlack} />;
      case IconName.CROSS:
        return <CrossIcon color={fill || Colors.mainBlack} />;
      case IconName.DONE:
        return <DoneIcon color={fill || Colors.mainBlack} />;
      case IconName.FILE:
        return <FileIcon color={fill || Colors.mainBlack} />;
      case IconName.FILTER:
        return <FilterIcon color={fill || Colors.mainBlack} />;
      case IconName.HOME:
        return <HomeIcon color={fill || Colors.mainBlack} />;
      case IconName.LEAF:
        return <LeafIcon color={fill || Colors.mainBlack} />;
      case IconName.LOCK:
        return <LockIcon color={fill || Colors.mainBlack} />;
      case IconName.MAPS:
        return <MapsIcon color={fill || Colors.mainBlack} />;
      case IconName.PHONE:
        return <PhoneIcon color={fill || Colors.mainBlack} />;
      case IconName.SEARCH:
        return <Search color={fill || Colors.mainBlack} />;
      case IconName.STORY:
        return <StoryIcon color={fill || Colors.mainBlack} />;
      case IconName.TH:
        return <ThIcon color={fill || Colors.mainBlack} />;
      case IconName.USER:
        return <UserIcon color={fill || Colors.mainBlack} />;
      default:
        return <HomeIcon color={fill || Colors.mainBlack} />;
    }
  };

  return <StyledIcon>{renderIcon()}</StyledIcon>;
};

export default Icon;
