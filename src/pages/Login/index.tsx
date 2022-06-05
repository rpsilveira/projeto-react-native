import { BACKGROUND_COLOR, PRIMARY } from "../../styles/colors";
import { Button, Container, ContainerInput, ContainerSwitch, Input, LabelSwitch, Link, Switch, Title, TitleBold } from "./styles";
import color from "color";
import { FontAwesome5 } from '@expo/vector-icons'
import { useState } from 'react'
import { BaseContainer } from "../../components/BaseContainer";
import { useNavigation } from '@react-navigation/native';

const PLACEHOLDER_COLOR = color(BACKGROUND_COLOR).lighten(0.5).hex();

export const Login: React.FC = () => {
    const [security, setSecurity] = useState<boolean>(true)
    const [saveLogin, setSaveLogin] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const changeSecurity = () => setSecurity(current => !current)
    const changeSaveLogin = () => setSaveLogin(current => !current)

    const sendForm = async() => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 3000))
        setLoading(false);
    }

    const navigation = useNavigation<any>();

    return (
        <BaseContainer>
            <Container>
                <Title><TitleBold>My</TitleBold>Collection</Title>
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
                        name = {`eye${security ? '-slash' : ''}`}
                        size = {26}
                        color = {PLACEHOLDER_COLOR}
                        onPress = {changeSecurity}
                    />
                </ContainerInput>
                <Button title={'ENTRAR'} loading={loading} onPress={sendForm}/>
                <ContainerSwitch>
                    <Switch
                        onChange = {changeSaveLogin}
                        value = {saveLogin}
                        trackColor = {{true: PRIMARY, false: PLACEHOLDER_COLOR}}
                    />
                    <LabelSwitch onPress = {changeSaveLogin}>PERMANECER LOGADO</LabelSwitch>
                </ContainerSwitch>
                <Link onPress = {() => {
                    navigation.navigate('Cadastro')
                }}>cadastrar</Link>
            </Container>
        </BaseContainer>
    )
}
