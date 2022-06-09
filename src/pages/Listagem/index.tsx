import React, { useEffect, useState } from "react";
import style, { Container, Title, TitleBold } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { Header } from "../../components/Header";
import { FlatList } from "react-native";
import { ButtonCard } from "../../components/ButtonCard";
import { BaseContainer } from "../../components/BaseContainer";
import { api } from "../../api";
import { useToast } from "native-base";
import { ToastLayout } from "../../components/ToastLayout";

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
    const [list, setList] = useState<ItemsProps[]>([]);
    const toast = useToast();
    const navigation = useNavigation<any>();

    const getData = async () => {
        try {
            const response = await api.get('games');
            setList(response.data);
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
            <Header backFalse>
                <Title><TitleBold>My</TitleBold>Collection</Title>
            </Header>
            <Container>                
                <FlatList<ItemsProps>
                    renderItem={({item}) => (
                        <ButtonCard
                            item={item}
                            activeId={active}
                            setActive={setActive}
                            addCard={() => {}}
                            goToDetail={(id) => {
                                navigation.push('Detalhes', {id})
                            }}
                        />
                    )}
                    keyExtractor={(item) => `${item.id}`}
                    style={style.flatList}
                    numColumns={2}
                    data={list}
                />
            </Container>
        </BaseContainer>
    )
}
