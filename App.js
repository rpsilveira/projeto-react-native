import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { mainTheme } from './src/styles/mainTheme';
import color from 'color';
import { BACKGROUND_COLOR } from './src/styles/colors';
import { BaseContainer } from './src/components/BaseContainer';
import { Routes } from './src/routes';

export default function App() {
    return (
        <ThemeProvider theme={mainTheme}>
            <BaseContainer>
                <StatusBar
                    style = "light"
                    backgroundColor = {color(BACKGROUND_COLOR).darken(0.6).hex()}
                    translucent = {false}
                />
                <Routes />
            </BaseContainer>
        </ThemeProvider>
    );
}
