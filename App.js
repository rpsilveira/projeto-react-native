import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { mainTheme } from './src/styles/mainTheme';
import color from 'color';
import { BACKGROUND_COLOR } from './src/styles/colors';
import { BaseContainer } from './src/components/BaseContainer';
import { Login } from './src/pages/Login';
import { Cadastro } from './src/pages/Cadastro';
import { Perfil } from './src/pages/Perfil';
import { Detalhes } from './src/pages/Detalhes';
import { Carrinho } from './src/pages/Carrinho';
import { Listagem } from './src/pages/Listagem';

export default function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <StatusBar
        style = "light"
        backgroundColor = {color(BACKGROUND_COLOR).darken(0.6).hex()}
        translucent = {false}
      />
      <BaseContainer>
        <Listagem />
      </BaseContainer>
    </ThemeProvider>
  );
}
