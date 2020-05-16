import React, { FunctionComponent } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';
import styled, { ThemeProvider } from 'styled-components';
import theme from '@src/styleGuide/Theme';
import { useFonts } from '@use-expo/font';
import loadFonts from '@utils/loadFonts';
import { AppLoading } from 'expo';

const Container = styled(View)`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Layout: FunctionComponent = ({ children }) => {
  let [fontsLoaded] = useFonts(loadFonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Container>
          { children }
        </Container>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default Layout;