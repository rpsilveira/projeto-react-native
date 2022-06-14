import styled, {css} from "styled-components/native";
import color from 'color'

export const InputElement = styled.TextInput<InputProps>`
    align-self: stretch;
    flex: 1;
    background-color: ${props => color(props.theme.colors.background).darken(0.25).hex()};
    color: ${props => props.theme.colors.secondary};
`

interface InputContainerProps {
    error?: boolean
}

export const InputContainer = styled.View<InputContainerProps>`
    align-self: stretch;
    background-color: ${props => color(props.theme.colors.background).darken(0.25).hex()};
    padding: 10px 20px;
    margin: 5px 0;
    min-height: 46px;
    border-radius: ${props => props.theme.measure.radius}px;
    flex-direction: row;
    ${props => props.error && css`
        border-width: 1px;
        border-color: ${props.theme.colors.danger};
    `}
`
export const ErrorText = styled.Text`
    align-self: stretch;
    color: ${props => props.theme.colors.danger};
`
