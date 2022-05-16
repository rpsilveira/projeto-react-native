import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { mainTheme } from './src/styles/mainTheme';
import color from 'color';
import { BACKGROUND_COLOR } from './src/styles/colors';
import { BaseContainer } from './src/components/BaseContainer';
import { Login } from './src/pages/Login';

export default function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <StatusBar style="light" backgroundColor={color(BACKGROUND_COLOR).darken(0.3).hex()} />
      <BaseContainer>
        <Login />
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
