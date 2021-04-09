import React, { Component } from "react";
import { SafeAreaView, View, Text, Platform } from "react-native";
import { Button } from "react-native-elements";

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Review Jobs",
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTitleStyle: {
        color: "#000",
      },
      headerRight: () => (
        <Button
          buttonStyle={{ backgroundColor: "#000" }}
          title="Settings"
          onPress={() => navigation.navigate("settings")}
        />
      ),
      style: {
        marginTop: Platform.OS === "android" ? 24 : 0,
      },
    };
  };

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>ReviewScreen</Text>
          <Text>ReviewScreen</Text>
          <Text>ReviewScreen</Text>
          <Text>ReviewScreen</Text>
          <Text>ReviewScreen</Text>
          <Text>ReviewScreen</Text>
          <Text>ReviewScreen</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default ReviewScreen;
