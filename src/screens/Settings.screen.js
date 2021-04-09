import React, { Component } from "react";
import { View, Text } from "react-native";

export class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Settings",
      headerStyle: {
        // backgroundColor: "#688FF8",
        backgroundColor: "#fff",
      },
      headerTitleStyle: {
        color: "#000",
      },
    };
  };

  render() {
    return (
      <View>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
      </View>
    );
  }
}

export default SettingsScreen;
