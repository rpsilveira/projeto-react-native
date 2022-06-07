import styled from "styled-components/native";
import {css} from "styled-components/native";
import color from "color";
import { DefaultButton } from "../../components/BaseButton";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 30px;
`
interface InputProps {
    hasIconRight?: boolean;
}

export const Input = styled.TextInput<InputProps>`
    align-self: stretch;
    flex: 1;
    background-color: ${props => color(props.theme.colors.background).darken(0.25).hex()};
    color: ${props => props.theme.colors.secondary};
    ${props => props.hasIconRight&&css`
        margin-right: 20px;
    `};
`

interface InputContainerProps{
    error?: boolean
}

export const ContainerInput = styled.View<InputContainerProps>`
    align-self: stretch;
    background-color: ${props => color(props.theme.colors.background).darken(0.25).hex()};
    padding: 10px 20px;
    margin: 5px 0;
    border-radius: ${props => props.theme.measure.radius}px;
    flex-direction: row;
    ${props => props.error&&css`
        border-width: 3px;
        border-color: ${props.theme.colors.danger};
    `};
`
export const Button = styled(DefaultButton)`
    margin-top: 25px;
`
