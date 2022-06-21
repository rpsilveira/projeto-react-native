import React, { useMemo, useState } from "react";
import { Box, Container, Title, Text, ItemContainer, ActionColumn, Trash } from "./styles";
import { Header } from "../../components/Header";
import { DefaultButton } from "../../components/BaseButton";
import { ScrollView } from "react-native";
import { BaseContainer } from "../../components/BaseContainer";
import { ItemCarrinho, useCarrinhoStore } from "../../store/carrinho.store";
import { formatNumber } from "../../utils/util";
import { AlertDialog, Button, useToast } from "native-base";
import { useAuth } from "../../hooks/Auth.hooks";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../api";
import { ToastLayout } from "../../components/ToastLayout";
import { useHistoricoStore } from "../../store/historico.store";

export const Carrinho: React.FC = () => {

    const removeItemStore = useCarrinhoStore(state => state.removeItem);
    const carrinho = useCarrinhoStore(state => state.carrinho);
    const loadData = useHistoricoStore(state => state.loadData);
    const clear = useCarrinhoStore(state => state.clear);
    const [itemWillDeleted, setItemWillDeleted] = useState<ItemCarrinho|undefined>(undefined);
    const [load, setload] = useState<boolean>(false);
    const {user} = useAuth();
    const toast = useToast();
    const navigation = useNavigation<any>();
    const cancelRef = React.useRef(null);

    const onClose = () => setItemWillDeleted(undefined);

    const removeItem = (item:ItemCarrinho) => () => setItemWillDeleted(item);
    const confirmRemoveItem = () => {
        if (itemWillDeleted) {
            removeItemStore(itemWillDeleted.jogoId);
        }
        setItemWillDeleted(undefined);
    };

    const sendToBuy = async () => {
        setload(true);
        try{
            if (user) {
                const dt = new Date();
                await api.post('pedidos', {
                    userId: user.id,
                    userEmail: user.email,
                    total: total,
                    data: dt.toLocaleDateString(),
                    hora: dt.toLocaleTimeString(),
                    items: carrinho
                });
                loadData(user.id, user.email);
                setload(false);
                clear();
                navigation.navigate('Início');
                toast.show({
                    placement: "top-right",
                    render:({id}) => {
                        return ToastLayout.success({id, description: 'Compra realizada com sucesso', close: toast.close})
                    }
                })
            } else {
                setload(false);
                toast.show({
                    placement: "top-right",
                    render:({id}) => {
                        return ToastLayout.error({id, description: 'Não foi possivel realizar seu pedido, por favor relogue no sistema', close: toast.close})
                    }
                })
            }

        } catch (e: any) {
            setload(false);
            toast.show({
                placement: "top-right",
                render:({id}) => {
                    return ToastLayout.error({id, description: e.message, close: toast.close})
                }
            })
        }
    }

    const total = useMemo(
        () => [0, ...carrinho.map(item => item.valor)].reduce((primeiro, segundo) => (primeiro + segundo))
    , [carrinho]);

    return (
        <BaseContainer>
            <Header title={'Meu Carrinho'} backFalse />
            <ScrollView>
                <Container>
                    <Box marginBottom={10}>
                        <Title maxWidth={60}>AÇÃO</Title>
                        <Title>TÍTULO</Title>
                        <Title maxWidth={80} align={'right'}>VALOR</Title>
                    </Box>

                    {carrinho.map(item => (
                        <ItemContainer key={`item-${item.jogoId}`}>
                            <ActionColumn maxWidth={71}>
                                <Trash name='trash-alt' size={20} onPress={removeItem(item)}/>
                            </ActionColumn>
                            <Text>{item.titulo}</Text>
                            <Text maxWidth={80} align={'right'}>R$ {formatNumber(item.valor, 2)}</Text>
                        </ItemContainer>                       
                    ))}

                    <ItemContainer borderTop>
                        <Text noFlex>TOTAL</Text>
                        <Title marginLeft={10} noFlex>R$ {formatNumber(total, 2)}</Title>
                    </ItemContainer>
                </Container>
            
                {total > 0 &&(
                    <Container>
                        <DefaultButton title={'FINALIZAR COMPRA'} loading={load} onPress={sendToBuy}/>
                    </Container>
                )}
            </ScrollView>

            <AlertDialog leastDestructiveRef={cancelRef} isOpen={!!itemWillDeleted} onClose={onClose}>
                <AlertDialog.Content>
                    <AlertDialog.CloseButton />
                    <AlertDialog.Header>Confirmação</AlertDialog.Header>
                    <AlertDialog.Body>
                        Deseja Remover o Item: {itemWillDeleted?.titulo}
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                        <Button.Group space={2}>
                            <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                                Cancelar
                            </Button>
                            <Button colorScheme="danger" onPress={confirmRemoveItem}>
                                Remover
                            </Button>
                        </Button.Group>
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>
        </BaseContainer>
    )
}
