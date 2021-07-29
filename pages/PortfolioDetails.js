import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import db, { auth } from "../firebase";

import PorfolioState from "../components/PorfolioState";

const CoinDetails = () => {
  const [current, setCurrent] = useState();
  const [change, setChange] = useState();
  const [checkers, setCheckers] = useState([]);
  const [next, setNext] = useState();
  const [month, setMonth] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection("buy")
      .where("email", "==", auth?.currentUser?.email)
      .orderBy("time", "desc")
      .onSnapshot((snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            time: doc.data().time,
            nature: doc.data().nature,
            buying_price: doc.data().buying_price,
            bitcoin_bought: doc.data().bitcoin_bought,
            money_spent: doc.data().money_spent,
          }))
        );
      });
  }, []);

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
        await setCurrent(json.bpi.USD.rate);
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

    let e = Number(next) - Number(checkers[0]);
    let f = e / Number(checkers[0]);
    let g = f * 100;
    let h = g.toFixed(2);
    setMonth(h);
  }, [next]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      >
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 999,
            marginRight: 20,
          }}
          source={{
            uri: "https://www.ebuyer.com/blog/wp-content/uploads/2013/11/bitcoin-logo-1000_0.jpg",
          }}
        />
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Bitcoin
          </Text>
          <Text
            style={{
              color: "gray",
            }}
          >
            BTC
          </Text>
        </View>
      </View>

      {next ? (
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
            marginTop: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 12,
                color: "black",
              }}
            >
              Current
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                letterSpacing: 2,
                color: "#009afa",
              }}
            >
              {`$${current}`}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginRight: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                }}
              >
                1 day
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  letterSpacing: 2,
                  color: change > 0 ? "green" : "red",
                }}
              >
                {change > 0 ? `+${change}%` : `${change}%`}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 12,
                }}
              >
                1 month
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  letterSpacing: 2,
                  color: month > 0 ? "green" : "red",
                }}
              >
                {month > 0 ? `+${month}%` : `${month}%`}
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <ActivityIndicator size="large" color="green" />
      )}
      {data.length > 0 ? (
        <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PorfolioState
                id={item.id}
                time={item.time}
                nature={item.nature}
                bitcoin_bought={item.bitcoin_bought}
                money_spent={item.money_spent}
                buying_price={item.buying_price}
              />
            )}
          />
        </View>
      ) : (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: 0,
            right: 0,
            top: 200,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              letterSpacing: 2,
            }}
          >
            Nothing to show here yet!!
          </Text>
        </View>
      )}
    </View>
  );
};

export default CoinDetails;

const styles = StyleSheet.create({});
