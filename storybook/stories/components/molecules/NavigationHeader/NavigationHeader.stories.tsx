import React, { FunctionComponent } from 'react';
import NavigationHeader from '@components/molecules/NavigationHeader/NavigationHeader';

interface Props {}

const NavigationHeaderStories: FunctionComponent<Props> = () => {
  return (
    <NavigationHeader title="Navigation Header" onBack={() => console.log('OK')}/>
  );
};

export default NavigationHeaderStories;
