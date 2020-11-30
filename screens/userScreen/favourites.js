import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import { Icon } from "react-native-elements";
import global from "../../global";

const DATA = {
  treding: [
    {
      id: "1",
      leftText: "Krispy Creme",
      review: "4.7 (500)",
      rightText: "15-25 mins",
      type: "Breakfast and Brunch",
      amount: "£ 3.99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsuQNIQljpSH0so1Tb6r-XEwwXCQIUGHzW0ZuwpXfXU2HiyJzGw&s"
    },
    {
      id: "2",
      leftText: "Pizza Special Combos",
      rightText: "15-25 mins",
      review: "3.5 (500)",
      type: "Breakfast and Brunch",
      amount: "£ 3.99",
      image:
        "data:image/jpeg;base64,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"
    },
    {
      id: "3",
      leftText: "Noodles",
      review: "4.7 (500)",
      rightText: "15-25 mins",
      type: "Breakfast and Brunch",
      amount: "£ 3.99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsIcU52banJGAWCBobesdN8zHjU_h8GEVGxcoUCYc2R1gUApVf&s"
    },
    {
      id: "4",
      leftText: "Combo",
      rightText: "15-25 mins",
      review: "4.1 (500)",
      type: "Breakfast and Brunch",
      amount: "£ 3.99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6_3U3-3IDcT_CQztsu2j7ghMrCpDK-crtiTjM3DjiiImdi-YBw&s"
    },
    {
      id: "5",
      leftText: "Combo",
      rightText: "15-25 mins",
      review: "4.3 (500)",
      type: "Breakfast and Brunch",
      amount: "£ 3.99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYruN5AjVqgWAH_umSM2ezHbx8OB1g-l2YSRpHPg_W4u8VK5v&s"
    }
  ]
};

export default class favourites extends Component {
  static navigationOptions = {
    title: "Favourites",
    headerStyle: {
      backgroundColor: "#fff"
    },

    headerTintColor: "#000",

    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      data: DATA
    };
  }
  render() {
    return (
      <View style={styles.bgContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={this.state.data.treding}
          renderItem={({ item: d }) => (
            <View style={styles.horizontalFlatlist}>
              <Image source={{ uri: d.image }} style={styles.crispyImage} />
              {/* krispy container */}
              <View style={styles.krispyContainer}>
                <Text style={styles.leftText}>{d.leftText}</Text>
                <Text style={styles.rightText}>{d.rightText}</Text>
              </View>

              <View style={styles.krispyContainer}>
                <Text style={styles.breakfastText}>{d.type}</Text>

                <Text style={styles.amountText}>{d.amount}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginHorizontal: 16
                }}
              >
                <Icon
                  name="star"
                  color="gray"
                  type="material-community"
                  size={20}
                  // iconStyle={styles.icon1}
                />
                <Text style={styles.reviewText}>{d.review}</Text>
              </View>
            </View>
          )}
        />
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
  crispyImage: {
    height: 260,
    // width: 360,
    resizeMode: "cover",
    borderRadius: 10,
    // marginHorizontal: 12,
    justifyContent: "center",
    marginHorizontal: 12,
    marginTop: 10
    // marginLeft: 10
    // marginHorizontal: "5%"
  },
  krispyContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 20
  },
  leftText: {
    fontSize: 18,
    color: "gray"
  },
  rightText: {
    fontSize: 12,
    color: "gray",
    marginTop: 5
  },
  breakfastText: {
    fontSize: 12,
    color: "gray"
  },
  amountText: {
    color: global.COLOR.PRIMARY,
    fontSize: 12,
    fontWeight: "bold"
  }
});
