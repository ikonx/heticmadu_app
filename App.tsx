import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Theme from "./src/styleGuide/Theme";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider theme={Theme}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </ThemeProvider>
    </View>
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
