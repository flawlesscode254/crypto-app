import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import SignUpScreen from '../screens/SignUpScreen'
import SignInScreen from '../screens/SignInScreen'

const AuthStack = () => {

    const Stack = createStackNavigator()

    return (
       <Stack.Navigator headerMode="none">
           <Stack.Screen name="SignIn" component={SignInScreen} />
           <Stack.Screen name="SignUp" component={SignUpScreen} />
       </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})
