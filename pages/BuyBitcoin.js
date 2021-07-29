import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import firebase from "firebase";
import db, { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const CoinDetails = () => {
  const [val, setVal] = useState();
  const [amount, setAmount] = useState();
  const [final, setFinal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [balance, setBalance] = useState()
  const [reference, setReference] = useState()

  const navigation = useNavigation();

  useEffect(() => {
    db.collection("users").where("email", "==", auth?.currentUser?.email).onSnapshot((snapshot) => {
        snapshot.docs.forEach(doc => {
            setBalance((doc.data().amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
            setReference(doc.id)
        })
    })
}, [])

  const makeUpdate = () => {
    db.collection("users").doc(reference).update({
      amount: (Number(auth?.currentUser?.photoURL) - Number(amount))
    })
  };

  const makeChange = () => {
    db.collection("buy").add({
      name: auth?.currentUser?.displayName,
      email: auth?.currentUser?.email,
      buying_price: price,
      money_spent: amount,
      bitcoin_bought: final,
      nature: "buy",
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const makePurchase = async () => {
    await setLoading(!loading);
    if (Number(amount) > Number(auth?.currentUser?.photoURL)) {
      await setLoading(loading);
      await setError(
        "You can't enter an amount that is greater than your balance"
      );
    } else if (!Number(amount)) {
      await setLoading(loading);
      await setError("The amount entered cannot be zero");
    } else {
      await makeUpdate();
      await makeChange();
      await setAmount("");
      await setFinal("");
      await setLoading(loading);
      await navigation.navigate("PortfolioDetails");
    }
  };

  const doStuff = async (text) => {
    await setAmount(text.replace(/\$|,/g, ""));
  };

  const calculate = () => {
    setFinal((Number(amount) / Number(val)).toFixed(8));
  };

  useEffect(() => {
    (() => {
      setInterval(async () => {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const json = await response.json();
        await setVal(json.bpi.USD.rate_float);
      }, 1000);
    })()
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
          backgroundColor: "#FFF",
        }}
        keyboardVerticalOffset={90}
      >
        <Text
          style={{
            color: "black",
            marginTop: 10,
          }}
        >
          Portflio balance
        </Text>
        <Text
          style={{
            color: "red",
          }}
        >{`$ ${balance}`}</Text>
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
          {`$${(Number(val).toFixed(2)).toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
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
          <View style={styles.errorMessage}>
            {error && <Text style={styles.error}>{error}</Text>}
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
          onPress={makePurchase}
          style={{
            borderRadius: 25,
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          {loading ? (
            <ActivityIndicator color="#ffffff" size="small" />
          ) : (
            <Text
              style={{
                color: "#FFF",
                fontWeight: "bold",
                letterSpacing: 2,
              }}
            >
              Place order
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CoinDetails;

const styles = StyleSheet.create({
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
    marginTop: 20,
  },
  error: {
    color: "#e9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
});
