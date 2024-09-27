import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import HomeScreen from "../../tabs/home/HomeScreen";
import { TransitionPresets } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size = 25 }) => {
          let iconName: "home" | "home-outline" | "apps-outline" | "apps" | "bag-outline" | "bag" | "cart-outline" | "cart" | "person-outline" | "person" = "home";
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Categories") {
            iconName = focused ? "apps" : "apps-outline";
          } else if (route.name === "My Item") {
            iconName = focused ? "bag" : "bag-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName as any} size={size} color={focused ? "#0cc0df" : "gray"} />;
        },
        tabBarActiveTintColor: "#0cc0df",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          marginBottom: 4,
          marginTop: -5,
          paddingTop: 4,
          height: 25,
        },
        ...TransitionPresets.SlideFromRightIOS,
        animationEnabled: true,
        gestureEnabled: true,
        gestureDirection: "horizontal",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={HomeScreen} />
      <Tab.Screen name="My Item" component={HomeScreen} />
      <Tab.Screen name="Cart" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;