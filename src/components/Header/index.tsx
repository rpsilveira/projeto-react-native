import React from "react";
import { BKG, LeftContainer, RightContainer, Title, TitleContainer } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons'
import { PRIMARY } from "../../styles/colors";
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title?: string;
    backFalse?: boolean;
}

export const Header: React.FC<HeaderProps> = ({children, title, backFalse=false}) => {

    const navigation = useNavigation<any>();

    return (
        <BKG>
            <LeftContainer>
                {!backFalse&&(
                <FontAwesome5
                    name = {'chevron-left'}
                    size = {20}
                    color = {PRIMARY}
                    onPress = {navigation.goBack}
                />)}
            </LeftContainer>
            <TitleContainer>
                {!!title ? (<Title>{title}</Title>) : (children)}
            </TitleContainer>
            <RightContainer></RightContainer>
        </BKG>
    )
}
