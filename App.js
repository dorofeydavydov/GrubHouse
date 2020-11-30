import React, { Component } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import MainNavigator from "./navigators/MainNavigator";
import * as Font from "expo-font";
import Loading from "./components/Loading";

console.disableYellowBox = true;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  // load custom font function
  async componentDidMount() {
    await Font.loadAsync({
      "Italianoo-Italic": require("./assets/fonts/Italianno-Regular.ttf"),
      "Yeon-Sung": require("./assets/fonts/YeonSung-Regular.ttf"),
      "Simonetta-Black": require("./assets/fonts/Simonetta-Black.ttf"),
      "Simonetta-Regular": require("./assets/fonts/Simonetta-Regular.ttf"),
    });
    this.setState({
      loading: false,
    });
  }
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <>
        <MainNavigator />
        <Loading />
      </>
    );
  }
}

const styles = StyleSheet.create({});
