import React from 'react';
import { IconName } from '@assets/icons/IconName.enum';

export interface NavigationItemModel {
  name: string;
  component: React.ComponentType<any>;
  icon: IconName;
  text: string;
}
