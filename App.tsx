import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { useFonts } from '@use-expo/font';
import StorybookUIRoot from './storybook';
import { AppLoading } from 'expo';
import loadFonts from '@utils/loadFonts';
import theme from '@styleGuide/Theme';
import NavigationBottomBar from '@components/molecules/NavigationBottomBar/NavigationBottomBar';
import navigationBottomData from '@utils/mocks/navigationBottomBar.data';

const ACTIVATE_STORYBOOK = false;

function App() {
  const [fontsLoaded] = useFonts(loadFonts);

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
