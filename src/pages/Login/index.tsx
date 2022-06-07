import { BACKGROUND_COLOR, PRIMARY } from "../../styles/colors";
import { Button, Container, ContainerSwitch, LabelSwitch, Link, Switch, Title, TitleBold } from "./styles";
import color from "color";
import { useState } from 'react'
import { BaseContainer } from "../../components/BaseContainer";
import { useNavigation } from '@react-navigation/native';
import { Input } from "../../components/Input";

const PLACEHOLDER_COLOR = color(BACKGROUND_COLOR).lighten(0.5).hex();

export const Login: React.FC = () => {
    const [saveLogin, setSaveLogin] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

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
                <Input
                    keyboardType = {'email-address'}
                    placeholder = {'E-MAIL'}
                    placeholderTextColor = {PLACEHOLDER_COLOR}
                />
                <Input
                    keyboardType = {'default'}
                    placeholder = {'SENHA'}
                    secureTextEntry
                    placeholderTextColor = {PLACEHOLDER_COLOR}
                />
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
