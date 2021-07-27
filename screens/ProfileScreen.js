import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { auth } from "../firebase"
import { useNavigation } from '@react-navigation/core'

const ProfileScreen = () => {
    const navigation = useNavigation()

    const signOut = () => {
        auth.signOut().then(() => navigation.navigate("Auth"))
    }

    return (
        <View style={styles.container}>
            <Image 
                style={{
                    width: "100%",
                    height: "50%"
                }}
                source={require('../assets/profile.png')}
            />
            <Text style={{
                letterSpacing: 5,
                fontSize: 20,
                color: "#04198f",
                fontWeight: "bold"
            }}>Duncan Kipkemoi</Text>
            <Text style={{
                marginTop: 10,
                color: "#eb7a34"
            }}>duncanii414@gmail.com</Text>
            <View style={{
                flexDirection: "row",
                marginTop: 10
            }}>
                <Text style={{
                    marginRight: 30,
                    fontWeight: "bold"
                }}>$ 150,000</Text>
                <Text style={{
                    color: "green",
                    fontWeight: "bold"
                }}>+ $ 50,000</Text>
            </View>
            
            <View style={{
                marginHorizontal: 100,
                position: "absolute",
                bottom: 30,
                left: 0,
                right: 0
            }}>
                <TouchableOpacity onPress={signOut} style={{
                    paddingTop: 10,
                    borderRadius: 7,
                    backgroundColor: "red",
                    paddingBottom: 10,
                    paddingHorizontal: 40,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        color: "#FFF",
                        letterSpacing: 2
                    }}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF"
    }
})
