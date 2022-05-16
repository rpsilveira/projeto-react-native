import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
    color: ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.primary};
    padding: 10px 20px;
    border-radius: ${props => props.theme.measure.radius}px;
    margin: 5px 0;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    flex-direction: row;
`
export const ButtonTitle = styled.Text`
    color: ${props => props.theme.colors.background};
    font-weight: bold;
`
export const LoadingIndicator = styled.ActivityIndicator`
    margin: 0 5px;
`
