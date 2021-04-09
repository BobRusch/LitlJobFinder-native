import React, { Component } from "react";
import { View, Text } from "react-native";

export class DeckScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Deck",
      headerStyle: {
        backgroundColor: "#688FF8",
      },
      headerTitleStyle: {
        color: "#fff",
      },
    };
  };

  render() {
    return (
      <View>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
      </View>
    );
  }
}

export default DeckScreen;
