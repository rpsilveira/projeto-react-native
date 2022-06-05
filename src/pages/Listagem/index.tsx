import React, { useState } from "react";
import style, { Container, Title, TitleBold } from "./styles";
import { Header } from "../../components/Header";
import { FlatList } from "react-native";
import { ButtonCard } from "../../components/ButtonCard";

interface ItemsProps{
    id: number;
    img: string;
    name: string;
    description: string;
    value: number;
    type: string;
}

export const Listagem: React.FC = () => {

    const [active, setActive] = useState<number>(0);

    return (
        <>
            <Header backFalse>
                <Title><TitleBold>My</TitleBold>Collection</Title>
            </Header>
            <Container>                
                <FlatList<ItemsProps>
                    renderItem={({item}) => (
                        <ButtonCard item={item} activeId={active} setActive={setActive} addCard={() => {}} goToDetail={() => {}}/>
                    )}
                    keyExtractor={(item) => `${item.id}`}
                    style={style.flatList}
                    numColumns={2}
                    data={[
                        {
                            "id": 1,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/349040/header.jpg?t=1611701005",
                            "name": "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
                            "description": "A última criação da aclamada série STORM leva você para uma aventura intensa e impressionante. Aproveite o sistema de batalha totalmente reformulado e prepare-se para mergulhar nas lutas mais épicas que você já viu na série NARUTO SHIPPUDEN: Ultimate Ninja STORM!",
                            "value": 79,
                            "type": "indie"
                          },
                          {
                            "id": 2,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/851850/header.jpg?t=1639674705",
                            "name": "DRAGON BALL Z: KAKAROT",
                            "description": "Vivencie a história de DRAGON BALL Z desde eventos épicos a missões secundárias bem divertidas, incluindo momentos inéditos que explicam alguns fatos da história de DRAGON BALL revelados pela primeira vez!\n\n\n• Jogue batalhas icônicas do DRAGON BALL Z em uma escala diferente de qualquer outra. Lute em vastos campos de batalha com ambientes destrutíveis e vivencie batalhas épicas com chefes que testarão os limites de suas habilidades de combate. Aumente seu nível de poder e enfrente o desafio!\n\n\n• Não lute apenas como um Lutador Z. Viva como eles! Pesque, voe, coma, treine e lute através das sagas de DRAGON BALL Z, fazendo amigos e construindo relacionamentos com um elenco enorme de personagens.\n\nViva novamente a história de Goku e outros Guerreiros Z em DRAGON BALL Z: KAKAROT! Além das batalhas épicas, sinta como é a vida no mundo de DRAGON BALL Z lutando, pescando, comendo e treinando com Goku, Gohan, Vegeta e outros. Explore novas áreas e aventuras: avance pela história e forme vínculos com outros heróis de DRAGON BALL Z.",
                            "value": 81.68,
                            "type": "indie"
                          },
                          {
                            "id": 3,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/268910/header.jpg?t=1589281999",
                            "name": "Cuphead",
                            "description": "Cuphead é um jogo de ação e tiros clássico, com enorme ênfase nas batalhas de chefes. Inspirado nas animações infantis da década de 1930, os visuais e efeitos sonoros foram minuciosamente recriados com as mesmíssimas técnicas dessa era, com destaque para desenhos feitos à mão, fundos em aquarela e gravações originais de jazz.\n\nJogue como Cuphead ou Mugman (nos modos um só jogador ou cooperativo) e atravesse mundos estranhos, adquira novas armas, aprenda supergolpes potentes e descubra segredos ocultos, tudo isso enquanto tenta pagar a dívida que você fez com o diabo!",
                            "value": 89.14,
                            "type": "aventura"
                          }
                    ]}
                />
            </Container>
        </>
    )
}
