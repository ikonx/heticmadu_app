import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
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
import StorybookUIRoot from './storybook';

import Illustration from './src/components/atoms/Illustrations/Illustration';
import { IllustrationName } from './src/assets/illustrations/IllustrationName.enum';
import Icon from './src/components/atoms/Icons/Icon';
import Buttons from './src/components/atoms/Buttons/Buttons';
import { TouchableType } from './src/components/atoms/Buttons/Buttons.enum';
import { IconName } from './src/assets/icons/IconName.enum';
import { Direction } from './src/components/atoms/Icons/Chevron/Chevron.style';
import Text from './src/components/atoms/Typography/Text/Text';

const ACTIVATE_STORYBOOK = false;

function App() {
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
        <Tag text="Tags" onClick={() => console.log('CLICK TAG')} />
        <Badge.Price price="€€" />
        <Badge.GreenScore score="8.3" />
        <Tabs data={tabsData} onClick={onClickTab} activeTab={active.value} />
        <SearchInput onSearch={(value: string) => console.log(value)} />
        <Separator />
        <View style={styles.illus}>
          <Illustration name={IllustrationName.ENERGIE} />
          <Illustration name={IllustrationName.CUISINE} />
          <Illustration name={IllustrationName.MAISON} />
          <Illustration name={IllustrationName.RECYCLAGE} />
        </View>
        <Buttons variant={TouchableType.ICON}>
          <Icon
            height={24}
            width={24}
            name={IconName.CHEVRON}
            direction={Direction.LEFT}
          />
        </Buttons>
        <Buttons variant={TouchableType.FULLWIDTH}>
          <Text
            isBold
            variant="button"
            color={theme.Colors.mainWhite}
            style={{ textAlign: 'center' }}
          >
            Button
          </Text>
        </Buttons>
        <Buttons variant={TouchableType.INVERT}>
          <Text isBold variant="button" color={theme.Colors.mainPurple}>
            Button + icon
          </Text>
        </Buttons>
        <Buttons variant={TouchableType.DEFAULT}>
          <>
            <Icon
              height={24}
              width={24}
              name={IconName.SEARCH}
              fill={theme.Colors.mainWhite}
            />
            <Text isBold variant="button" color={theme.Colors.mainWhite}>
              Recherche
            </Text>
          </>
        </Buttons>
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
  illus: {
    flexDirection: 'row',
    backgroundColor: '#F68482',
  },
});

export default ACTIVATE_STORYBOOK ? StorybookUIRoot : App;