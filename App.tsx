import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/atoms/Typography/Title/Title';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import loadFonts from './src/utils/loadFonts';
import theme from './src/styleGuide/Theme';
import { ThemeProvider } from 'styled-components';
import { Direction } from './src/components/atoms/Icons/Chevron/Chevron.style';
import Icon from './src/components/atoms/Icons/Icon';
import { IconName } from './src/assets/icons/IconName.enum';
import Tabs from './src/components/molecules/Tabs/Tabs';
import { TabsModel } from './src/utils/models/tabs.model';
import { tabsData } from './src/utils/mocks/tabs.data';

export default function App() {
  let [fontsLoaded] = useFonts(loadFonts);
  const [active, setActive] = useState<TabsModel>(tabsData[0]);
  const onClickTab = (item: TabsModel) => setActive(item);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Title isBold>H1</Title>
        <Title variant="h2">Secondary Title</Title>
        <Icon name={IconName.CHEVRON} direction={Direction.TOP} />
        <Icon name={IconName.CHEVRON} direction={Direction.LEFT} />
        <Icon name={IconName.CHEVRON} direction={Direction.BOTTOM} />
        <Icon name={IconName.CHEVRON} />
        <Icon name={IconName.CHEVRON} />
        <Icon name={IconName.CLOCK} fill="#52FF00" />
        <Icon name={IconName.CROSS} fill="red" />
        <Icon name={IconName.DONE} />
        <Icon name={IconName.FILE} />
        <Icon name={IconName.FILTER} />
        <Icon name={IconName.HOME} />
        <Icon name={IconName.LEAF} />
        <Icon name={IconName.LOCK} />
        <Icon name={IconName.MAPS} />
        <Icon name={IconName.PHONE} />
        <Icon name={IconName.SEARCH} />
        <Icon name={IconName.STORY} />
        <Icon name={IconName.TH} />
        <Icon name={IconName.USER} />
        <Tabs data={tabsData} onClick={onClickTab} activeTab={active.value}/>
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
