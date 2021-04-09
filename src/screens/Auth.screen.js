import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";

import * as actions from "../actions";

export class AuthScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Sin In / Sign Up",
      tabBarVisible: false,
    };
  };

  componentDidMount() {
    this.props.facebookLogin();
    // AsyncStorage.removeItem("fb_token");
    this.onAuthComplete(this.props);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate("map");
    }
  }

  render() {
    return <View></View>;
  }
}

const mapStateToProps = ({ auth }) => {
  return { token: auth.token };
};
export default connect(mapStateToProps, actions)(AuthScreen);
