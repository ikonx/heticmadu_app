import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { IconName } from '../../../assets/icons/IconName.enum';

import Home from '../../../assets/icons/Home.svg'
import Chevron from '../../../assets/icons/Chevron.svg'
import Cross from '../../../assets/icons/Cross.svg'
import Lock from '../../../assets/icons/Lock.svg'
import Maps from '../../../assets/icons/Maps.svg'
import Story from '../../../assets/icons/Story.svg'
import Research from '../../../assets/icons/Research.svg'
import User from '../../../assets/icons/User.svg'
import Done from '../../../assets/icons/Done.svg'

interface Props {
    name: IconName
}

const Icon: FunctionComponent<Props> = ({name}) => {

    const renderIcon = () => {
        switch (name) {
            case IconName.HOME:
                return <Home />
            case IconName.CHEVRON:
                return <Chevron />
            case IconName.CROSS:
                return <Cross/>
            case IconName.LOCK:
                return <Lock />
            case IconName.MAPS:
                return <Maps/>
            case IconName.RESEARCH:
                return <Research />
            case IconName.STORY:
                return <Story/>
            case IconName.USER:
                return <User />
            case IconName.DONE:
                return <Done/>
            default:
                return <Home/>
                break;
        }
    })

  return (
    <View>
          {renderIcon()}
    </View>
  );
};

export default Icon;
