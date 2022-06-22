import { PLACEHOLDER_COLOR } from "../../styles/colors";
import { Button, Container } from "./styles";
import React, { useState } from 'react'
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { BaseContainer } from "../../components/BaseContainer";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cadastroValidator } from "./cadastro.validator";
import { useToast } from "native-base";
import { ToastLayout } from "../../components/ToastLayout";
import { api } from "../../api";
import { useNavigation } from "@react-navigation/native";

export const Cadastro: React.FC = () => {
    const [loading, setLoad] = useState<boolean>(false)
    
    const toast = useToast();
    const navigation = useNavigation();
    
    const { control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(cadastroValidator),
        defaultValues: {
            email: '',
            password: '',
            confirm: '',
        }
    });

    const onSubmit = async(data: any) => {
        setLoad(true);
        try {
            const response = await api.post('users', {
                email: data.email,
                password: data.password,
            });

            navigation.goBack();
            
            toast.show({
                placement: "top-right",
                render: ({id}) => {
                    return ToastLayout.success({id, description: 'usuário cadastrado com sucesso!', close: toast.close})
                }
            })
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
            <Header title={'Cadastro'} />
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

                <Button title={'CADASTRAR'} loading={loading} onPress={handleSubmit(onSubmit)}/>
            </Container>
        </BaseContainer>
    )
}
