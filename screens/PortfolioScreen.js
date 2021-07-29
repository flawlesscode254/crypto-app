import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Currency from "../components/PortfolioCurrency";
import db, { auth } from "../firebase";

const PortfolioScreen = () => {
  const [money, setMoney] = useState();
  const [current, setCurrent] = useState();
  const [bought, setBought] = useState([]);
  const [total, setTotal] = useState(0);
  const [deal, setDeal] = useState(0);

  useEffect(() => {
    var sum = bought.reduce(function (first, currentValue) {
      return Number(first) + Number(currentValue.bitcoin_bought);
    }, 0);
    setTotal(sum.toFixed(8));
    var calc = bought.reduce(function (first, currentValue) {
      return Number(first) + Number(currentValue.money_spent);
    }, 0);
    setDeal(calc.toFixed(2));
  }, [bought]);

  useEffect(() => {
    db.collection("buy").onSnapshot((snapshot) => {
      setBought(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          bitcoin_bought: doc.data().bitcoin_bought,
          money_spent: doc.data().money_spent,
        }))
      );
    });
  }, []);

  useEffect(() => {
    db.collection("users")
      .where("email", "==", auth?.currentUser?.email)
      .onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => {
          setMoney(
            doc
              .data()
              .amount.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          );
        });
      });
  }, []);

  useEffect(() => {
    (() => {
      setInterval(async () => {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const json = await response.json();
        await setCurrent(json.bpi.USD.rate);
      }, 1000);
    })();
  }, []);

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
        source={require("../assets/portfolio.png")}
      />
      <View
        style={{
          marginVertical: 20,
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            letterSpacing: 2,
          }}
        >
          Portfolio balance
        </Text>
        {money ? (
          <Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
            }}
          >{`$ ${money}`}</Text>
        ) : (
          <ActivityIndicator size="large" color="blue" />
        )}
      </View>
      {money ? (
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
            value={current}
            amount={total}
            spent={deal}
          />
        </ScrollView>
      ) : (
        <ActivityIndicator size="large" color="blue" />
      )}
    </View>
  );
};

export default PortfolioScreen;

const styles = StyleSheet.create({});
