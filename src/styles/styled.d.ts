import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    measure: {
      radius: number;
    },
    colors: {
      primary: string;
      secondary: string;
      background: string;
      danger: string;
    };
  }
}
