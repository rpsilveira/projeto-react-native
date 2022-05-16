import { BACKGROUND_COLOR, PRIMARY } from "../../styles/colors";
import { Button, ButtonTitle, Container, ContainerInput, ContainerSwitch, Input, LabelSwitch, Link, Switch, Title, TitleBold } from "./styles";
import color from "color";
import { FontAwesome5 } from '@expo/vector-icons'
import { useState } from 'react'

const PLACEHOLDER_COLOR = color(BACKGROUND_COLOR).lighten(0.5).hex();

export const Login: React.FC = () => {
    const [security, setSecurity] = useState<boolean>(true)
    const [saveLogin, setSaveLogin] = useState<boolean>(false)

    const changeSecurity = () => setSecurity(current => !current)
    const changeSaveLogin = () => setSaveLogin(current => !current)

    return (
        <Container>
            <Title><TitleBold>My</TitleBold>Collection</Title>
            <ContainerInput>
                <Input keyboardType={'email-address'} placeholder={'E-mail'} placeholderTextColor={PLACEHOLDER_COLOR}/>
            </ContainerInput>
            <ContainerInput>
                <Input keyboardType={'default'} placeholder={'Senha'} secureTextEntry={security} placeholderTextColor={PLACEHOLDER_COLOR} hasIconRight/>
                <FontAwesome5 name={`eye${security?'-slash':''}`} size={26} color={PLACEHOLDER_COLOR} onPress={changeSecurity}/>
            </ContainerInput>
            <Button onPress={() => {}}>
                <ButtonTitle>ENTRAR</ButtonTitle>
            </Button>
            <ContainerSwitch>
                <Switch
                    onChange={changeSaveLogin}
                    value={saveLogin}
                    trackColor={{true: PRIMARY, false: PLACEHOLDER_COLOR}}
                />
                <LabelSwitch onPress={changeSaveLogin}>PERMANECER LOGADO</LabelSwitch>
            </ContainerSwitch>
            <Link onPress={() => {}}>cadastrar</Link>
        </Container>
    )
}
