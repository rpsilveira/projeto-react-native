import { BACKGROUND_COLOR, PRIMARY, SECONDARY } from "../../styles/colors";
import { Button, Container, ContainerSwitch, LabelSwitch, Link, Switch, Title, TitleBold } from "./styles";
import color from "color";
import { useEffect, useState } from 'react'
import { BaseContainer } from "../../components/BaseContainer";
import { useNavigation } from '@react-navigation/native';
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidator } from "../Login/login.validator";
import { Controller, useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useToast } from "native-base";
import { ToastLayout } from "../../components/ToastLayout";
import { api } from "../../api";
import { useAuth, UserProps } from "../../hooks/Auth.hooks";

const PLACEHOLDER_COLOR = color(BACKGROUND_COLOR).lighten(0.5).hex();

interface SaveLoginProps {
    user?: UserProps;
}

export const Login: React.FC = () => {
    const [saveLogin, setSaveLogin] = useState<boolean>(false)
    const [loading, setLoad] = useState<boolean>(false)

    const { setUser } = useAuth();
    const toast = useToast();
    const navigation = useNavigation<any>();

    const { control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(loginValidator),
        defaultValues: {
            email: '',
            password: '',
        }
    });      

    const changeSaveLogin = () => setSaveLogin(current => !current)

    const storeSaveLogin = async(user?: UserProps) => {
        try {
            const jsonValue = JSON.stringify({user});
            await AsyncStorage.setItem('@myCollection/saveLogin', jsonValue);
        } catch(e) {
            //saving error
        }
    }

    const getSaveLogin: () => Promise<SaveLoginProps> = async() => {
        try {
            const jsonValue = await AsyncStorage.getItem('@myCollection/saveLogin');
            if (jsonValue != null) {
                return JSON.parse(jsonValue);
            }
        } catch(e) {

        }
        return {user: undefined}
    }

    const onSubmit = async(dataForm: any) => {
        setLoad(true);
        try {
            const response = await api.get('users', {
                params: {
                    ...dataForm
                }
            });

            const [data] = response.data as any[];

            if (!!data) {
                const { email, id } = data;
                await storeSaveLogin(saveLogin ? {email, id} : undefined);
                setUser({email, id});
            } else {
                toast.show({
                    placement: "top-right",
                    render: ({id}) => {
                        return ToastLayout.error({id, description: 'e-mail/senha inválido(s)', close: toast.close});
                    }
                })
            }

        } catch(e: any) {
            toast.show({
                placement: "top-right",
                render: ({id}) => {
                    return ToastLayout.error({id, description: e.message, close: toast.close});
                }
            })
        }
        setLoad(false);
    }  

    useEffect(() => {
        (async() => {
            const data = await getSaveLogin();
            if (data.user) {
                setUser(data.user);
            }
        })()
    }, []);

    
    return (
        <BaseContainer>
            <Container>
                <Title><TitleBold>My</TitleBold>Collection</Title>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <Input
                            keyboardType = {'email-address'}
                            placeholder = {'E-MAIL'}
                            placeholderTextColor = {PLACEHOLDER_COLOR}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={errors.email?.message}
                        />
                    )}
                    name="email"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <Input
                            placeholder = {'SENHA'}
                            secureTextEntry
                            placeholderTextColor = {PLACEHOLDER_COLOR}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={errors.password?.message}
                        />
                    )}
                    name="password"
                />

                <Button title={'ENTRAR'} loading={loading} onPress={handleSubmit(onSubmit)}/>
                
                <ContainerSwitch>
                    <Switch
                        onChange = {changeSaveLogin}
                        value = {saveLogin}
                        thumbColor = {SECONDARY}
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
