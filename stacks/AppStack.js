import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import CoinDetails from "../pages/CoinDetails";
import PortfolioDetails from "../pages/PortfolioDetails";
import ChartDetails from "../pages/ChartDetails";
import BuyBitcoin from "../pages/BuyBitcoin";

const AppStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Main"
    >
      <Stack.Screen
        name="Main"
        component={MainStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Auth"
        component={AuthStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CoinDetails"
        component={CoinDetails}
        options={{
          title: "Crypto Exchange",
        }}
      />
      <Stack.Screen
        name="PortfolioDetails"
        component={PortfolioDetails}
        options={{
          title: "Your Crypto Trades",
        }}
      />
      <Stack.Screen
        name="ChartDetails"
        component={ChartDetails}
        options={{
          title: "Make a Trade",
        }}
      />
      <Stack.Screen
        name="BuyBitcoin"
        component={BuyBitcoin}
        options={{
          title: "Buy Bitcoin",
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
