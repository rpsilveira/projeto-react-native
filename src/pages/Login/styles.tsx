import styled from "styled-components/native";
import { DefaultButton } from "../../components/BaseButton";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 30px;
`
export const TitleBold = styled.Text`
    font-size: 30px;
    line-height: 30px;
    color: ${props => props.theme.colors.primary}
`
export const Title = styled.Text`
    font-size: 30px;
    line-height: 30px;
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 10px;
`
export const Button = styled(DefaultButton)`
    margin-top: 25px;
`
export const Switch = styled.Switch``

export const LabelSwitch = styled.Text`
    color: ${props => props.theme.colors.secondary};
    margin-left: 5px;
`
export const ContainerSwitch = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
`
export const Link = styled.Text`
    font-size: 18px;
    color: ${props => props.theme.colors.primary};
    align-self: flex-end;
    margin-top: 20px;
`
