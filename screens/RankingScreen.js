import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";
import db, { auth } from "../firebase";

import Sales from "../components/Sales";

const MarketScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection("sell")
      .where("email", "==", auth?.currentUser?.email)
      .onSnapshot((snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            original: doc.data().original,
            final: doc.data().final,
            profit: doc.data().profit,
            bitcoin: doc.data().bitcoin,
            time: doc.data().time,
          }))
        );
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        marginTop: 30,
        justifyContent: data.length > 0 ? "flex-start" : "center",
        alignItems: data.length > 0 ? "flex-start" : "center",
      }}
    >
      <StatusBar barStyle="dark-content" />
      {data.length > 0 ? (
        <View
          style={{
            marginTop: 20,
          }}
        >
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Sales
                id={item.id}
                original={item.original}
                final={item.final}
                profit={item.profit}
                bitcoin={item.bitcoin}
                time={item.time}
              />
            )}
          />
        </View>
      ) : (
        <View>
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

export default MarketScreen;

const styles = StyleSheet.create({});
