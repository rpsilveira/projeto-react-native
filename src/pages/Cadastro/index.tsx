import { BACKGROUND_COLOR } from "../../styles/colors";
import { Button, Container } from "./styles";
import color from "color";
import { useState } from 'react'
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { BaseContainer } from "../../components/BaseContainer";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cadastroValidator } from "./cadastro.validator";

const PLACEHOLDER_COLOR = color(BACKGROUND_COLOR).lighten(0.5).hex();

export const Cadastro: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const { control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(cadastroValidator),
        defaultValues: {
            email: '',
            password: '',
            confirm: '',
        }
    });

    const onSubmit = async(data: any)  => {
        console.log(data);
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 3000))
        setLoading(false);
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
