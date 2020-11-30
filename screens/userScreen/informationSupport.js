import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Input, Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import global from "../../global";

export default class informationSupport extends Component {
  static navigationOptions = {
    title: "Customer Service",
    headerStyle: {
      backgroundColor: "#fff"
    },

    headerTintColor: "#000",

    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 22
    },
    headerRight: (
      <Image
        source={global.ASSETS.CUSTOMERSUPPORT}
        style={{ height: 40, width: 60, resizeMode: "cover" }}
      />
    )
  };
  render() {
    return (
      <ScrollView style={styles.bgContainer}>
        <View>
          <Text style={styles.suggestionText}>Tell Us What Happened</Text>
          <Text style={styles.regardText}>
            One of our caring supervisor will contact you promptly.
          </Text>
          <Text style={styles.regardText}>
            Please tell us more about your inquiry. The more details you share,
            the better.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            inputContainerStyle={styles.inputFiedContainer}
            keyboardType="default"
            inputStyle={styles.inputText}
            multiline={true}
          />
        </View>
        <View>
          <Text style={styles.numberText}>0/1500 Characters</Text>
        </View>
        <View>
          <Button
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.buttonStyle}
            title="SUBMIT"
            titleStyle={styles.buttonTitle}
            TouchableComponent={TouchableOpacity}
            onPress={() => this.props.navigation.navigate("ThankYou")}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: null,
    backgroundColor: "#fff"
  },
  suggestionText: {
    fontSize: 26,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 20,
    color: "#8D8C92",
    textAlign: "center"
  },
  regardText: {
    fontSize: 20,
    color: "gray",
    alignSelf: "center",
    marginBottom: 30,
    textAlign: "center",
    marginHorizontal: 10
  },

  inputText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "gray"
    // marginTop: 20
  },
  inputFiedContainer: {
    // borderWidth: 1,
    borderColor: "gray",
    // width: 140,
    borderBottomWidth: null
    // height: 300,
    // borderRadius: 10
    // marginTop: 5
    // marginTop: global.CONSTANT.STATUSBAR + 20
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "gray",
    // width: 140,
    borderBottomWidth: null,
    marginHorizontal: 10,
    height: 300
  },
  numberText: {
    fontSize: 20,
    color: "gray",
    alignSelf: "flex-end",
    marginBottom: 30,

    marginHorizontal: 10
  },
  buttonContainer: {
    alignSelf: "center",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 20
    // marginHorizontal: 70
  },
  buttonStyle: {
    backgroundColor: "transparent",
    height: 60,
    width: 270
    // marginTop: 50
  },
  buttonTitle: {
    color: "#000",
    // fontWeight: "bold",
    fontSize: 26
  }
});
