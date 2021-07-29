import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import db, { auth } from "../firebase";
import firebase from "firebase";

const PorfolioState = ({
  id,
  time,
  nature,
  buying_price,
  bitcoin_bought,
  money_spent,
}) => {
  const [current, setCurrent] = useState();
  const [reference, setReference] = useState();
  const [next, setNext] = useState();
  const [loading, setLoading] = useState(false);

  const a = Number(next);
  const b = Number(buying_price.replace(/\$|,/g, ""));
  const c = Number(money_spent);

  const change = (((((a - b) / b) * 100 + 100) / 100) * c - c).toFixed(2);
  const income = (((((a - b) / b) * 100 + 100) / 100) * c).toFixed(2);
  const percent = (((a - b) / b) * 100).toFixed(2);

  const addSell = () => {
    db.collection("sell").add({
      name: auth?.currentUser?.displayName,
      email: auth?.currentUser?.email,
      original: Number(money_spent),
      profit: Number(change),
      final: Number(income),
      bitcoin: bitcoin_bought,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const makeDelete = () => {
    db.collection("buy").doc(id).delete();
  };

  const makeUpdate = () => {
    db.collection("users")
      .doc(reference)
      .update({
        amount: Number(current) + Number(income),
      });
  };

  const makeSale = async () => {
    await setLoading(!loading);
    await addSell();
    await makeUpdate();
    await makeDelete();
    await setLoading(loading);
  };

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
    db.collection("users")
      .where("email", "==", auth?.currentUser?.email)
      .onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => {
          setReference(doc.id);
          setCurrent(doc.data().amount);
        });
      });
  }, []);

  return (
    <View
      style={{
        marginHorizontal: 10,
        marginTop: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 7,
        marginBottom: 10,
        backgroundColor: "#d5dbd6",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 10,
            color: "black",
          }}
        >
          {new Date(time?.toDate()).toDateString() + " " + " "}{" "}
          <Text style={{ color: "black" }}>
            {new Date(time?.toDate()).toLocaleTimeString()}
          </Text>
        </Text>
        <TouchableOpacity
          onPress={makeSale}
          style={{
            backgroundColor: "red",
            borderRadius: 15,
            paddingHorizontal: 15,
            paddingVertical: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {loading ? (
            <ActivityIndicator size="large" color="#FFF" />
          ) : (
            <Text
              style={{
                color: "#FFF",
                fontWeight: "bold",
                letterSpacing: 2,
              }}
            >
              Sell
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: nature === "buy" ? "green" : "red",
          fontWeight: "bold",
          letterSpacing: 4,
        }}
      >
        {nature}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 5,
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
          <Text
            style={{
              color: "black",
            }}
          >{`${bitcoin_bought} BTC`}</Text>
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
          <Text>{`$ ${Number(money_spent).toFixed(2)}`}</Text>
        </View>
      </View>
      {next ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <View>
            <Text
              style={{
                color: "blue",
              }}
            >
              Amount change
            </Text>
            <Text
              style={{
                color: change > 0 ? "green" : "red",
              }}
            >{`$ ${change}`}</Text>
          </View>
          <View>
            <Text
              style={{
                color: "blue",
              }}
            >
              Total income
            </Text>
            <Text
              style={{
                color: "black",
              }}
            >{`$ ${income}`}</Text>
          </View>
          <View>
            <Text
              style={{
                color: "blue",
              }}
            >
              Percentage change
            </Text>
            <Text
              style={{
                color: percent > 0 ? "green" : "red",
              }}
            >{`${percent} %`}</Text>
          </View>
        </View>
      ) : (
        <ActivityIndicator size="large" color="green" />
      )}
    </View>
  );
};

export default PorfolioState;

const styles = StyleSheet.create({});
