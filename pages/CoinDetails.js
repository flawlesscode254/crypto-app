import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const CoinDetails = () => {
  const [val, setVal] = useState("");
  const [price, setPrice] = useState();

  useEffect(() => {
    (() => {
      setInterval(async () => {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const json = await response.json();
        await setPrice(json.bpi.USD.rate);
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
      <Image
        style={{
          width: "100%",
          height: "30%",
        }}
        source={require("../assets/buy.png")}
      />

      <View
        style={{
          flexDirection: "row",
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
            onChangeText={(text) => setVal(text)}
            keyboardType="numeric"
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              width: 100,
              paddingLeft: 10,
              height: 40,
              marginRight: 20,
              color: "black",
            }}
            placeholderTextColor="gray"
            placeholder="1BTC"
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
            value={val}
            editable={false}
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              width: 150,
              paddingLeft: 10,
              height: 40,
              color: "red",
            }}
            placeholderTextColor="gray"
            placeholder={`$${price}`}
          />
        </View>
      </View>

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
