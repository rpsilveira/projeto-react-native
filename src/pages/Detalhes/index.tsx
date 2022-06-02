import React from "react";
import { Box, Container, Image, Title, Text } from "./styles";
import { Header } from "../../components/Header";
import { DefaultButton } from "../../components/BaseButton";
import { ScrollView } from "react-native";

export const Detalhes: React.FC = () => {
    return (
        <>
            <Header title={'Nome do Game'}/>
            <ScrollView>
                <Image source={{uri: "https://cdn.akamai.steamstatic.com/steam/apps/1372880/header.jpg?t=1641323785"}} />
                <Container>
                    <Box>
                        <Title>TIPO</Title>
                        <Text>Ação</Text>
                    </Box>
                    <Box>
                        <Title>VALOR</Title>
                        <Text>R$ 35,55</Text>
                    </Box>
                    <Box>
                        <Title>DESCRIÇÃO</Title>
                        <Text>etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe 
                            etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe 
                            etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe 
                            etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe 
                            etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe 
                            etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe 
                            etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe etwerwwe 
                        </Text>
                    </Box>
                    <DefaultButton title={'ADICIONAR AO CARRINHO'} onPress={()=>{}}/>
                    <DefaultButton title={'COMPRAR'} onPress={()=>{}}/>
                </Container>
            </ScrollView>
        </>
    )
}
