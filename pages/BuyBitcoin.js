import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { auth } from "../firebase";

const CoinDetails = () => {
  const [val, setVal] = useState();
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState()
  const [final, setFinal] = useState(0)

  const doStuff = async (text) => {
        await setAmount(text.replace(/\$|,/g, ''))
    }
    
   const calculate = () => {
    setFinal((Number(amount) / Number(val)).toFixed(8))
  }

  useEffect(() => {
    (() => {
      setInterval(async () => {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const json = await response.json();
        await setPrice(json.bpi.USD.rate);
        await setVal(json.bpi.USD.rate_float);
      }, 1000);
    })();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFFF",
      }}
    >
        <KeyboardAvoidingView
            behavior="padding"
            style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFF"
            }}
            keyboardVerticalOffset={90}
        >
            <Text style={{
                color: "black",
                marginTop: 10
            }}>Portflio balance</Text>
            <Text style={{
                color: "red"
            }}>{`$ ${(auth?.currentUser?.photoURL).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</Text>
      <Text
        style={{
          marginTop: 20,
          color: "black",
          fontWeight: "bold",
          fontSize: 20,
          letterSpacing: 2,
        }}
      >
        Buy Bitcoin
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: "red",
          marginTop: 5,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: "gray",
          }}
        >
          1BTC ={" "}
        </Text>
        {`$${price}`}{" "}
      </Text>

      <View
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              marginBottom: 5,
            }}
          >
            BTC:
          </Text>
          <TextInput
            editable={false}
            value={final.toString()}
            style={{
                borderColor: "black",
                borderWidth: 0.5,
                width: 150,
                paddingLeft: 10,
                height: 40,
                color: "black",
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 30,
            color: "black",
            marginRight: 20,
          }}
        >
          =
        </Text>
        <View>
          <Text
            style={{
              marginBottom: 5,
            }}
          >
            USD:
          </Text>
          <TextInput
            keyboardType="numeric"
            onChangeText={doStuff}
            onTextInput={calculate}
            value={amount}
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              width: 150,
              paddingLeft: 10,
              height: 40,
              color: "black",
            }}
          />
        </View>
      </View>
      </KeyboardAvoidingView>

      <View
        style={{
          position: "absolute",
          bottom: 30,
          left: 0,
          right: 0,
          marginHorizontal: 20,
        }}
      >
        <TouchableOpacity
          style={{
            borderRadius: 25,
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontWeight: "bold",
              letterSpacing: 2,
            }}
          >
            Place order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CoinDetails;

const styles = StyleSheet.create({});
