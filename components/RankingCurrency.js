import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const PortfolioCurrency = ({ image, name, value, gain }) => {
    return (
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
                    source={image}
                />
                <View>
                    <Text style={{
                        fontWeight: "bold"
                    }}>{name}</Text>
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
                    color: Number(gain) > 0 ? "green" : "red",
                    fontWeight: "bold",
                    fontSize: 12
                }}>{Number(gain) > 0 ? ` + $${gain}` : ` - $${(Number(gain) * - 1)}`}</Text>
            </View>
        </View>
    )
}

export default PortfolioCurrency

const styles = StyleSheet.create({})
