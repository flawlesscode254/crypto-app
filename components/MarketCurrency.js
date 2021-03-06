import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

const PortfolioCurrency = ({ image, name, label, value, rate }) => {
  const navigation = useNavigation();

  const goTo = () => {
    navigation.navigate("ChartDetails");
  };

  return (
    <View>
      {rate ? (
        <TouchableOpacity onPress={goTo}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginHorizontal: 20,
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 999,
                  marginRight: 20,
                }}
                source={{ uri: image }}
              />
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {name}
                </Text>
                <Text
                  style={{
                    color: "gray",
                  }}
                >
                  {label}
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >{`$ ${value}`}</Text>
              <Text
                style={{
                  color: Number(rate) > 0 ? "green" : "red",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                {Number(rate) > 0 ? ` +${rate} %` : ` -${Number(rate) * -1} % `}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <ActivityIndicator size="large" color="green" />
      )}
    </View>
  );
};

export default PortfolioCurrency;
