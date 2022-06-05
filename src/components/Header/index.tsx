import React from "react";
import { BKG, LeftContainer, RightContainer, Title, TitleContainer } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons'
import { PRIMARY } from "../../styles/colors";

interface HeaderProps {
    title?: string;
    backFalse?: boolean;
}

export const Header: React.FC<HeaderProps> = ({children, title, backFalse=false}) => {
    return (
        <BKG>
            <LeftContainer>
                {!backFalse&&(
                <FontAwesome5
                    name = {'chevron-left'}
                    size = {20}
                    color = {PRIMARY}
                    onPress = {() => {}}
                />)}
            </LeftContainer>
            <TitleContainer>
                {!!title ? (<Title>{title}</Title>) : (children)}
            </TitleContainer>
            <RightContainer></RightContainer>
        </BKG>
    )
}
