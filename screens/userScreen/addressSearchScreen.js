import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button, Icon } from "react-native-elements";
import global from "../../global";
import ScrollableTabView from "react-native-scrollable-tab-view";
import Restaurant from "../../screens/userScreen/restaurantScreen";
import Dish from "../../screens/userScreen/dishScreen";

export default class addressSearchScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });
  constructor(props) {
    super(props);
    this.state = {
      search_type: "",
      filter: true,
    };
  }
  render() {
    return (
      // background containe
      <View style={styles.bgContainer}>
        {/* input container */}
        <View
          style={{
            marginTop: global.CONSTANT.STATUSBAR + 20,
            marginHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* <Text style={styles.addressText}>Address Search :</Text> */}
          <Text style={styles.bottomText} numberOfLines={1}>
            30-31 Clerkenwell Green, Farringdon, London EC1R 0DU,
          </Text>
          <Icon
            name="filter-variant"
            type="material-community"
            onPress={() => {
              this.setState({ filter: !this.state.filter });
            }}
          />
        </View>
        {this.state.filter && (
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.sortView}>
                <Text style={styles.sortText}>Sort</Text>
              </View>
              <View style={styles.sortView}>
                <Text style={styles.sortText}>Price Range </Text>
              </View>
              <View style={styles.sortView}>
                <Text style={styles.sortText}>Dietary</Text>
              </View>
              <View style={styles.sortView}>
                <Text style={styles.sortText}>Rating</Text>
              </View>
              <View style={styles.sortView}>
                <Text style={styles.sortText}>Hygene</Text>
              </View>
              <View style={styles.sortView}>
                <Text style={styles.sortText}>Delivery</Text>
              </View>
            </ScrollView>
          </View>
        )}
        {/* scrollable tab view container */}
        {/* <ScrollableTabView
          style={styles.tabContainer}
          // tabBarBackgroundColor="green"
          tabBarActiveTextColor="#000"
          tabBarInactiveTextColor="gray"
          tabBarTextStyle={{ fontSize: 22, fontWeight: "bold" }}
          tabBarUnderlineStyle={{ backgroundColor: "FFF" }}
          initialPage={0}
          // locked={true}
        > */}
        <Restaurant
          // tabLabel="Restaurants"
          navigation={this.props.navigation}
        />
        <View>
          <Button
            containerStyle={styles.menuContainer}
            buttonStyle={styles.menuButtonStyle}
            icon={{
              name: "map",
              color: "#fff",
              size: 18,
            }}
            title=" Map"
            titleStyle={styles.menuTitle}
            TouchableComponent={TouchableOpacity}
            // onPress={() => this.props.navigation.navigate("DetailsScreen")}
          />
        </View>
        {/* <Dish tabLabel="Dishes" navigation={this.props.navigation} /> */}
        {/* </ScrollableTabView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: null,
    backgroundColor: "#fff",
  },
  inputText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "gray",
    marginHorizontal: 6,
    // margin: 6
  },
  inputFiedContainer: {
    borderWidth: 1,
    borderColor: "gray",
    marginTop: global.CONSTANT.STATUSBAR,
    borderRadius: 20,
    // marginLeft: 30
    // marginTop: global.CONSTANT.STATUSBAR + 20
  },
  tabContainer: {
    marginTop: -20,
  },
  addressText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomText: {
    fontSize: 16,
    color: global.COLOR.PRIMARY,
    width: 250,
    alignSelf: "center",
    marginHorizontal: 5,
  },
  sortView: {
    backgroundColor: "#ededed",
    borderRadius: 8,
    marginLeft: 10,
    marginTop: 10,
  },
  sortText: {
    marginHorizontal: 10,
    marginVertical: 5,
    fontSize: 18,
  },
  menuContainer: {
    alignSelf: "center",
    backgroundColor: "#000",

    zIndex: 9,
    position: "absolute",
    marginTop: -70,
  },
  menuButtonStyle: {
    backgroundColor: "transparent",
    height: 44,
    width: 120,
    borderRadius: 40,
    // marginTop: 50
  },
  menuTitle: {
    color: "#fff",
    // fontWeight: "bold",
    fontSize: 15,
  },
});
