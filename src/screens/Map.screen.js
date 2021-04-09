import React, { Component } from "react";
import { View, Text } from "react-native";

export class MapScreen extends Component {
  static navigationOptions = {
    title: "Map",
    headerStyle: {
      backgroundColor: "#688FF8",
    },
    headerTitleStyle: {
      color: "#fff",
    },
  };

  render() {
    return (
      <View>
        <Text>MapScreen</Text>
        <Text>MapScreen</Text>
        <Text>MapScreen</Text>
        <Text>MapScreen</Text>
        <Text>MapScreen</Text>
        <Text>MapScreen</Text>
        <Text>MapScreen</Text>
      </View>
    );
  }
}

export default MapScreen;
