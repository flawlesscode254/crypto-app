import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import AuthStack from './AuthStack'
import MainStack from './MainStack'

const AppStack = () => {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Main" component={MainStack} />
            <Stack.Screen name="Auth" component={AuthStack} />
        </Stack.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})
