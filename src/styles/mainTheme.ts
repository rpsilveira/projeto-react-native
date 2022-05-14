import { DefaultTheme } from 'styled-components';
import { BACKGROUND_COLOR, PRIMARY, SECONDARY } from './colors';

const mainTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    primary: PRIMARY,
    secondary: SECONDARY,
    background: BACKGROUND_COLOR,
  },
};

export { mainTheme };