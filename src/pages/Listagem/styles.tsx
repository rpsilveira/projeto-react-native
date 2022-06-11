import styled from "styled-components/native";
import { StyleSheet } from 'react-native';

export const Container = styled.View`
    flex: 1;
    padding: 20px;
`
export const Title = styled.Text`
    font-size: 20px;
    color: ${props => props.theme.colors.secondary};
`
export const TitleBold = styled.Text`
    font-size: 20px;
    color: ${props => props.theme.colors.primary}
`

export default StyleSheet.create({
    flatList: {
        flex: 1
    }
})
