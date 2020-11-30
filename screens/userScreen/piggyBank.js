import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import global from "../../global";

export default class piggyBank extends Component {
  static navigationOptions = {
    title: "Menu",
    headerStyle: {
      backgroundColor: "#fff"
    },

    headerTintColor: "#000",

    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <View style={styles.bgContainer}>
        <View
          style={{
            marginHorizontal: 16,
            marginTop: global.CONSTANT.STATUSBAR + 20
          }}
        >
          <View style={styles.borderBackContainer}>
            <TouchableOpacity
              style={styles.orderContainer}
              onPress={() => this.props.navigation.navigate("")}
            >
              <Text style={styles.text}>RESERVATIONS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.orderContainer}
              onPress={() => this.props.navigation.navigate("PreOrder")}
            >
              <Text style={styles.text}>ORDERS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.borderBackContainer}>
            <TouchableOpacity style={styles.orderContainer}>
              <Text style={styles.text}>PIGGY BANK</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.orderContainer}
              onPress={() => this.props.navigation.navigate("")}
            >
              <Text style={styles.text}>PAYMENT DETAILS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: null
  },
  orderContainer: {
    backgroundColor: global.COLOR.PRIMARY,
    height: 40,
    width: 156,
    borderRadius: 10,
    // marginBottom: 6,
    marginTop: 10
  },
  borderBackContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff"
  }
});
