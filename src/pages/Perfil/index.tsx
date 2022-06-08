import { BACKGROUND_COLOR, SECONDARY } from "../../styles/colors";
import { Button, Container, ContainerInput, Input } from "./styles";
import color from "color";
import { FontAwesome5 } from '@expo/vector-icons'
import { useState } from 'react'
import { Header } from "../../components/Header";
import { BaseContainer } from "../../components/BaseContainer";
import { useAuth } from "../../hooks/Auth.hooks";

const PLACEHOLDER_COLOR = color(BACKGROUND_COLOR).lighten(0.5).hex();

export const Perfil: React.FC = () => {
    const [currentSecurity, setCurrentSecurity] = useState<boolean>(true)
    const [security, setSecurity] = useState<boolean>(true)
    const [securityConfirm, setSecurityConfirm] = useState<boolean>(true)
    const [loading, setLoad] = useState<boolean>(false)

    const { logout } = useAuth();

    const changeCurrentSecurity = () => setCurrentSecurity(current => !current)
    const changeSecurity = () => setSecurity(current => !current)
    const changeSecurityConfirm = () => setSecurityConfirm(current => !current)
    const getIcon = (enabled: boolean) => `eye${enabled ? '-slash' : ''}`

    const sendForm = async() => {
        setLoad(true);
        await new Promise(resolve => setTimeout(resolve, 3000))
        setLoad(false);
    }

    return (
        <BaseContainer>
            <Header title={'Perfil'} backFalse />
            <Container>
                <ContainerInput>
                    <Input
                        keyboardType = {'email-address'}
                        placeholder = {'E-MAIL'}
                        placeholderTextColor = {PLACEHOLDER_COLOR}
                    />
                </ContainerInput>
                <ContainerInput>
                    <Input
                        keyboardType = {'default'}
                        placeholder = {'SENHA ATUAL'}
                        secureTextEntry = {currentSecurity}
                        placeholderTextColor = {PLACEHOLDER_COLOR}
                        hasIconRight
                    />
                    <FontAwesome5
                        name = {getIcon(currentSecurity)}
                        size = {26}
                        color = {PLACEHOLDER_COLOR}
                        onPress = {changeCurrentSecurity}
                    />
                </ContainerInput>
                <ContainerInput>
                    <Input
                        keyboardType = {'default'}
                        placeholder = {'SENHA'}
                        secureTextEntry = {security}
                        placeholderTextColor = {PLACEHOLDER_COLOR}
                        hasIconRight
                    />
                    <FontAwesome5
                        name = {getIcon(security)}
                        size = {26}
                        color = {PLACEHOLDER_COLOR}
                        onPress = {changeSecurity}
                    />
                </ContainerInput>
                <ContainerInput>
                    <Input
                        keyboardType = {'default'}
                        placeholder = {'CONFIRME A SENHA'}
                        secureTextEntry = {securityConfirm}
                        placeholderTextColor = {PLACEHOLDER_COLOR}
                        hasIconRight
                    />
                    <FontAwesome5
                        name = {getIcon(securityConfirm)}
                        size = {26}
                        color = {PLACEHOLDER_COLOR}
                        onPress = {changeSecurityConfirm}
                    />
                </ContainerInput>
                <Button title={'ALTERAR'} loading={loading} onPress={sendForm}/>
                <Button style={{backgroundColor: SECONDARY}} title={'LOGOUT'} loading={loading} onPress={logout}/>
            </Container>
        </BaseContainer>
    )
}
