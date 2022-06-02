import { DefaultTheme } from 'styled-components/native';
import { BACKGROUND_COLOR, DANGER, PRIMARY, SECONDARY } from './colors';

export const mainTheme: DefaultTheme = {
  colors: {
    primary: PRIMARY,
    secondary: SECONDARY,
    background: BACKGROUND_COLOR,
    danger: DANGER,
  },
  measure: {
    radius: 8,
  },
};
