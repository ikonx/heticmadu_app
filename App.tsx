import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { useFonts } from '@use-expo/font';
import StorybookUIRoot from './storybook';
import { AppLoading } from 'expo';
import loadFonts from '@utils/loadFonts';
import theme from '@styleGuide/Theme';
import { TabsModel } from '@utils/models/tabs.model';
import { tabsData } from '@utils/mocks/tabs.data';
import NavigationBottomBar from '@components/molecules/NavigationBottomBar/NavigationBottomBar';
import navigationBottomData from '@utils/mocks/navigationBottomBar.data';

const ACTIVATE_STORYBOOK = true;

function App() {
  let [fontsLoaded] = useFonts(loadFonts);
  const [active, setActive] = useState<TabsModel>(tabsData[0]);
  const onClickTab = (item: TabsModel) => setActive(item);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <NavigationBottomBar data={navigationBottomData} />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default ACTIVATE_STORYBOOK ? StorybookUIRoot : App;
