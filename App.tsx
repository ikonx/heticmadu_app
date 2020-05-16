import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Title from './src/components/atoms/Typography/Title/Title';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import loadFonts from './src/utils/loadFonts';
import theme from './src/styleGuide/Theme';
import { ThemeProvider } from 'styled-components';
import Tabs from './src/components/molecules/Tabs/Tabs';
import { TabsModel } from './src/utils/models/tabs.model';
import { tabsData } from './src/utils/mocks/tabs.data';
import Badge from './src/components/atoms/Badge/Badge';
import Tag from './src/components/atoms/Tag/Tag';
import Separator from './src/components/atoms/Separator/Separator';
import SearchInput from './src/components/molecules/SearchInput/SearchInput';
import Map from './src/components/organisms/Map/Map';

import Illustration from './src/components/atoms/Illustrations/Illustration';
import { IllustrationName } from './src/assets/illustrations/IllustrationName.enum';
import TagsList from './src/components/molecules/TagsList/TagsList';

export default function App() {
  let [fontsLoaded] = useFonts(loadFonts);
  const [active, setActive] = useState<TabsModel>(tabsData[0]);
  const onClickTab = (item: TabsModel) => setActive(item);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Map />
        {/* <TagsList /> */}
      </SafeAreaView>
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
  illus: {
    flexDirection: 'row',
    backgroundColor: '#F68482',
  },
});
