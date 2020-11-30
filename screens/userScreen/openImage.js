import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import global from "../../global";
import { Icon, Avatar } from "react-native-elements";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

export default class openImage extends Component {
  static navigationOptions = {
    title: "Food Court",
    headerStyle: {
      backgroundColor: "#fff",
    },

    headerTintColor: "#000",

    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
  render() {
    return (
      <ScrollView style={styles.bgContainer}>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 5,
            marginLeft: 10,
          }}
        >
          <Avatar
            source={{ uri: "https://placeimg.com/640/480/people" }}
            size="small"
            rounded
          />

          <View style={{ margingLeft: 10 }}>
            <Text style={styles.username}>linda_okolo</Text>
            <Text style={styles.location}>Brixton</Text>
          </View>
        </View>
        <Image source={global.ASSETS.BURGER} style={styles.image}></Image>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <View style={styles.iconContainer}>
            <Icon
              name="heart-outline"
              color="#000"
              type="material-community"
              size={30}
              iconStyle={styles.icon}
              Component={TouchableOpacity}
            />
            <Icon
              name="comment-processing-outline"
              color="#000"
              type="material-community"
              size={30}
              iconStyle={styles.icon}
              Component={TouchableOpacity}
            />
            <TouchableOpacity>
              <Image source={global.ASSETS.CHEF} style={styles.chefIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <Icon
              name="share-outline"
              color="#000"
              type="material-community"
              size={30}
              Component={TouchableOpacity}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Like")}
        >
          <Text style={styles.likeText}>1000 likes</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.descText}>
            A hamburger (also burger for short) is a food consisting of one or
            more cooked patties of ground meat, usually beef, placed inside a
            sliced bread roll or bun. The patty may be pan fried, grilled,
            smoked or flame broiled.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: null,
    backgroundColor: "#fff",
  },
  image: {
    height: 450,
    width: null,
    resizeMode: "cover",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
    // marginTop: -50
  },
  icon: {
    marginRight: 10,
  },
  likeText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 24,
    marginTop: 5,
  },
  descText: {
    fontSize: 16,
    // fontWeight: "bold",
    marginHorizontal: 24,
    marginTop: 5,
  },
  chefIcon: {
    height: 32,
    width: 36,
    resizeMode: "cover",
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 15,
    // marginTop: 5,
  },
  location: {
    fontSize: 14,
    // fontWeight: "bold",
    marginHorizontal: 15,
    // marginTop: 5,
  },
});
