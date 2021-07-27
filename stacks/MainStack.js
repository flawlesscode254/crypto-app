import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

import HomeScreen from '../screens/HomeScreen'
import MarketScreen from '../screens/MarketScreen'
import ProfileScreen from '../screens/ProfileScreen'
import PortfolioScreen from '../screens/PortfolioScreen'
import RankingScreen from '../screens/RankingScreen'

const MainStack = () => {

    const Stack = createBottomTabNavigator()

    const tabBarOptions = {
        style: {
            backgroundColor: "#FFF",
            paddingBottom: 12,
            paddingTop: 12,
            height: 70
        }
    }

    const screenOptions = ({ route }) => ({
        tabBarIcon: ({ focused }) => {
            let iconName = "home"
    
            switch (route.name) {
                case "Home":
                    iconName = "home"
                    break;
                case "Market":
                    iconName = "trending-up"
                    break;
                case "Portfolio":
                    iconName = "pie-chart"
                    break;
                case "Ranking":
                    iconName = "bar-chart"
                    break;
                case "Profile":
                    iconName = "person-outline"
                    break;
    
                default:
                    iconName = "home"
            }
                return  <Ionicons name={iconName} size={24} color={focused ? "#4287f5" : "#a3a2a2"} />
        }
      })

    return (
        <Stack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
            <Stack.Screen 
                name="Home" 
                component={HomeScreen}
            />
            <Stack.Screen 
                name="Portfolio" 
                component={PortfolioScreen}
            />
            <Stack.Screen 
                name="Market" 
                component={MarketScreen}
            />
            <Stack.Screen 
                name="Ranking" 
                component={RankingScreen} 
            />
            <Stack.Screen 
                name="Profile" 
                component={ProfileScreen}
            />
        </Stack.Navigator>
    )
}

export default MainStack

const styles = StyleSheet.create({})