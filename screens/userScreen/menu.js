import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from "react-native";
import { Icon, Divider, Avatar } from "react-native-elements";
import global from "../../global";
import { ScrollView } from "react-native-gesture-handler";

export default class menu extends Component {
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

  //  Logout Functionality
  handleLogout = () => {
    Alert.alert(
      "Grub House",
      "Are you sure you want to logout!",
      [
        {
          text: "Yes ",
          onPress: () => {
            AsyncStorage.multiRemove([global.API_TOKEN]);
            this.props.navigation.navigate("Auth");
          }
        },
        {
          text: "Cancel"
          // onPress: () => {
          //   BackHandler.exitApp();
          // }
        }
      ],
      { cancelable: false }
    );
  };
  render() {
    return (
      <ScrollView style={styles.bgContainer}>
        <View style={styles.profileContainer}>
          <Avatar rounded size={34} source={global.ASSETS.PROFILE} />
          <Text style={styles.nameText}>Joey Tribbiani</Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <TouchableOpacity>
            <Text style={styles.text}>NOTIFICATIONS</Text>
          </TouchableOpacity>
          <Divider style={styles.divider} />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Favourites")}
          >
            <Text style={styles.text}>YOUR FAVOURITES</Text>
          </TouchableOpacity>
          <Divider style={styles.divider} />
          <TouchableOpacity>
            <Text style={styles.text}>PAYMENT DETAILS</Text>
          </TouchableOpacity>
          <Divider style={styles.divider} />
          <TouchableOpacity>
            <Text style={styles.text}>SETTINGS</Text>
          </TouchableOpacity>
          <Divider style={styles.divider} />

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Help")}
          >
            <Text style={styles.text}>HELP</Text>
          </TouchableOpacity>
          <Divider style={styles.divider} />

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("LoyaltyPoints")}
          >
            <Text style={styles.text}>LOYALTY POINTS</Text>
          </TouchableOpacity>
          <Divider style={styles.divider} />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Membership")}
          >
            <Text style={styles.text}>MEMBERSHIP</Text>
          </TouchableOpacity>
          <Divider style={styles.divider} />
          <TouchableOpacity onPress={this.handleLogout}>
            <Text style={styles.text}>LOG OUT</Text>
          </TouchableOpacity>
          <Divider style={styles.divider} />
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
  profileContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 30,
    marginTop: global.CONSTANT.STATUSBAR + 20
  },
  nameText: {
    // margin: 10,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
    marginHorizontal: 16,
    color: "gray"
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "gray",
    marginHorizontal: 34,
    marginTop: 23
  },
  divider: {
    height: 1,
    backgroundColor: global.COLOR.PRIMARY,
    marginHorizontal: 30,
    marginTop: 20
  }
});
