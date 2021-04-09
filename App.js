import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator as StackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator as TabNavigator } from "react-navigation-tabs";
import { Provider } from "react-redux";

import store from "./src/store";

import AuthScreen from "./src/screens/Auth.screen";
import WelcomeScreen from "./src/screens/Welcome.screen";
import MapScreen from "./src/screens/Map.screen";
import DeckScreen from "./src/screens/Deck.screen";
import SettingsScreen from "./src/screens/Settings.screen";
import ReviewScreen from "./src/screens/Review.screen";

const MainNavigator = TabNavigator(
  {
    welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen },
    main: {
      screen: TabNavigator(
        {
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen },
            }),
          },
        },
        {
          tabBarPosition: "bottom",
          tabBarOptions: {
            labelStyle: { fontSize: 12 },
          },
          tabBarOptions: {
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          },
        },
        {
          tabBarVisible: false,
        }
      ),
    },
  },
  {
    tabBarVisible: false,
    lazy: true,
    tabBarOptions: {
      tabBarVisible: false,
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    },
  }
);

const App = createAppContainer(MainNavigator);

export default () => {
  return (
    <Provider store={store}>
      <App style={styles.container} />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aquamarine",
    alignItems: "center",
    justifyContent: "center",
  },
});
