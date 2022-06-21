import React from "react";
import { Box, Container, Title, Text, ItemContainer, ActionColumn, Trash } from "./styles";
import { Header } from "../../components/Header";
import { ScrollView } from "react-native";
import { BaseContainer } from "../../components/BaseContainer";
import { formatNumber } from "../../utils/util";
import { useHistoricoStore } from "../../store/historico.store";

export const Historico: React.FC = () => {

    const historico = useHistoricoStore(state => state.historico);

    return (
        <BaseContainer>
            <Header title={'Histórico de Compras'} />
            <ScrollView>
                <Container>
                    <Box marginBottom={10}>
                        <Title>TÍTULO</Title>
                        <Title maxWidth={80} align={'right'}>VALOR</Title>
                    </Box>

                    {historico.map((item, index) => (
                        <ItemContainer key={`item-${item.jogoId}`} even={(index +1) %2 == 0}>
                            <Text>{item.titulo}</Text>
                            <Text maxWidth={80} align={'right'}>R$ {formatNumber(item.valor, 2)}</Text>
                        </ItemContainer>
                    ))}
                </Container>
            </ScrollView>
        </BaseContainer>
    )
}
