import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Icon, Avatar, Input, Button } from "react-native-elements";
import global from "../../global";
import { ScrollView } from "react-native-gesture-handler";

export default class newProof extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      proof: "",
      address: ""
    };
  }
  render() {
    return (
      // bg container
      <View style={styles.bgContainer}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.proofContainer}>
            <Icon
              name="chevron-left"
              color="#000"
              type="material-community"
              size={32}
              iconStyle={styles.icon}
              Component={TouchableOpacity}
              onPress={() => this.props.navigation.navigate("NewGrub")}
            />
            <View>
              <Text style={styles.prrofText}>NEW GRUBGROUP</Text>
              <Text style={styles.detailText}>Add Details</Text>
            </View>
            <Image source={global.ASSETS.CHIPS} style={styles.image} />
          </View>
          <Avatar
            containerStyle={styles.avatar}
            rounded
            showEditButton
            size={70}
            source={global.ASSETS.PROFILE}
          />
          <View style={styles.inputContainer}>
            <View style={styles.fromContainer}>
              <Input
                placeholder="Enter group name"
                placeholderTextColor="gray"
                inputContainerStyle={styles.inputFiedContainer}
                keyboardType="default"
                inputStyle={styles.inputText}
                onChangeText={v => this.setState({ proof: v })}
                value={this.state.proof}
              />
            </View>
            <View style={styles.fromContainer}>
              <Input
                placeholder="Enter Delivery address"
                placeholderTextColor="gray"
                inputContainerStyle={styles.inputFiedContainer}
                keyboardType="default"
                inputStyle={styles.inputText}
                onChangeText={v => this.setState({ address: v })}
                value={this.state.address}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              marginHorizontal: 22,
              marginTop: 20
            }}
          >
            <Icon
              name="crosshairs"
              color={global.COLOR.PRIMARY}
              type="material-community"
              size={24}
              iconStyle={styles.icon}
            />
            <Text style={styles.locationText}>Auto Detect My location</Text>
          </View>
          <View style={{ justifyContent: "space-evenly" }}>
            <Text style={styles.addressText}>Previously saved addresses</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginHorizontal: 22,
                marginTop: 10
              }}
            >
              <Icon
                name="clock-outline"
                color="gray"
                type="material-community"
                size={20}
                iconStyle={{ marginTop: 16 }}
              />
              <View>
                <Text style={styles.oldAddress}>
                  10-208 Indra Nagar street,OPP{"\n"}
                  water tank,Hydrabad,500006
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginHorizontal: 22,
                marginTop: 10
              }}
            >
              <Icon
                name="clock-outline"
                color="gray"
                type="material-community"
                size={20}
                iconStyle={{ marginTop: 16 }}
              />
              <View>
                <Text style={styles.oldAddress}>
                  56/A4,Jawahar nagar street,ABH{"\n"}
                  SBH bank, Hydrabad,500006
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* proof container */}
        <View style={{ flex: 0.09 }}>
          <Button
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.buttonStyle}
            title="SAVE AND CONTINUE"
            titleStyle={styles.buttonTitle}
            TouchableComponent={TouchableOpacity}
            onPress={() => this.props.navigation.navigate("FunkyFive")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: null,
    backgroundColor: "#fff"
  },
  proofContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: global.CONSTANT.STATUSBAR + 10
  },
  prrofText: {
    fontWeight: "bold",
    fontSize: 18
  },
  detailText: {
    color: "gray",
    fontSize: 16
  },
  icon: {
    // marginTop: 5
    // margin: 8
  },
  avatar: {
    alignSelf: "center",
    marginTop: 40
  },

  inputContainer: {
    marginTop: 30,
    marginHorizontal: 30
  },
  fromContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: global.COLOR.PRIMARY,
    marginTop: 14
    // marginVertical: 20
    // height: 60
    // marginHorizontal: 40
  },

  inputText: {
    fontWeight: "bold",
    fontSize: 18,
    // marginVertical: 10,
    color: "gray",
    marginLeft: 6,
    marginVertical: 6
  },
  inputFiedContainer: {
    borderBottomWidth: 0
  },
  locationText: {
    color: global.COLOR.PRIMARY,
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center"
    // marginTop: 9
  },
  addressText: {
    fontWeight: "bold",
    fontSize: 18,
    // margin: 30,
    color: "gray",
    marginTop: 10,
    marginHorizontal: 20
  },
  oldAddress: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 20,
    marginTop: 10
  },
  buttonContainer: {
    alignSelf: "center",
    backgroundColor: "#000"

    // marginHorizontal: 70
  },
  buttonStyle: {
    backgroundColor: "transparent",
    height: 60,
    width: 400
    // marginTop: 50
  },
  buttonTitle: {
    color: "#fff",
    // fontWeight: "bold",
    fontSize: 20,
    marginTop: -5
  },
  image: {
    height: 60,
    width: 60,
    resizeMode: "cover"
  }
});
