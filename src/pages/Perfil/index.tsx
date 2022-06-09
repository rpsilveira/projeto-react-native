import { BACKGROUND_COLOR, SECONDARY } from "../../styles/colors";
import { Button, Container } from "./styles";
import color from "color";
import React, { useState } from 'react'
import { Header } from "../../components/Header";
import { BaseContainer } from "../../components/BaseContainer";
import { useAuth } from "../../hooks/Auth.hooks";
import { perfilValidator } from "./perfil.validator";
import { useToast } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastLayout } from "../../components/ToastLayout";
import { api } from "../../api";
import { Input } from "../../components/Input";

const PLACEHOLDER_COLOR = color(BACKGROUND_COLOR).lighten(0.5).hex();

export const Perfil: React.FC = () => {
    const [loading, setLoad] = useState<boolean>(false)
    
    const toast = useToast();
    const navigation = useNavigation();
    const { user, logout } = useAuth();
    
    const { control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(perfilValidator),
        defaultValues: {
            email: user?.email,
            password: '',
            newPassword: '',
            confirm: '',
        }
    });

    const onSubmit = async(data: any) => {
        setLoad(true);
        try {
            const responseUserData = await api.get('users', {
                params: {
                    email: data.email,
                    password: data.password,
                }
            });

            const [userData] = responseUserData.data as any[];

            if (!!userData) {
                const response = await api.put(`users/${userData.id}`, {
                    email: userData.email,
                    password: data.newPassword,
                });

                toast.show({
                    placement: "top-right",
                    render: ({id}) => {
                        return ToastLayout.success({id, description: 'senha alterada com sucesso!', close: toast.close})
                    }
                })
            } else {
                toast.show({
                    placement: "top-right",
                    render: ({id}) => {
                        return ToastLayout.error({id, description: 'senha inválida', close: toast.close});
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

    return (
        <BaseContainer>
            <Header title={'Perfil'} backFalse />
            <Container>
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
                            editable={false}
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
                            placeholder = {'SENHA ATUAL'}
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

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <Input
                            placeholder = {'NOVA SENHA'}
                            secureTextEntry
                            placeholderTextColor = {PLACEHOLDER_COLOR}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={errors.newPassword?.message}
                        />
                    )}
                    name="newPassword"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <Input
                            placeholder = {'CONFIRME A SENHA'}
                            secureTextEntry
                            placeholderTextColor = {PLACEHOLDER_COLOR}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={errors.confirm?.message}
                        />
                    )}
                    name="confirm"
                />

                <Button title={'ALTERAR'} loading={loading} onPress={handleSubmit(onSubmit)}/>
                <Button style={{backgroundColor: SECONDARY}} title={'LOGOUT'} loading={loading} onPress={logout}/>
            </Container>
        </BaseContainer>
    )
}
