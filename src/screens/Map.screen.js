import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { connect } from "react-redux";
import { Button, Icon } from "react-native-elements";

// latitude: 40.955072,
// longitude: -74.298781,

import * as actions from "../actions";

class MapScreen extends Component {
  static navigationOptions = {
    title: "Map",
  };

  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09,
    },
  };

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  };

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate("deck");
    });
  };

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <MapView
          region={this.state.region}
          style={{ flex: 1 }}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            raised
            title="Search This Area"
            backgroundColor="#009688"
            icon={{ name: "search" }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    marginHorizontal: 35,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#f2f2f2",
  },
};

export default connect(null, actions)(MapScreen);
