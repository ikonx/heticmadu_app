import React from 'react';
import Welcome from './helpers/Welcome';
import { storiesOf } from '@storybook/react-native';

storiesOf('Welcome', module).add('Madu app - design system', () => <Welcome />);
