import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/atoms/Typography/Title/Title';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import loadFonts from './src/utils/loadFonts';
import theme from './src/styleGuide/Theme';
import { ThemeProvider } from 'styled-components';
import Badge from './src/components/atoms/Badge/Badge';

export default function App() {
  let [fontsLoaded] = useFonts(loadFonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Title isBold>H1</Title>
        <Title variant="h2">Secondary Title</Title>
        <Badge.Price price="€€" />
        <Badge.GreenScore score="8.3" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
