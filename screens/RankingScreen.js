import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Currency from '../components/RankingCurrency'

const MarketScreen = () => {
    return (
        <View style={{
            flex: 1,
            marginTop: 30
        }}>
            <Image 
                style={{
                    width: "100%",
                    height: "40%"
                }}
                source={require('../assets/goals.png')}
            />
            <View style={{
                marginVertical: 20,
                marginHorizontal: 20,
                alignItems: "center"
            }}>
                <Text style={{
                    fontSize: 17,
                    letterSpacing: 2,
                    fontWeight: "bold"
                }}>Rankings</Text>
            </View> 

            <ScrollView style={{
                backgroundColor: "#FFF"
            }}>
                <Currency 
                    image={require('../assets/profile.png')}
                    name="Duncan Kipkemoi"
                    value="69.420"
                    gain="2.7"
                />
                <Currency 
                    image={require('../assets/profile.png')}
                    name="Duncan Kipkemoi"
                    value="35,000"
                    gain="-2.7"
                />
                <Currency 
                    image={require('../assets/profile.png')}
                    name="Duncan Kipkemoi"
                    value="10,000"
                    gain="2.7"
                />
                <Currency 
                    image={require('../assets/profile.png')}
                    name="Duncan Kipkemoi"
                    value="69.420"
                    gain="-2.7"
                />
                <Currency 
                    image={require('../assets/profile.png')}
                    name="Duncan Kipkemoi"
                    value="69.420"
                    gain="2.7"
                />
                <Currency 
                    image={require('../assets/profile.png')}
                    name="Duncan Kipkemoi"
                    value="69.420"
                    gain="-2.7"
                />
            </ScrollView>

        </View>
        
    )
}

export default MarketScreen

const styles = StyleSheet.create({})
