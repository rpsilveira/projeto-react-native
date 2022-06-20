import React, { useEffect, useMemo, useState } from "react";
import { Box, Container, Image, Title, Text } from "./styles";
import { Header } from "../../components/Header";
import { DefaultButton } from "../../components/BaseButton";
import { ScrollView } from "react-native";
import { BaseContainer } from "../../components/BaseContainer";
import { useToast } from "native-base";
import { api } from "../../api";
import { ToastLayout } from "../../components/ToastLayout";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DetalhesScreenRouteProp } from "../../routes/PrivateNavigation";
import { formatNumber } from "../../utils/util";
import { useCarrinhoStore } from "../../store/carrinho.store";
import { useHistoricoStore } from "../../store/historico.store";

interface ItemsProps{
    id: number;
    img: string;
    name: string;
    description: string;
    value: number;
    type: string;
}

export const Detalhes: React.FC = () => {

    const [data, setData] = useState<ItemsProps|undefined>();
    const toast = useToast();
    const route = useRoute<DetalhesScreenRouteProp>();
    const navigation = useNavigation<any>();

    const addItem = useCarrinhoStore(state => state.addItem);
    const historico = useHistoricoStore(state => state.historico);

    const isMine = useMemo(
        () => !!data ? historico.map(itemHistorico => itemHistorico.jogoId).includes(data.id) : false
    ,[historico, data]);

    const addCart = () => {
        if (data) {
            addItem({
                jogoId: data.id,
                titulo: data.name,
                valor: data.value,
            })
        }
    }    

    const addAndGoToCart = () => {
        addCart();
        navigation.goBack();
        navigation.navigate('Carrinho');
    }

    const getData = async () => {
        try {
            const response = await api.get<ItemsProps>(`games/${route.params.id}`);
            if (!!response.data) {
                setData(response.data);
            }
        } catch(e: any) {
            toast.show({
                placement: "top-right",
                render: ({id}) => {
                    return ToastLayout.error({id, description: e.message, close: toast.close});
                }
            })
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <BaseContainer>
            <Header title={data?.name} />
            <ScrollView>
                {data?.img&&<Image source={{uri: data?.img}}/>}
                <Container>
                    <Box>
                        <Title>TIPO</Title>
                        <Text>{data?.type}</Text>
                    </Box>
                    <Box>
                        <Title>VALOR</Title>
                        <Text>R$ {formatNumber(data?.value, 2)}</Text>
                    </Box>
                    <Box>
                        <Title>DESCRIÇÃO</Title>
                        <Text>{data?.description}</Text>
                    </Box>
                    {!isMine&&(
                        <>
                            <DefaultButton title={'ADICIONAR AO CARRINHO'} onPress={addCart}/>
                            <DefaultButton title={'COMPRAR'} onPress={addAndGoToCart}/>
                        </>
                    )}
                </Container>
            </ScrollView>
        </BaseContainer>
    )
}
