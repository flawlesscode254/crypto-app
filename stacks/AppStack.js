import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import AuthStack from './AuthStack'
import MainStack from './MainStack'
import CoinDetails from '../pages/CoinDetails'
import PortfolioDetails from '../pages/PortfolioDetails'

const AppStack = () => {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Main" 
                component={MainStack} 
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Auth" 
                component={AuthStack}
                options={{
                    headerShown: false
                }} 
            />
            <Stack.Screen 
                name="CoinDetails" 
                component={CoinDetails} 
                options={{
                    title: "Stats"
                }}
            />
            <Stack.Screen 
                name="PortfolioDetails" 
                component={PortfolioDetails} 
                options={{
                    title: "Stats"
                }}
            />
        </Stack.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})
