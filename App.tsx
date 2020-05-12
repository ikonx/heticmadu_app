import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from "./src/components/atoms/Typography/Title/Title";
import { useFonts } from '@use-expo/font';
import { AppLoading } from "expo";
import { loadFonts } from "./src/utils/loadFonts";

export default function App() {
  let [fontsLoaded] = useFonts(loadFonts);

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <View style={styles.container}>
      <Title>H1</Title>
      <Title variant="h4">Secondary Title</Title>
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
