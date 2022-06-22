import React, { useState } from 'react';
import { ErrorText, InputContainer, InputElement } from './styles';
import { TextInputProps } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { PLACEHOLDER_COLOR } from '../../styles/colors';

interface InputProps extends TextInputProps {
    error?: string;
    search?: boolean;
    clearInput?: () => void;
}

export const Input:React.FC<InputProps> = ({children, secureTextEntry=false, search=false, error, clearInput, ...rest}) => {
    const [securety, setSecurety] = useState<boolean>(secureTextEntry)
    const changeSecure = () => setSecurety(sec => !sec);

    return (
        <>
            <InputContainer error={!!error}>
                {search&&<FontAwesome5 name={'search'} size={26} color={PLACEHOLDER_COLOR} style={{marginRight:5}} />}
                <InputElement {...rest as any} secureTextEntry={securety} />
                {secureTextEntry&&<FontAwesome5 name={`eye${securety?'-slash':''}`} size={26} color={PLACEHOLDER_COLOR} onPress={changeSecure} />}
                {!!clearInput&&<FontAwesome5 name={'times'} size={26} color={PLACEHOLDER_COLOR} style={{marginLeft:5}} onPress={clearInput} />}
            </InputContainer>
            {!!error&&(<ErrorText>{error}</ErrorText>)}
        </>
    )
}
