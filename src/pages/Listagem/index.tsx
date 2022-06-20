import React, { useCallback, useEffect, useState } from "react";
import style, { Container, Title, TitleBold } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { Header } from "../../components/Header";
import { ActivityIndicator, FlatList } from "react-native";
import { ButtonCard } from "../../components/ButtonCard";
import { BaseContainer } from "../../components/BaseContainer";
import { api } from "../../api";
import { useToast } from "native-base";
import { ToastLayout } from "../../components/ToastLayout";
import { useCarrinhoStore } from "../../store/carrinho.store";
import { PRIMARY } from "../../styles/colors";
import { BUTTON_CARD_HEIGHT } from "../../components/ButtonCard/styles";

interface ItemsProps{
    id: number;
    img: string;
    name: string;
    description: string;
    value: number;
    type: string;
}

export const Listagem: React.FC = () => {

    const [active, setActive] = useState<number>();
    const [page, setPage] = useState<number>(1);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [list, setList] = useState<ItemsProps[]>([]);
    const [last, setLast] = useState<boolean>(false);
    const toast = useToast();
    const navigation = useNavigation<any>();
    const addItem = useCarrinhoStore(state => state.addItem);
    
    const getData = async (pageNumber: number = 1) => {
        if (!last) {
            try {
                setPage(pageNumber);
                const response = await api.get('games', {
                    params: {
                        _page: pageNumber,
                        _limit: 6,
                    }
                });
                if (pageNumber == 1) {
                    setList(response.data);    
                } else {
                    setList(atual => [...atual, ...response.data]);
                }

                if (response.data.length == 0) {
                    setLast(true);
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
    }

    const updateDate = async () => {
        if (!last) {
            setLoading(true);
            await getData(page +1);
            setLoading(false);
        }
    }

    const reset = async () => {
        setRefreshing(true);
        setLast(false);
        await getData();
        setRefreshing(false);
    }

    const addCart = useCallback((item: ItemsProps) => {
        addItem({
            jogoId: item.id,
            titulo: item.name,
            valor: item.value,
        })
    }, [addItem]);

    const renderItem = useCallback(({item}) => (
        <ButtonCard
            item={item}
            activeId={active}
            setActive={setActive}
            addCart={addCart}
            goToDetail={(id) => {
                navigation.navigate('Detalhes', {id})
            }}
        />
    ), [active, setActive, addCart, navigation.navigate]);

    useEffect(() => {
        getData();
    }, []);

    return (
        <BaseContainer>
            <Header backFalse>
                <Title><TitleBold>My</TitleBold>Collection</Title>
            </Header>
            <Container>                
                <FlatList<ItemsProps>
                    renderItem={renderItem}
                    keyExtractor={(item) => `${item.id}`}
                    style={style.flatList}
                    numColumns={2}
                    data={list}
                    refreshing={refreshing}
                    onRefresh={reset}
                    onEndReached={updateDate}
                    ListFooterComponent={() => {
                        if (loading) {
                            return (<ActivityIndicator size={'large'} color={PRIMARY} />)
                        } else {
                            return null;
                        }
                    }}
                    getItemLayout={(data, index) => (
                        {length: BUTTON_CARD_HEIGHT, offset: BUTTON_CARD_HEIGHT * index, index}
                    )}
                />
            </Container>
        </BaseContainer>
    )
}
