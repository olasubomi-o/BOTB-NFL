
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext, createContext, useState, useEffect } from "react";
import { ColorSchemeName, Pressable, View } from "react-native";

import Leaderboard from "../src/leaderboard";
import PlaySelect from "../src/selectPlay";
import Rewards from "../src/rewards";

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function BottomTabNav() {
  return (
    <>
      <BottomTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "black",
          headerShown: false,
        }}
      >
         <BottomTab.Screen
          name="Play"
          component={PlaySelect}
          options={({ navigation }) => ({
            title: "Play",
            tabBarActiveTintColor: "black",
            tabBarIcon: ({ color }) => (
              <TabBarIcon2 name="home" color={color} />
            ),
          })}
        />
        <BottomTab.Screen
          name="Rewards"
          component={Rewards}
          options={({ navigation }) => ({
            title: "Rewards",
            tabBarActiveTintColor: "black",
            tabBarIcon: ({ color }) => (
              <TabBarIcon2 name="attach-money" color={color} />
            ),
            })}
        />
        <BottomTab.Screen
          name="Leaderboard"
          component={Leaderboard}
          options={({ navigation, route }) => ({
            title: "Leaderboard",
            tabBarActiveTintColor: "black",
            tabBarIcon: ({ color }) => (
              <TabBarIcon2 name="leaderboard" color={color} />
            ),
            headerShown: false,
          })}
        />
      </BottomTab.Navigator>
    </>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarIcon2(props: {
  name: React.ComponentProps<typeof MaterialIcons>["name"];
  color: string;
}) {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}
