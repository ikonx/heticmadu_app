import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { useFonts } from '@use-expo/font';
import StorybookUIRoot from './storybook';
import { AppLoading } from 'expo';
import loadFonts from './src/utils/loadFonts';
import theme from './src/styleGuide/Theme';
import NavigationBottomBar from './src/components/molecules/NavigationBottomBar/NavigationBottomBar';
import navigationBottomData from './src/utils/mocks/navigationBottomBar.data';
import PoisProvider from './src/contexts/pois/pois.provider';
import TagsProvider from './src/contexts/tags/tags.provider';
import SearchProvider from './src/contexts/search/search.provider';
import UserProvider from './src/contexts/user/user.provider';

const ACTIVATE_STORYBOOK = false;

function App() {
  const [fontsLoaded] = useFonts(loadFonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <PoisProvider>
      <TagsProvider>
        <SearchProvider>
          <ThemeProvider theme={theme}>
            <UserProvider>
              <NavigationContainer>
                <NavigationBottomBar data={navigationBottomData} />
              </NavigationContainer>
            </UserProvider>
          </ThemeProvider>
        </SearchProvider>
      </TagsProvider>
    </PoisProvider>
  );
}

export default ACTIVATE_STORYBOOK ? StorybookUIRoot : App;
