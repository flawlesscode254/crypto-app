import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Currency from '../components/MarketCurrency'

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
                source={require('../assets/market.png')}
            />
            <View style={{
                marginVertical: 20,
                marginHorizontal: 20,
                alignItems: "center"
            }}>
                <Text style={{
                    fontSize: 17,
                    letterSpacing: 2
                }}>Market</Text>
            </View> 

            <ScrollView style={{
                backgroundColor: "#FFF"
            }}>
                <Currency 
                    image={"https://www.ebuyer.com/blog/wp-content/uploads/2013/11/bitcoin-logo-1000_0.jpg"}
                    name="Bitcoin"
                    label="BTC"
                    value="35,000"
                    rate="-2.7"
                />
            </ScrollView>

        </View>
        
    )
}

export default MarketScreen

const styles = StyleSheet.create({})
