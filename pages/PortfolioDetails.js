import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

const CoinDetails = () => {
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{
                flexDirection: "row",
                marginVertical: 10,
                marginHorizontal: 10
            }}>
                <Image 
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 999,
                        marginRight: 20
                    }}
                    source={{ uri: "https://www.ebuyer.com/blog/wp-content/uploads/2013/11/bitcoin-logo-1000_0.jpg" }}
                />
                <View style={{
                    alignItems: "flex-start",
                    justifyContent: "center"
                }}>
                    <Text style={{
                        fontWeight: "bold"
                    }}>Bitcoin</Text>
                    <Text style={{
                        color: "gray"
                    }}>BTC</Text>
                </View>
            </View>


            <View style={{
                justifyContent: "center",
                alignItems: "center"
            }}>
                <LineChart
                    data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                        ]
                        }
                    ]
                    }}
                    width={Dimensions.get("window").width - 20} // from react-native
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                    }}
                    bezier
                    style={{
                    marginVertical: 8,
                    borderRadius: 16
                    }}
                />
            </View>


            <View style={{
                marginHorizontal: 10,
                marginVertical: 5,
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
                marginTop: 10
            }}>

                <View>
                    <Text style={{
                        fontSize: 12
                    }}>Current</Text>
                    <Text style={{
                        fontWeight: "bold",
                        letterSpacing: 2,
                        color: "black"
                    }}>$62.40</Text>
                </View>

                <View style={{
                    flexDirection: "row"
                }}>
                    <View style={{
                        marginRight: 15
                    }}>
                        <Text style={{
                            fontSize: 12
                        }}>1 hour</Text>
                        <Text style={{
                            fontWeight: "bold",
                            letterSpacing: 2,
                            color: "green"
                        }}>+2.0%</Text>
                    </View>
                    <View style={{
                        marginRight: 15
                    }}>
                        <Text style={{
                            fontSize: 12
                        }}>1 day</Text>
                        <Text style={{
                            fontWeight: "bold",
                            letterSpacing: 2,
                            color: "green"
                        }}>+2.0%</Text>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 12
                        }}>7 days</Text>
                        <Text style={{
                            fontWeight: "bold",
                            letterSpacing: 2,
                            color: "red"
                        }}>-1.2%</Text>
                    </View>
                </View>
                
            </View>


            <View style={{
                marginHorizontal: 10,
                marginVertical: 10,
                borderBottomWidth: 1,
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                paddingBottom: 10
            }}>
                <Text>Position</Text>
                <TouchableOpacity style={{
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    borderRadius: 5,
                    backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{
                        color: "#FFF",
                        fontWeight: "bold",
                        letterSpacing: 2
                    }}>Close order</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                marginHorizontal: 10,
                flexDirection: 'row',
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>
                <Text style={{
                    color: "green",
                    fontWeight: "bold"
                }}>Buy</Text>
                <View>
                    <Text>Buy at</Text>
                    <Text>123.00</Text>
                </View>
                <View>
                    <Text>Take Profit</Text>
                    <Text>128.00</Text>
                </View>
                <View>
                    <Text>Take Loss</Text>
                    <Text>120.00</Text>
                </View>
            </View>
        </View>
    )
}

export default CoinDetails

const styles = StyleSheet.create({})
