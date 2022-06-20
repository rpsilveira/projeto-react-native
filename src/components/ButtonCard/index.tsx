import React, {memo, useMemo} from "react";
import { ContainerCard, ImageCard, ItemTitle, ItemTitleBold, Label } from "./styles";
import { DefaultButton } from "../../components/BaseButton";
import { NativeModules, LayoutAnimation, TouchableWithoutFeedback } from "react-native";
import { formatNumber } from "../../utils/util";
import { useHistoricoStore } from "../../store/historico.store";
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true)

interface ItemsProps{
    id: number;
    img: string;
    name: string;
    description: string;
    value: number;
    type: string;
}

interface ButtonCardProps{
    item: ItemsProps;
    addCart: (item: ItemsProps) => void;
    goToDetail: (id: number) => void;
    setActive: (id?: number) => void;
    activeId?: number;
}

const ButtonCardComponent: React.FC<ButtonCardProps> = ({item, goToDetail, addCart, activeId, setActive}) => {
    
    const historico = useHistoricoStore(state => state.historico);
    const changeActive = () => {
        LayoutAnimation.linear();
        
        if (activeId == item.id)
            setActive()
        else
            setActive(item.id)
    }

    const isMine = useMemo(() => historico.map(itemHistorico => itemHistorico.jogoId).includes(item.id), [historico]);

    return (
        <TouchableWithoutFeedback onPress={changeActive}>
            <ImageCard source={{uri: item.img}}>
                {isMine&&<Label>ADQUIRIDO</Label>}
                {activeId == item.id && (
                    <TouchableWithoutFeedback onPress={changeActive}>
                        <ContainerCard>
                            <ItemTitle ellipsizeMode={'tail'} numberOfLines={2}> {item.name} </ItemTitle>
                            <ItemTitleBold>R$ {formatNumber(item.value, 2)}</ItemTitleBold>
                            <DefaultButton title={'DETALHES'} onPress={() => goToDetail(item.id)}/>
                            {!isMine&&<DefaultButton title={'+ CARRINHO'} onPress={() => addCart(item as any)}/>}
                        </ContainerCard>
                    </TouchableWithoutFeedback>
                )}
            </ImageCard>
        </TouchableWithoutFeedback>
    )
}

export const ButtonCard = memo<ButtonCardProps>(ButtonCardComponent);
