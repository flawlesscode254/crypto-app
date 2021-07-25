import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'

const PortfolioCurrency = ({ image, name, label, value }) => {

    const navigation = useNavigation()

    const goTo = () => {
        navigation.navigate("PortfolioDetails")
    }

    return (
        <TouchableOpacity onPress={goTo}>
            <View style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                marginHorizontal: 20,
                marginBottom: 10,
                marginTop: 10
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Image 
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 999,
                            marginRight: 20
                        }}
                        source={{ uri: image }}
                    />
                    <View>
                        <Text style={{
                            fontWeight: "bold"
                        }}>{name}</Text>
                        <Text style={{
                            color: "gray"
                        }}>{label}</Text>
                    </View>
                </View>
                <View style={{
                    justifyContent: "flex-end",
                    alignItems: "flex-end"
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold"
                    }}>{`$ ${value}`}</Text>
                    <Text style={{
                        color: "gray",
                        fontWeight: "bold"
                    }}>{`$ ${value}`}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PortfolioCurrency

const styles = StyleSheet.create({})
