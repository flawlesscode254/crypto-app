import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PorfolioState = ({ time, nature, buying_price, bitcoin_bought, money_spent }) => {
    return (
      <View
      style={{
        marginHorizontal: 10,
        marginTop: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 7
      }}
    >
      <Text
        style={{
          fontSize: 10,
          color: "black",
        }}
      >
        {new Date(time?.toDate()).toDateString() + ' ' + ' '} <Text style={{color: "black"}}>{new Date(time?.toDate()).toLocaleTimeString()}</Text>
      </Text>
      <Text
          style={{
            color: "green",
            fontWeight: "bold",
          }}
        >
          {nature}
        </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 5
        }}
      >
        <View>
          <Text
            style={{
              color: "red",
            }}
          >
            Bitcoin bought
          </Text>
          <Text style={{
              color: "black"
          }}>{`${bitcoin_bought} BTC`}</Text>
        </View>
        <View>
          <Text
            style={{
              color: "red",
            }}
          >
            Buying price
          </Text>
          <Text>{`$ ${buying_price}`}</Text>
        </View>
        <View>
          <Text
            style={{
              color: "red",
            }}
          >
            Money Spent
          </Text>
          <Text>{`$ ${money_spent}`}</Text>
        </View>
      </View>

        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 5
        }}>
            <View>
                <Text style={{
                    color: "red"
                }}>Initial amount</Text>
                <Text>$ 100000</Text>
            </View>
            <View>
                <Text style={{
                    color: "red"
                }}>Amount change</Text>
                <Text>$23</Text>
            </View>
            <View>
                <Text style={{
                    color: "red"
                }}>Percentage change</Text>
                <Text>2.3%</Text>
            </View>
        </View>

    </View>
    )
}

export default PorfolioState

const styles = StyleSheet.create({})
