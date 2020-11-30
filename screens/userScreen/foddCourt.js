import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { ScrollView } from "react-native-gesture-handler";
import { FlatGrid } from "react-native-super-grid";
// import global.ASSETS.BURGER from "../assets/global.ASSETS.BURGER.png";
import ImageOverlay from "react-native-image-overlay";
import global from "../../global";
import { Icon, Input } from "react-native-elements";
import one from "../../assets/one.png";
import noodles from "../../assets/noodles.png";
import pizza from "../../assets/pizza.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";
import four from "../../assets/four.png";
import five from "../../assets/five.png";

// const DATA = [
//   {
//     id: "1",
//     image:
//       "https://media1.tenor.com/images/c100b6dc55d47dd6944baa92452fa8a9/tenor.gif?itemid=13243461"
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6_3U3-3IDcT_CQztsu2j7ghMrCpDK-crtiTjM3DjiiImdi-YBw&s"
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsIcU52banJGAWCBobesdN8zHjU_h8GEVGxcoUCYc2R1gUApVf&s"
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYruN5AjVqgWAH_umSM2ezHbx8OB1g-l2YSRpHPg_W4u8VK5v&s"
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsuQNIQljpSH0so1Tb6r-XEwwXCQIUGHzW0ZuwpXfXU2HiyJzGw&s"
//   },
//   {
//     image:
//       "https://media1.tenor.com/images/c100b6dc55d47dd6944baa92452fa8a9/tenor.gif?itemid=13243461"
//   },
//   {
//     id: "1",
//     image:
//       "https://media1.tenor.com/images/c100b6dc55d47dd6944baa92452fa8a9/tenor.gif?itemid=13243461"
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6_3U3-3IDcT_CQztsu2j7ghMrCpDK-crtiTjM3DjiiImdi-YBw&s"
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsIcU52banJGAWCBobesdN8zHjU_h8GEVGxcoUCYc2R1gUApVf&s"
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYruN5AjVqgWAH_umSM2ezHbx8OB1g-l2YSRpHPg_W4u8VK5v&s"
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsuQNIQljpSH0so1Tb6r-XEwwXCQIUGHzW0ZuwpXfXU2HiyJzGw&s"
//   },
//   {
//     image:
//       "https://media1.tenor.com/images/c100b6dc55d47dd6944baa92452fa8a9/tenor.gif?itemid=13243461"
//   },
//   {
//     id: "1",
//     image:
//       "https://media1.tenor.com/images/c100b6dc55d47dd6944baa92452fa8a9/tenor.gif?itemid=13243461"
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6_3U3-3IDcT_CQztsu2j7ghMrCpDK-crtiTjM3DjiiImdi-YBw&s"
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsIcU52banJGAWCBobesdN8zHjU_h8GEVGxcoUCYc2R1gUApVf&s"
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYruN5AjVqgWAH_umSM2ezHbx8OB1g-l2YSRpHPg_W4u8VK5v&s"
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsuQNIQljpSH0so1Tb6r-XEwwXCQIUGHzW0ZuwpXfXU2HiyJzGw&s"
//   },
//   {
//     image:
//       "https://media1.tenor.com/images/c100b6dc55d47dd6944baa92452fa8a9/tenor.gif?itemid=13243461"
//   },
//   {
//     id: "1",
//     image:
//       "https://media1.tenor.com/images/c100b6dc55d47dd6944baa92452fa8a9/tenor.gif?itemid=13243461"
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6_3U3-3IDcT_CQztsu2j7ghMrCpDK-crtiTjM3DjiiImdi-YBw&s"
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsIcU52banJGAWCBobesdN8zHjU_h8GEVGxcoUCYc2R1gUApVf&s"
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYruN5AjVqgWAH_umSM2ezHbx8OB1g-l2YSRpHPg_W4u8VK5v&s"
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsuQNIQljpSH0so1Tb6r-XEwwXCQIUGHzW0ZuwpXfXU2HiyJzGw&s"
//   },
//   {
//     image:
//       "https://media1.tenor.com/images/c100b6dc55d47dd6944baa92452fa8a9/tenor.gif?itemid=13243461"
//   }
// ];
const DATA = [
  {
    image: "https://i.ibb.co/g6NMfRw/IMG-4624.jpg"
  },
  {
    image: "https://i.ibb.co/2hNSnKb/IMG-4628.jpg"
  },
  {
    image: "https://i.ibb.co/ysB54ZY/IMG-4439.jpg"
  },
  {
    image: "https://i.ibb.co/XWWfn3q/IMG-4441.jpg"
  },

  {
    image:
      "https://i.ibb.co/Jn8wpj2/F7-B784-F9-776-D-4-C4-C-AE41-92-C1-AE124649.jpg"
  },
  {
    image: "https://i.ibb.co/BKBCvkZ/IMG-4446.jpg"
  }
];
export default class foddCourt extends Component {
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
      <ScrollView style={styles.bgContainer}>
        <Input
          leftIcon={{ type: "material-community", name: "magnify" }}
          placeholder="Search"
          placeholderTextColor="#000"
          inputContainerStyle={styles.inputFiedContainer}
          keyboardType="default"
          inputStyle={styles.inputText}
        />

        <View style={{ marginTop: 5 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("OpenImage")}
              style={{
                borderWidth: 0.9,
                borderColor: "#fff",
                width: global.CONSTANT.WIDTH / 2 + 62,
                height: 243
              }}
            >
              <Image source={global.ASSETS.CHOCO} style={styles.image}></Image>
            </TouchableOpacity>
            <View style={{ justifyContent: "space-between" }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("OpenImage")}
                style={{
                  width: global.CONSTANT.WIDTH / 2 - 40,
                  height: 123,
                  borderColor: "#fff",
                  borderWidth: 0.9
                }}
              >
                <Image
                  source={global.ASSETS.Image1}
                  style={styles.image1}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("OpenImage")}
                style={{
                  width: global.CONSTANT.WIDTH / 2 - 40,

                  height: 123,
                  borderColor: "#fff",
                  borderWidth: 0.9
                }}
              >
                <Image
                  source={global.ASSETS.Image2}
                  style={styles.image1}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{ marginHorizontal: -6, marginTop: -6, marginBottom: -14 }}
          >
            <FlatGrid
              itemDimension={global.CONSTANT.WIDTH / 3 - 30}
              items={DATA}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("OpenImage")}
                >
                  <Image source={{ uri: item.image }} style={styles.image2} />
                </TouchableOpacity>
              )}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: -10
            }}
          >
            <View style={{ justifyContent: "space-between" }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("OpenImage")}
                style={{
                  width: global.CONSTANT.WIDTH / 2 - 72,
                  height: 122,
                  borderColor: "#fff",
                  borderWidth: 0.9
                }}
              >
                <Image
                  source={global.ASSETS.Image11}
                  style={styles.image1}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("OpenImage")}
                style={{
                  width: global.CONSTANT.WIDTH / 2 - 72,

                  height: 123,
                  borderColor: "#fff",
                  borderWidth: 0.9
                }}
              >
                <Image
                  source={global.ASSETS.Image12}
                  style={styles.image1}
                ></Image>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("OpenImage")}
              style={{
                borderWidth: 0.9,
                borderColor: "#fff",
                width: global.CONSTANT.WIDTH / 2 + 56,
                height: 246
              }}
            >
              <Image source={global.ASSETS.CHOCO} style={styles.image}></Image>
            </TouchableOpacity>
          </View>
          <View
            style={{ marginHorizontal: -6, marginTop: -6, marginBottom: -14 }}
          >
            <FlatGrid
              itemDimension={global.CONSTANT.WIDTH / 3 - 30}
              items={DATA}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("OpenImage")}
                >
                  <Image source={{ uri: item.image }} style={styles.image2} />
                </TouchableOpacity>
              )}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("OpenImage")}
              style={{
                borderWidth: 0.9,
                borderColor: "#fff",
                width: global.CONSTANT.WIDTH / 2 + 64,
                height: 240
              }}
            >
              <Image source={global.ASSETS.CHOCO} style={styles.image}></Image>
            </TouchableOpacity>
            <View style={{ justifyContent: "space-between" }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("OpenImage")}
                style={{
                  width: global.CONSTANT.WIDTH / 2 - 40,
                  height: 122,
                  borderColor: "#fff",
                  borderWidth: 0.9
                }}
              >
                <Image
                  source={global.ASSETS.Image13}
                  style={styles.image1}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("OpenImage")}
                style={{
                  width: global.CONSTANT.WIDTH / 2 - 40,

                  height: 122,
                  borderColor: "#fff",
                  borderWidth: 0.9
                }}
              >
                <Image
                  source={global.ASSETS.Image14}
                  style={styles.image1}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
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
    marginHorizontal: 3
    // margin: 5
  },
  image: {
    height: 243,
    width: global.CONSTANT.WIDTH / 2 + 64,
    resizeMode: "cover"
    // marginHorizontal: 2,
    // marginTop: 2
  },
  image1: {
    height: 121,
    width: global.CONSTANT.WIDTH / 2 - 60,
    resizeMode: "cover"

    // marginTop: 2
  },
  image2: {
    height: 124,
    width: global.CONSTANT.WIDTH / 3 - 3,
    resizeMode: "cover",
    marginVertical: -4.5
    // marginTop: -4,
    // marginBottom: -5
  },
  inputText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "gray",
    marginHorizontal: 6
    // margin: 6
  },
  inputFiedContainer: {
    marginTop: global.CONSTANT.STATUSBAR,
    borderBottomWidth: 0
    // borderRadius: 20
    // marginLeft: 30
    // marginTop: global.CONSTANT.STATUSBAR + 20
  }
  // image: {
  //   height: 100
  // },

  // overlay: {
  //   height: 401,
  //   width: 261
  //   // marginLeft: 5
  // },
  // overlayTitle: {
  //   fontSize: 10,
  //   fontWeight: "bold",
  //   marginTop: 350
  // },
  // grid: {
  //   // margin: 6,
  //   marginTop: global.CONSTANT.STATUSBAR
  // },
  // overlay1: {
  //   height: 200,
  //   width: 128,
  //   marginVertical: 0.5,
  //   marginLeft: -8
  // },
  // overlay2: {
  //   height: 180,
  //   width: 130,
  //   // marginHorizontal: 8,
  //   marginVertical: 0.5
  // },
  // roastedText: {
  //   fontSize: 18,
  //   color: "#fff",
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   marginHorizontal: 2
  // },
  // icon: {
  //   // alignContent: "center",
  //   marginTop: 5
  // },
  // likeText: {
  //   fontSize: 20,
  //   color: global.COLOR.PRIMARY,
  //   fontWeight: "normal",
  //   textAlign: "center"
  // },
  // image: {
  //   height: 200,
  //   width: 130,
  //   marginVertical: 0.5
  //   // marginLeft: -8
  // },
  // image1: {
  //   height: 401,
  //   width: 258,
  //   marginLeft: 8
  // }
});
