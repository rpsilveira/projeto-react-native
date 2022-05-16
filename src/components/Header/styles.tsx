import styled from "styled-components/native";
import color from "color";

export const BKG = styled.SafeAreaView`
    background-color: ${props => color(props.theme.colors.background).darken(0.3).hex()};
    justify-content: center;
    width: 100%;
    height: 60px;
    flex-direction: row;
`
export const TitleContainer = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`
export const Title = styled.Text`
    color: ${props => props.theme.colors.secondary};
    font-size: 20px;
    text-align: center;
`
export const RightContainer = styled.View`
    min-width: 60px;
    min-height: 60px;
`
export const LeftContainer = styled.View`
    min-width: 60px;
    min-height: 60px;
    justify-content: center;
    align-items: center;
`
