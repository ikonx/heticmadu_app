
# Madu App - Groupe 5 (School Project)
We need some ingredients for our sauce, here is the list :
- [React Native]( https://reactnative.dev/)
- [Expo](https://docs.expo.io/)
- [TypeScript](https://reactnative.dev/docs/typescript)
- [StyledComponents](https://styled-components.com/docs/api#typescript)
- [StoryBook](https://storybook.js.org/docs/configurations/typescript-config/)
- [Lottie](https://github.com/react-native-community/lottie-react-native)

Wipe it hard  and run 🧙‍♂️
```bash
git clone https://github.com/ikonx/heticmadu_app && heticmadu_app && yarn install && expo start
```

## Project tree 🌲
![atomic design](https://user-images.githubusercontent.com/4838076/33235048-d083dca6-d217-11e7-9aea-9a5ef5ae6fe7.png)

```bash
─── src

───── assets
──────── fonts
──────── icons
──────── illustrations
──────── images

───── components
──────── atoms
──────── molecules
──────── organisms
──────── templates
──────── screens
──────── utils
─────────── interfaces
─────────── mocks
─────────── models
─────────── navigators
──────── styleGuide
──────── context // providers and contexts React Context Api

───── storybook
──────── stories
─────────── components // atomic way
─────────── helpers

```

## Storybook

To start storybook, set variable ACTIVATE_STORYBOOK to `true` in 'App.tsx'
And run `expo start`

All stories are written with the storiesOf API (https://storybook.js.org/docs/formats/storiesof-api/)

For every new module , add it in the "configure" options located in file 'storybook/index.tsx'.
