import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import { Icon } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const DATA = {
  food: [
    {
      id: "1",
      restaurant_name: "Mcdonalds ",
      liked: 1,
      time: "15 - 25 mins",
      food_type: "£ - Fast Food",
      type: "For allergy and nutrition information pl",
      image:
        "https://media.cntraveler.com/photos/5dbaf8c411c1e500092e7b52/16:9/w_1440,c_limit/Gloria-London-2019-Je%25CC%2581ro%25CC%2582meGalland-6.jpg"
    },
    {
      id: "2",
      restaurant_name: "KFC ",
      liked: 0,
      time: "15 - 20 mins",
      food_type: "£ - Fast Food",
      type: "Grub House is an indepndent delivery service",
      image:
        "https://media.gq-magazine.co.uk/photos/5d13a96b7fcc8e403c821131/16:9/w_1920,c_limit/02-gq-19mar19_b.jpg"
    },
    {
      id: "3",

      restaurant_name: "Subway ",
      liked: 1,
      time: "15 - 20 mins",
      food_type: "£ - Fast Food",
      type: "Grub House is an indepndent delivery service",
      image:
        "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190912110131-01-trendy-london-restaurants.jpg"
    },
    {
      id: "4",
      restaurant_name: "Mcdonalds ",
      liked: 0,
      time: "15 - 25 mins",
      food_type: "£ - Fast Food",
      type: "For allergy and nutrition information pl",
      image:
        "https://www.tozirestaurant.co.uk/wp-content/uploads/2019/06/Tozi-London-exterior.jpg"
    },
    {
      id: "4",
      restaurant_name: "KFC ",
      liked: 1,
      time: "15 - 20 mins",
      food_type: "£ - Fast Food",
      type: "Grub House is an indepndent delivery service",
      image:
        "https://s3.eu-west-2.amazonaws.com/luxurylondon.co.uk-storage-bucket-001/images/041119172021/card/best-neo-mediterranean-restaurants-london-xl-hd.jpg"
    }
  ]
};

export default class restaurantScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      data: DATA
    };
  }
  render() {
    return (
      // background container
      <View style={styles.bgContainer}>
        {/* flatlist container */}
        <View style={styles.flatlist}>
          <FlatList
            // horizontal
            showsVerticalScrollIndicator={false}
            data={this.state.data.food}
            renderItem={({ item: d }) => (
              <View style={styles.horizontalFlatlist}>
                {/* image container */}
                {/* <View style={styles.imageContainer}> */}
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.props.navigation.navigate("SearchRestaurant")
                  }
                >
                  <Image source={{ uri: d.image }} style={styles.image} />
                </TouchableWithoutFeedback>
                {/* restaurant container */}
                <View style={styles.restaurantContainer}>
                  <Text style={styles.nameText} numberOfLines={1}>
                    {d.restaurant_name}
                  </Text>
                  <Text style={styles.timeText}>{d.time}</Text>
                </View>
                <View style={styles.restaurantContainer}>
                  <Text style={styles.timeText}>{d.food_type}</Text>
                </View>
                <View style={styles.restaurantContainer}>
                  <Text style={styles.typeText} numberOfLines={1}>
                    {d.type}
                  </Text>
                  <Icon
                    name={d.liked == 0 ? "heart-outline" : "heart"}
                    color="red"
                    type="material-community"
                    size={20}
                    Component={TouchableOpacity}
                  />
                </View>
                {/* </View> */}
              </View>
            )}
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
  horizontalFlatlist: {
    // borderBottomWidth: 0.5,
    // borderBottomColor: "gray"
    // flexDirection: "column",
    // justifyContent: "flex-start"
  },
  image: {
    height: 200,
    // width: 300,
    resizeMode: "contain",
    margin: 10,
    borderRadius: 20
  },
  // imageContainer: {
  //   flexDirection: "row",
  //   justifyContent: "flex-start"
  // },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    width: 240
    // marginVertical: 4
  },
  addressText: {
    fontSize: 16,
    color: "gray",
    width: 240
  },
  restaurantContainer: {
    // alignSelf: "center"
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 4
  },
  timeText: {
    fontSize: 16,
    color: "gray",
    fontWeight: "bold"
  },
  typeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
    width: 300
  }
});
