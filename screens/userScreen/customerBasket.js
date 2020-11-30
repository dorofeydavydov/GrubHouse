import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Switch } from "react-native";
import { Icon, Avatar, Divider } from "react-native-elements";
import global from "../../global";
import Counter from "react-native-counters";
import { TextInput } from "react-native-paper";

// import profileBake from "../assets/profileBake.png";
import { ScrollView } from "react-native-gesture-handler";

export default class customerBasket extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      switchValue: true,
    };
  }

  onChange(number, type) {
    console.log(number, type); // 1, + or -
  }
  toggleSwitch = (val) => {
    console.log("val: ", val);
    this.setState({
      switchValue: val,
    });
  };
  render() {
    return (
      // background container
      <View style={styles.bgContainer}>
        {/* upper Container */}
        <View style={styles.upperContainer}>
          <TouchableOpacity style={styles.orderContainer}>
            <Text style={styles.orderText}>BASKET</Text>
            <Icon
              name="basket"
              color={global.COLOR.PRIMARY}
              type="material-community"
              size={28}
              iconStyle={{ marginTop: 4 }}
            />
          </TouchableOpacity>
          <View style={styles.toggleContainer}>
            <View>
              {/* <Icon
                name="bell-ring"
                //   reverse
                //   reverseColor="#000"
                color="#000"
                type="material-community"
                size={25}
                iconStyle={{ marginHorizontal: 6 }}
                // iconStyle={styles.icon}
                Component={TouchableOpacity}
              /> */}
              <Text style={styles.notificationText}> Order Cuttlery</Text>
            </View>
            <View style={styles.switch}>
              <Switch
                thumbColor={this.state.switchValue ? "#009FFF" : "red"}
                onValueChange={this.toggleSwitch}
                value={this.state.switchValue}
              />
            </View>
          </View>
          <ScrollView>
            <View style={styles.cardContainer}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginHorizontal: 10,
                  marginVertical: 16,
                }}
              >
                <Avatar rounded size={35} source={global.ASSETS.PROFILE} />
                <Text style={styles.youText}>Your Order</Text>
              </View>

              <Divider style={styles.divider} />
              <View style={{ justifyContent: "space-evenly" }}>
                <View style={styles.detailsContainer}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Icon
                      name="stop-circle-outline"
                      color="red"
                      type="material-community"
                      size={18}
                      iconStyle={{ marginTop: 18 }}
                    />
                    <Text style={styles.leftText}>
                      Kadhai Chicken - (Full) * 1
                    </Text>
                  </View>
                  <View style={styles.counterContainer}>
                    <View style={{ marginTop: 16 }}>
                      <Counter start={0} onChange={this.onChange.bind(this)} />
                    </View>
                    <Text style={styles.rightText}>£ 155</Text>
                  </View>
                </View>
                <View style={styles.detailsContainer}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Icon
                      name="stop-circle-outline"
                      color={global.COLOR.PRIMARY}
                      type="material-community"
                      size={18}
                      iconStyle={{ marginTop: 18 }}
                    />
                    <Text style={styles.leftText}>Veg - Corn * 1</Text>
                  </View>
                  <View style={styles.counterContainer}>
                    <View style={{ marginTop: 16 }}>
                      <Counter start={0} onChange={this.onChange.bind(this)} />
                    </View>
                    <Text style={styles.rightText}>£ 175</Text>
                  </View>
                </View>
                <View style={styles.detailsContainer}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Icon
                      name="stop-circle-outline"
                      color={global.COLOR.PRIMARY}
                      type="material-community"
                      size={18}
                      iconStyle={{ marginTop: 18 }}
                    />
                    <Text style={styles.leftText}>Veg rice balls * 1</Text>
                  </View>
                  <View style={styles.counterContainer}>
                    <View style={{ marginTop: 16 }}>
                      <Counter start={0} onChange={this.onChange.bind(this)} />
                    </View>
                    <Text style={styles.rightText}>£ 150</Text>
                  </View>
                </View>
                <View style={styles.detailsContainer}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Icon
                      name="stop-circle-outline"
                      color="red"
                      type="material-community"
                      size={18}
                      iconStyle={{ marginTop: 18 }}
                    />
                    <Text style={styles.leftText}>Chicken Kabab pick * 2</Text>
                  </View>
                  <View style={styles.counterContainer}>
                    <View style={{ marginTop: 16 }}>
                      <Counter start={0} onChange={this.onChange.bind(this)} />
                    </View>
                    <Text style={styles.rightText}>£ 215</Text>
                  </View>
                </View>
                <View style={styles.detailsContainer}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Icon
                      name="stop-circle-outline"
                      color="red"
                      type="material-community"
                      size={18}
                      iconStyle={{ marginTop: 18 }}
                    />
                    <Text style={styles.leftText}>
                      Chicken & Bacon Melt * 2
                    </Text>
                  </View>
                  <View style={styles.counterContainer}>
                    <View style={{ marginTop: 16 }}>
                      <Counter start={0} onChange={this.onChange.bind(this)} />
                    </View>
                    <Text style={styles.rightText}>£ 320</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    marginTop: 15,
                    marginHorizontal: 20,
                    backgroundColor: "#000",
                    borderRadius: 10,
                    justifyContent: "center",
                    height: 30,
                    alignContent: "center",
                    width: 80,
                  }}
                >
                  <Text style={{ alignSelf: "center", color: "#fff" }}>
                    Vouchers
                  </Text>
                </TouchableOpacity>

                <View>
                  <TextInput
                    mode="outlined"
                    style={{
                      backgroundColor: "#fff",
                      marginVertical: 10,
                      marginHorizontal: 10,
                    }}
                    label="Order Notes"
                    multiline
                    value={this.state.text}
                    onChangeText={(text) => this.setState({ text })}
                  />
                </View>
                <View style={styles.itemsContainer}>
                  <Text style={styles.leftText}>Item Total</Text>
                  <Text style={styles.leftText}>£ 1015</Text>
                </View>
                <View style={styles.itemsContainer}>
                  <Text style={styles.leftText}>Delivery Charge</Text>
                  <Text style={styles.leftText}> 15%</Text>
                </View>
                <View style={styles.itemsContainer}>
                  <Text style={styles.leftText}>Service Charge</Text>
                  <Text style={styles.leftText}>10%</Text>
                </View>
                <View style={styles.itemsContainer}>
                  <Text style={styles.leftText}>Total</Text>

                  <Text style={styles.leftText}>£ 1197</Text>
                </View>
                <Divider style={styles.divider} />
                <View style={styles.offerContainer}>
                  <Text style={styles.percentageText}>%</Text>
                  <Text style={styles.offerText}>View available offers.</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.backCheckContainer}>
          <TouchableOpacity
            style={styles.checkoutContainer}
            onPress={() => this.props.navigation.navigate("Bills")}
          >
            <Icon
              name="clipboard-check-outline"
              color="#fff"
              type="material-community"
              size={20}
            />
            <View>
              <Text style={styles.checkoutText}>CHECKOUT</Text>
            </View>
            <View>
              <Text style={styles.totalText}>£ 1,197</Text>
            </View>
          </TouchableOpacity>
        </View>
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
  upperContainer: { flex: 0.96, marginTop: global.CONSTANT.STATUSBAR + 10 },

  grubContainer: {
    justifyContent: "space-evenly",
    marginHorizontal: 10,
  },
  deliveryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  prrofText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  detailText: {
    color: "gray",
  },
  avatar: {
    alignSelf: "center",
    marginLeft: 200,
  },
  orderBackContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    borderRadius: 6,
  },
  orderContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  orderText: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 10,
    color: "gray",
  },
  adminContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop: 60,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
  },

  youText: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  leftText: {
    fontSize: 14,
    marginHorizontal: 6,
    marginTop: 20,
    width: 100,
  },
  rightText: {
    fontSize: 14,
    marginLeft: 20,
    marginTop: 20,
    // width: 100
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  divider: {
    height: 2,
    width: "90%",
    backgroundColor: global.COLOR.PRIMARY,
    marginHorizontal: 20,
  },
  itemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  cardContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 0.1,
    borderColor: "#000",
  },
  offerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    // marginVertical: 10,
    margin: 16,
  },
  offerText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 12,
    marginLeft: 5,
  },
  percentageText: {
    backgroundColor: global.COLOR.PRIMARY,
    color: "#fff",
    height: 20,
    width: 20,
    textAlign: "center",
    borderRadius: 40,
  },
  checkoutContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 10,
  },
  checkoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  totalText: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  backCheckContainer: {
    backgroundColor: "#000",
    flex: 0.1,
    // marginTop: 20
  },
  orderIcon: {
    height: 24,
    width: 20,
    resizeMode: "contain",
    marginTop: 10,
  },
  counterContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  notificationContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  notificationText: {
    fontSize: 16,
    alignSelf: "center",
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  reviewText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
