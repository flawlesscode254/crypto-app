import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { auth } from "../firebase";

const Sales = ({ id, time, original, final, profit, bitcoin }) => {
  return (
    <View
      style={{
        marginHorizontal: 15,
        borderRadius: 7,
        borderWidth: 1,
        padding: 7,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#cfcdca",
      }}
    >
      <Text>
        {new Date(time?.toDate()).toDateString() + " " + " "}{" "}
        <Text style={{ color: "black" }}>
          {new Date(time?.toDate()).toLocaleTimeString()}
        </Text>
      </Text>

      <Text
        style={{
          color: "red",
        }}
      >
        {id}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "blue",
            }}
          >
            Original amount
          </Text>
          <Text
            style={{
              color: "black",
              marginTop: 5,
            }}
          >{`$ ${original}`}</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "blue",
            }}
          >
            Final amount
          </Text>
          <Text
            style={{
              color: Number(final) > Number(original) ? "green" : "red",
              marginTop: 5,
            }}
          >{`$ ${final}`}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "blue",
            }}
          >
            Profit amount
          </Text>
          <Text
            style={{
              color: Number(profit) < 0 ? "red" : "green",
              marginTop: 5,
            }}
          >{`$ ${profit}`}</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
              marginTop: 5,
            }}
          >{`${bitcoin} BTC`}</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "blue",
            }}
          >
            Percentage change
          </Text>
          <Text
            style={{
              color:
                ((Number(profit) / Number(original)) * 100).toFixed(2) < 0
                  ? "red"
                  : "green",
              marginTop: 5,
            }}
          >
            {`${((Number(profit) / Number(original)) * 100).toFixed(2)}%`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Sales;

const styles = StyleSheet.create({});
