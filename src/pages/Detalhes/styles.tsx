import styled from "styled-components/native";
import color from "color";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

export const Box = styled.View`
    padding: 10px;
    background-color: ${props => color(props.theme.colors.background).darken(0.3).hex()};
    align-self: stretch;
    margin: 5px 0;
    border-radius: ${props => props.theme.measure.radius}px;
`

export const LastBox = styled(Box)`
    margin-bottom: 20px;
`

export const Title = styled.Text`
    color: ${props => props.theme.colors.primary};
    font-size: 16px;
`

export const Text = styled.Text`
    color: ${props => props.theme.colors.secondary};
    font-size: 16px;
`

export const Image = styled.Image`
    width: 100%;
    height: 230px;
    resize-mode: cover;
`