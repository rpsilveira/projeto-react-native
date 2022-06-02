import styled, {css} from "styled-components/native";
import { FontAwesome5 } from '@expo/vector-icons'
import color from "color";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

interface BoxProps {
    marginBottom?: number;
}

export const Box = styled.View<BoxProps>`
    padding: 10px;
    background-color: ${props => color(props.theme.colors.background).darken(0.3).hex()};
    align-self: stretch;
    margin: 5px 0;
    margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 5)}px;
    border-radius: ${props => props.theme.measure.radius}px;
    flex-direction: row;
`

interface TitleProps {
    maxWidth?: number;
    align?: string;
    noFlex?: boolean;
    marginLeft?:number;
}

export const Title = styled.Text<TitleProps>`
    color: ${props => props.theme.colors.primary};
    font-size: 16px;
    margin-left: ${props => props.marginLeft?props.marginLeft:0}px;
    ${props => (!props.noFlex&&css`
        flex: 1;
    `)};
    ${props => (props.maxWidth&&css`
        max-width: ${props.maxWidth}px;
    `)};
    text-align: ${props => (props.align ? props.align: 'left')};
`

interface ItemContainerProps{
    borderTop?:boolean;
}

export const ItemContainer = styled.View<ItemContainerProps>`
    align-self: stretch;
    justify-content: center;
    align-content: center;
    margin: 1px 0;
    flex-direction: row;
    ${props=>(props.borderTop&&css`
        border-top-width: 3px;
        margin-top: 10px;
        margin-bottom: 20px;
        padding: 6px 0;
        justify-content: flex-end;
        align-items: center;
        border-top-color: ${props => color(props.theme.colors.background).darken(0.3).hex()};
    `)};
`

interface TextProps {
    maxWidth?: number;
    align?: string;
    noFlex?:boolean;
}

export const Text = styled.Text<TextProps>`
    font-size: 16px;
    color: ${props => props.theme.colors.secondary};
    ${props=>(!props.noFlex&&css`
        flex: 1;
    `)};
    ${props => (props.maxWidth&&css`
        max-width: ${props.maxWidth}px;
    `)};
    text-align: ${props => props.align?props.align:'left'};
`

interface ActionColumnProps {
    maxWidth?: number;
}

export const ActionColumn = styled.View<ActionColumnProps>`
    flex: 1;
    ${props => (props.maxWidth&&css`
        max-width: ${props.maxWidth}px;
    `)};
    padding-right: 10px;
    justify-content: center;
    align-items: center;
`

export const Trash = styled(FontAwesome5)`
    color: ${props => props.theme.colors.danger};
`