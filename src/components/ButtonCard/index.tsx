import React, {memo} from "react";
import { ContainerCard, ImageCard, ItemTitle, ItemTitleBold } from "./styles";
import { DefaultButton } from "../../components/BaseButton";
import { NativeModules, LayoutAnimation, TouchableWithoutFeedback } from "react-native";
import { formatNumber } from "../../utils/util";
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
    
    const changeActive = () => {
        LayoutAnimation.linear();
        
        if (activeId == item.id)
            setActive()
        else
            setActive(item.id)
    }
    
    return (
        <TouchableWithoutFeedback onPress={changeActive}>
            <ImageCard source={{uri: item.img}}>
                {activeId == item.id && (
                    <TouchableWithoutFeedback onPress={changeActive}>
                        <ContainerCard>
                            <ItemTitle ellipsizeMode={'tail'} numberOfLines={2}> {item.name} </ItemTitle>
                            <ItemTitleBold>R$ {formatNumber(item.value, 2)}</ItemTitleBold>
                            <DefaultButton title={'DETALHES'} onPress={() => goToDetail(item.id)}/>
                            <DefaultButton title={'+ CARRINHO'} onPress={() => addCart(item as any)}/>
                        </ContainerCard>
                    </TouchableWithoutFeedback>
                )}
            </ImageCard>
        </TouchableWithoutFeedback>
    )
}

export const ButtonCard = memo<ButtonCardProps>(ButtonCardComponent);
