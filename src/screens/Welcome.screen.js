import _ from "lodash";
import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import AppLoading from "expo-app-loading";

import Slides from "../components/Slides.component";

const SLIDE_DATA = [
  { text: "Welcome to JobApp", color: "#03A9F4" },
  { text: "Use this to get a job", color: "#009688" },
  { text: "Set your location, then swipe away", color: "#03A9F4" },
];

class WelcomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Sin In / Sign Up",
      tabBarVisible: false,
    };
  };

  state = { token: null };

  async componentDidMount() {
    let token = await AsyncStorage.getItem("fb_token");

    if (token) {
      this.props.navigation.navigate("map");
      this.setState({ token });
    } else {
      this.setState({ token: null });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate("auth");
  };

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }
    return (
      <SafeAreaView>
        <View>
          <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
        </View>
      </SafeAreaView>
    );
  }
}

export default WelcomeScreen;
