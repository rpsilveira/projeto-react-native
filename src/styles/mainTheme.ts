import { DefaultTheme } from 'styled-components/native';
import { BACKGROUND_COLOR, PRIMARY, SECONDARY } from './colors';

export const mainTheme: DefaultTheme = {
  colors: {
    primary: PRIMARY,
    secondary: SECONDARY,
    background: BACKGROUND_COLOR,
  },
  measure: {
    radius: 8,
  },
};
