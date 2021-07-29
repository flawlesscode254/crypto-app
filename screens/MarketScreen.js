import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Currency from "../components/MarketCurrency";

const MarketScreen = () => {
  const [price, setPrice] = useState();
  const [change, setChange] = useState();
  const [checkers, setCheckers] = useState([]);
  const [next, setNext] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/historical/close.json"
      );
      const json = await response.json();
      await setCheckers(Object.values(json.bpi));
    })();
  }, []);

  useEffect(() => {
    (() => {
      setInterval(async () => {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const json = await response.json();
        await setPrice(json.bpi.USD.rate);
        await setNext(json.bpi.USD.rate_float);
      }, 1000);
    })();
  }, []);

  useEffect(() => {
    let a = Number(next) - Number(checkers[checkers.length - 1]);
    let b = a / Number(checkers[checkers.length - 1]);
    let c = b * 100;
    let d = c.toFixed(2);
    setChange(d);
  }, [next]);

  return (
    <View
      style={{
        flex: 1,
        marginTop: 30,
      }}
    >
      <Image
        style={{
          width: "100%",
          height: "40%",
        }}
        source={require("../assets/market.png")}
      />
      <View
        style={{
          marginVertical: 20,
          marginHorizontal: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 17,
            letterSpacing: 2,
          }}
        >
          Market
        </Text>
      </View>

      <ScrollView
        style={{
          backgroundColor: "#FFF",
        }}
      >
        <Currency
          image={
            "https://www.ebuyer.com/blog/wp-content/uploads/2013/11/bitcoin-logo-1000_0.jpg"
          }
          name="Bitcoin"
          label="BTC"
          value={price}
          rate={Number(change)}
        />
      </ScrollView>
    </View>
  );
};

export default MarketScreen;

const styles = StyleSheet.create({});
