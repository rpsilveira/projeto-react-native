import React from "react";
import { BKG, LeftContainer, RightContainer, Title, TitleContainer } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons'
import { PRIMARY } from "../../styles/colors";

interface HeaderProps {
    title?: string;
}

export const Header: React.FC<HeaderProps> = ({children, title}) => {
    return (
        <BKG>
            <LeftContainer>
                <FontAwesome5
                    name = {'chevron-left'}
                    size = {20}
                    color = {PRIMARY}
                    onPress = {() => {}}
                />
            </LeftContainer>
            <TitleContainer>
                {!!title ? (<Title>{title}</Title>) : (children)}
            </TitleContainer>
            <RightContainer></RightContainer>
        </BKG>
    )
}
