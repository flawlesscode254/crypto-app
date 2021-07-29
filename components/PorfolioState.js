import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import db, {auth} from '../firebase'

const PorfolioState = ({ time, nature, buying_price, bitcoin_bought, money_spent }) => {
    const [current, setCurrent] = useState()
    const [next, setNext] = useState();

    useEffect(() => {
        (() => {
          setInterval(async () => {
            const response = await fetch(
              "https://api.coindesk.com/v1/bpi/currentprice.json"
            );
            const json = await response.json();
            await setNext(json.bpi.USD.rate_float);
          }, 1000);
        })();
      }, []);

    useEffect(() => {
        db.collection("users").where("email", "==", auth?.currentUser?.email).onSnapshot((snapshot) => {
            snapshot.docs.forEach(doc => {
                setCurrent(doc.data().amount)
            })
        })
    }, [])

    return (
      <View
      style={{
        marginHorizontal: 10,
        marginTop: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 7,
        marginBottom: 10,
        backgroundColor: "#d5dbd6"
      }}
    >
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
      <Text
        style={{
          fontSize: 10,
          color: "black",
        }}
      >
        {new Date(time?.toDate()).toDateString() + ' ' + ' '} <Text style={{color: "black"}}>{new Date(time?.toDate()).toLocaleTimeString()}</Text>
      </Text>
        <TouchableOpacity 
        style={{
            backgroundColor: "red",
            borderRadius: 15,
            paddingHorizontal: 15,
            paddingVertical: 5,
            alignItems: 'center',
            justifyContent: "center"
        }}
        >
            <Text style={{
                color: "#FFF",
                fontWeight: "bold"
            }}>Close</Text>
        </TouchableOpacity>
        </View>
      <Text
          style={{
            color: nature === "buy" ? "green" : "red",
            fontWeight: "bold",
            letterSpacing: 4
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
              color: "blue",
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
              color: "blue",
            }}
          >
            Buying price
          </Text>
          <Text>{`$ ${buying_price}`}</Text>
        </View>
        <View>
          <Text
            style={{
              color: "blue",
            }}
          >
            Money Spent
          </Text>
          <Text>{`$ ${money_spent}`}</Text>
        </View>
      </View>
            {next ? (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 5
        }}>
            <View>
                <Text style={{
                    color: "blue"
                }}>Amount change</Text>
                <Text style={{
                    color: (((((((Number(next) - Number(buying_price.replace(/\$|,/g, ""))) / Number(buying_price.replace(/\$|,/g, ""))) * 100) + 100) / 100) * Number(money_spent)) - Number(money_spent)).toFixed(2) > 0 ? "green" : "red"
                }}>{`$ ${(((((((Number(next) - Number(buying_price.replace(/\$|,/g, ""))) / Number(buying_price.replace(/\$|,/g, ""))) * 100) + 100) / 100) * Number(money_spent)) - Number(money_spent)).toFixed(2)}`}</Text>
            </View>
            <View>
                <Text style={{
                    color: "blue"
                }}>Total income</Text>
                <Text style={{
                  color: "black"
                }}>{`$ ${((((((Number(next) - Number(buying_price.replace(/\$|,/g, ""))) / Number(buying_price.replace(/\$|,/g, ""))) * 100) + 100) / 100) * Number(money_spent)).toFixed(2)}`}</Text>
            </View>
            <View>
                <Text style={{
                    color: "blue"
                }}>Percentage change</Text>
                <Text style={{
                    color: (((Number(next) - Number(buying_price.replace(/\$|,/g, ""))) / Number(buying_price.replace(/\$|,/g, ""))) * 100).toFixed(2) > 0 ? "green" : "red"
                }}>{`${(((Number(next) - Number(buying_price.replace(/\$|,/g, ""))) / Number(buying_price.replace(/\$|,/g, ""))) * 100).toFixed(2)} %`}</Text>
            </View>
        </View>
        ) : (
          <ActivityIndicator size="large" color="green" />
        )}
    </View>
    )
}

export default PorfolioState

const styles = StyleSheet.create({})
