import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image 
                style={{
                    width: "100%",
                    height: "50%"
                }}
                source={require('../assets/main.png')} 
            />
            <Text style={{
                fontWeight: "bold",
                fontSize: 18,
                letterSpacing: 3
            }}>Welcome to VCrypto</Text>
            <View style={{
                marginHorizontal: 40,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
                display: "flex"
            }}>
                <Text style={{
                    color: "gray",
                    fontWeight: "bold",
                    textAlign: "center",
                    letterSpacing: 1
                }}>Invest your vitual <Text style={{
                    color: "red",
                    fontWeight: "bold"
                }}>$100,000</Text> and compete with others</Text>
            </View>
            
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF"
    }
})
