import React from "react";
import { ContainerCard, ImageCard, ItemTitle, ItemTitleBold } from "./styles";
import { DefaultButton } from "../../components/BaseButton";
import { NativeModules, LayoutAnimation, TouchableWithoutFeedback } from "react-native";
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
    addCard: (id: number) => void;
    goToDetail: (id: number) => void;
    setActive: (id?: number) => void;
    activeId?: number;
}

export const ButtonCard: React.FC<ButtonCardProps> = ({item, goToDetail, addCard, activeId, setActive}) => {
    
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
                            <ItemTitleBold> R$ {item.value.toFixed(2).toString().replace('.',',')} </ItemTitleBold>
                            <DefaultButton title={'DETALHES'} onPress={goToDetail as any}/>
                            <DefaultButton title={'+ CARRINHO'} onPress={addCard as any}/>
                        </ContainerCard>
                    </TouchableWithoutFeedback>
                )}
            </ImageCard>
        </TouchableWithoutFeedback>
    )
}
