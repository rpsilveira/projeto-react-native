import React from "react";
import { Box, Container, Title, Text, ItemContainer, ActionColumn, Trash } from "./styles";
import { Header } from "../../components/Header";
import { DefaultButton } from "../../components/BaseButton";
import { ScrollView } from "react-native";
import { BaseContainer } from "../../components/BaseContainer";

export const Carrinho: React.FC = () => {
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
                    <ItemContainer>
                        <ActionColumn maxWidth={71}>
                            <Trash name='trash-alt' size={20}/>
                        </ActionColumn>
                        <Text>nome do jogo 1</Text>
                        <Text maxWidth={80} align={'right'}>R$ 18,10</Text>
                    </ItemContainer>
                    <ItemContainer>
                        <ActionColumn maxWidth={71}>
                            <Trash name='trash-alt' size={20}/>
                        </ActionColumn>
                        <Text>nome do jogo 2</Text>
                        <Text maxWidth={80} align={'right'}>R$ 35,90</Text>
                    </ItemContainer>
                    <ItemContainer borderTop>
                        <Text noFlex>TOTAL</Text>
                        <Title marginLeft={10} noFlex>R$ 54,00</Title>
                    </ItemContainer>
                    <DefaultButton title={'FINALIZAR COMPRA'} onPress={()=>{}}/>
                </Container>
            </ScrollView>
        </BaseContainer>
    )
}
