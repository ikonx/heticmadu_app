import 'styled-components';
import Theme from '@styleGuide/Theme';

declare module 'styled-components' {
  type Theme = typeof Theme;

  export interface DefaultTheme extends Theme {}
}
