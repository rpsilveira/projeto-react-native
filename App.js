import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { mainTheme } from './src/styles/mainTheme';
import color from 'color';
import { BACKGROUND_COLOR } from './src/styles/colors';
import { BaseContainer } from './src/components/BaseContainer';
import { Routes } from './src/routes';
import { AuthProvider } from './src/hooks/Auth.hooks';
import { NativeBaseProvider } from "native-base";

export default function App() {
    return (
        <ThemeProvider theme={mainTheme}>
            <AuthProvider>  
                <NativeBaseProvider>          
                    <BaseContainer>
                        <StatusBar
                            style = "light"
                            backgroundColor = {color(BACKGROUND_COLOR).darken(0.6).hex()}
                            translucent = {false}
                        />
                        <Routes />
                    </BaseContainer>
                </NativeBaseProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}
