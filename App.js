import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { mainTheme } from './src/styles/mainTheme';
import color from 'color';
import { BACKGROUND_COLOR } from './src/styles/colors';
import { BaseContainer } from './src/components/BaseContainer';
import { Login } from './src/pages/Login';
import { Cadastro } from './src/pages/Cadastro';

export default function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <StatusBar
        style = "light"
        backgroundColor = {color(BACKGROUND_COLOR).darken(0.6).hex()}
        translucent = {false}
      />
      <BaseContainer>
        <Cadastro />
      </BaseContainer>
    </ThemeProvider>
  );
}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
