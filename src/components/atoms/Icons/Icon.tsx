import React, { FunctionComponent, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { SvgProps } from 'react-native-svg';
import { IconName } from '@assets/icons/IconName.enum';

import CameraIcon from '@assets/icons/Camera.svg';
import ClockIcon from '@assets/icons/Clock.svg';
import CrossIcon from '@assets/icons/Cross.svg';
import DoneIcon from '@assets/icons/Done.svg';
import ErrorIcon from '@assets/icons/Error.svg';
import EyeIcon from '@assets/icons/Eye.svg';
import FileIcon from '@assets/icons/File.svg';
import FilterIcon from '@assets/icons/Filter.svg';
import FiltersIcon from '@assets/icons/Filters.svg';
import EyeSlashIcon from '@assets/icons/EyeSlash.svg';
import HomeIcon from '@assets/icons/Home.svg';
import LeafIcon from '@assets/icons/Leaf.svg';
import LockIcon from '@assets/icons/Lock.svg';
import MapsIcon from '@assets/icons/Maps.svg';
import PhoneIcon from '@assets/icons/Phone.svg';
import Search from '@assets/icons/Search.svg';
import StoryIcon from '@assets/icons/Story.svg';
import ThIcon from '@assets/icons/Th.svg';
import UserIcon from '@assets/icons/User.svg';
import StyledIcon from './Icon.style';
import { Direction, StyledChevron } from './Chevron/Chevron.style';

interface Props extends SvgProps {
  name: IconName;
  direction?: Direction;
  fill?: string;
}

const Icon: FunctionComponent<Props> = ({ name, direction, fill, ...rest }) => {
  const { Colors } = useContext(ThemeContext);
  const renderIcon = () => {
    switch (name) {
      case IconName.CAMERA:
        return <CameraIcon color={fill || Colors.mainBlack} {...rest} />;
      case IconName.CHEVRON:
        return <StyledChevron direction={direction} fill={fill} {...rest} />;
      case IconName.CLOCK:
        return <ClockIcon color={fill || Colors.mainBlack} {...rest} />;
      case IconName.CROSS:
        return <CrossIcon color={fill || Colors.mainBlack} {...rest} />;
      case IconName.DONE:
        return <DoneIcon color={fill || Colors.mainBlack} {...rest} />;
      case IconName.ERROR:
        return <ErrorIcon color={fill || Colors.mainBlack} {...rest} />;
      case IconName.EYESLASH:
        return <EyeSlashIcon color={fill || Colors.mainBlack} {...rest} />;
      case IconName.EYE:
        return <EyeIcon color={fill || Colors.mainBlack} {...rest} />;
      case IconName.FILE:
        return <FileIcon color={fill || Colors.mainBlack} {...rest} />;
      case IconName.FILTER:
        return <FilterIcon color={fill || Colors.mainBlack} {...rest} />;
      case IconName.FILTERS:
        return <FiltersIcon color={fill || Colors.mainBlack} {...rest} />;
      case IconName.HOME:
        return <HomeIcon color={fill || Colors.mainBlack} {...rest} />;
      case IconName.LEAF:
        return <LeafIcon color={fill || Colors.mainBlack} {...rest} />;
      case IconName.LOCK:
        return <LockIcon color={fill || Colors.mainBlack} {...rest} />;
      case IconName.MAPS:
        return <MapsIcon color={fill || Colors.mainBlack} {...rest} />;
      case IconName.PHONE:
        return <PhoneIcon color={fill || Colors.mainBlack} {...rest} />;
      case IconName.SEARCH:
        return <Search color={fill || Colors.mainBlack} {...rest} />;
      case IconName.STORY:
        return <StoryIcon color={fill || Colors.mainBlack} {...rest} />;
      case IconName.TH:
        return <ThIcon color={fill || Colors.mainBlack} {...rest} />;
      case IconName.USER:
        return <UserIcon color={fill || Colors.mainBlack} {...rest} />;
      default:
        return <HomeIcon color={fill || Colors.mainBlack} {...rest} />;
    }
  };

  return <StyledIcon>{renderIcon()}</StyledIcon>;
};

export default Icon;
