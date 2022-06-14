import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Carrinho } from '../pages/Carrinho';
import { Listagem } from '../pages/Listagem';
import { Perfil } from '../pages/Perfil';
import color from 'color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BACKGROUND_COLOR, PRIMARY, SECONDARY } from '../styles/colors';
import { useCarrinhoStore } from '../store/carrinho.store';
import { View } from 'react-native';
import { Badge } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

export const TabsNavigation: React.FC = () => {

    const carrinho = useCarrinhoStore(state => state.carrinho)

    return(
        <Tab.Navigator
            initialRouteName={'Início'} 
            barStyle={{backgroundColor: SECONDARY}}
            activeColor={color(PRIMARY).darken(0.15).hex()}
            inactiveColor={BACKGROUND_COLOR}
        >
            <Tab.Screen name="Início" component={Listagem}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="Carrinho" component={Carrinho}
                options={{
                    tabBarLabel: 'Carrinho',
                    tabBarIcon: ({color}) => (
                        <View style={{flex: 1, justifyContent: 'center', alignItems:'center', position:'relative'}}>
                            <MaterialCommunityIcons name="cart" color={color} size={26} />
                            {carrinho.length > 0 &&(
                                <Badge size={20} style={{position: 'absolute', right: -8, top: -2}}>{carrinho.length}</Badge>
                            )}
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Perfil" component={Perfil}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
