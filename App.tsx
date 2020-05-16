import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { useFonts } from '@use-expo/font';
import StorybookUIRoot from './storybook';
import Title from '@components/atoms/Typography/Title/Title';
import { AppLoading } from 'expo';
import loadFonts from '@utils/loadFonts';
import theme from '@styleGuide/Theme';
import Tabs from '@components/molecules/Tabs/Tabs';
import { TabsModel } from '@utils/models/tabs.model';
import { tabsData } from '@utils/mocks/tabs.data';
import Badge from '@components/atoms/Badge/Badge';
import Tag from '@components/atoms/Tag/Tag';
import Separator from '@components/atoms/Separator/Separator';
import SearchInput from '@components/molecules/SearchInput/SearchInput';

import Illustration from '@components/atoms/Illustrations/Illustration';
import { IllustrationName } from '@assets/illustrations/IllustrationName.enum';
import Icon from '@components/atoms/Icons/Icon';
import Buttons from '@components/atoms/Buttons/Buttons';
import { TouchableType } from '@components/atoms/Buttons/Buttons.enum';
import { IconName } from '@assets/icons/IconName.enum';
import { Direction } from '@components/atoms/Icons/Chevron/Chevron.style';
import Text from '@components/atoms/Typography/Text/Text';
import NavigationBottomBar from '@components/molecules/NavigationBottomBar/NavigationBottomBar';
import navigationBottomData from '@utils/mocks/navigationBottomBar.data';

const ACTIVATE_STORYBOOK = false;

function App() {
  let [fontsLoaded] = useFonts(loadFonts);
  const [active, setActive] = useState<TabsModel>(tabsData[0]);
  const onClickTab = (item: TabsModel) => setActive(item);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
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
        <NavigationBottomBar data={navigationBottomData}/>
      </ThemeProvider>
    </NavigationContainer>
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