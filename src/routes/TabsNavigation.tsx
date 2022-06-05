import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Carrinho } from '../pages/Carrinho';
import { Listagem } from '../pages/Listagem';
import { Perfil } from '../pages/Perfil';
import color from 'color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BACKGROUND_COLOR, PRIMARY, SECONDARY } from '../styles/colors';

const Tab = createMaterialBottomTabNavigator();

export const TabsNavigation: React.FC = () => {
    return(
        <Tab.Navigator
            initialRouteName={'Home'} 
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
                        <MaterialCommunityIcons name="cart" color={color} size={26} />
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