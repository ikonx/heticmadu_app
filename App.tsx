import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Title from "./src/components/atoms/Typography/Title/Title";
import { useFonts } from '@use-expo/font';
import { AppLoading } from "expo";
import { loadFonts } from "./src/utils/loadFonts";
import Theme from "./src/styleGuide/Theme";
import { ThemeProvider } from "styled-components";
import Tabs from "./src/components/molecules/Tabs/Tabs";

export default function App() {
  let [fontsLoaded] = useFonts(loadFonts);
  const [active, setActive] = useState(0);
  const onClickTab = (i: number) => setActive(i);

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={Theme}>
      <View style={styles.container}>
        <Title isBold>H1</Title>
        <Title variant="h2">Secondary Title</Title>
        <Tabs onClick={onClickTab} activeTab={active}/>
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
