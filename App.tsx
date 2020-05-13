import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/atoms/Typography/Title/Title';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { loadFonts } from './src/utils/loadFonts';
import Theme from './src/styleGuide/Theme';
import { ThemeProvider } from 'styled-components';
import Chevron, {
  Direction,
} from './src/components/atoms/Icons/Chevron/Chevron';

export default function App() {
  let [fontsLoaded] = useFonts(loadFonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={Theme}>
      <View style={styles.container}>
        <Title isMedium={true}>H1</Title>
        <Title variant="h2">Secondary Title</Title>
        <Chevron direction={Direction.TOP} />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
