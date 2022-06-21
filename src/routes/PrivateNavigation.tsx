import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Detalhes } from '../pages/Detalhes';
import { Historico } from '../pages/Historico';
import { TabsNavigation } from './TabsNavigation';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
    TabNav: undefined;
    Detalhes: {id: number};
    Historico: undefined;
}

export type DetalhesScreenRouteProp = RouteProp<RootStackParamList, 'Detalhes'>
export type HistoricoScreenRouteProp = RouteProp<RootStackParamList, 'Historico'>

const Stack = createNativeStackNavigator<RootStackParamList>();

export const PrivateNavigation: React.FC = () => {
    return(
        <Stack.Navigator
            initialRouteName={'TabNav'}
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="TabNav" component={TabsNavigation} />
            <Stack.Screen name="Detalhes" component={Detalhes} />
            <Stack.Screen name="Historico" component={Historico} />
        </Stack.Navigator>
    )
}