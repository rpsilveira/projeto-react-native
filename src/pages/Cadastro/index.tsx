import { BACKGROUND_COLOR, PRIMARY } from "../../styles/colors";
import { Button, ButtonTitle, Container, ContainerInput, Input } from "./styles";
import color from "color";
import { FontAwesome5 } from '@expo/vector-icons'
import { useState } from 'react'
import { Header } from "../../components/Header";

const PLACEHOLDER_COLOR = color(BACKGROUND_COLOR).lighten(0.5).hex();

export const Cadastro: React.FC = () => {
    const [security, setSecurity] = useState<boolean>(true)
    const [securityConfirm, setSecurityConfirm] = useState<boolean>(true)

    const changeSecurity = () => setSecurity(current => !current)
    const changeSecurityConfirm = () => setSecurityConfirm(current => !current)
    const getIcon = (enabled: boolean) => `eye${enabled ? '-slash' : ''}`

    return (
        <>
            <Header title={'Cadastro'}/>
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
                <Button onPress = {() => {}}>
                    <ButtonTitle>CADASTRAR</ButtonTitle>
                </Button>
            </Container>
        </>
    )
}
