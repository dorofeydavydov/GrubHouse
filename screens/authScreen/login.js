import React, { Component } from "react";
import DatePicker from "react-native-datepicker";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Image,
  AsyncStorage,
} from "react-native";
// import background from "../assets/background.png";
import { Button, Input, Overlay } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import global from "../../global";
import * as Animatable from "react-native-animatable";
import { Login } from "../../utils/Api";

export default class login extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "grubtest100@mailsac.com",
      password: "12345678",
      success: false,
    };
  }

  // Validate
  handleValidate = () => {
    if (this.state.email == "") {
      Alert.alert("Login Alert", "Please enter e-mail address ");
    } else if (this.state.email !== "") {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(this.state.email) === false) {
        Alert.alert("Login Alert", "Invalid e-mail address ");
      } else if (this.state.password == "") {
        Alert.alert("Login Alert", "Please enter password");
      } else if (this.state.password.length < 6) {
        Alert.alert(
          "Login Alert",
          "Password field should not be less than 6 characters"
        );
      } else {
        // Login(this.state);
        this.handleLogin();
      }
    }
  };
  handleLogin = () => {
    // this.setState({ success: true });
    this.props.navigation.navigate("UserApp");
  };
  skipeValidate = () => {
    this.props.navigation.navigate("UserApp")
  }
  render() {
    return (
      // image background
      <ImageBackground
        source={global.ASSETS.BACKGROUND}
        style={styles.bgContainer}
      >
        <View style={styles.upperContainer}>
          <KeyboardAwareScrollView
            // style={styles.container}
            enableOnAndroid
            extraScrollHeight={30}
            showsVerticalScrollIndicator={false}
          >
            <Animatable.View
              animation={this.state.success ? "flipInY" : ""}
              onAnimationEnd={(property) =>
                // console.log(property.finished)
                property.finished
                  ? this.props.navigation.navigate("UserApp")
                  : null
              }
            >
              <Animatable.Image
                animation="slideInDown"
                source={global.ASSETS.GRUBICON}
                style={styles.logo}
              />
              <View style={styles.logoContainer}>
                <Animatable.Image
                  animation="slideInLeft"
                  source={global.ASSETS.GRUB}
                  style={styles.grub}
                />
                <Animatable.Image
                  animation="slideInRight"
                  source={global.ASSETS.HOUSE}
                  style={styles.grub}
                />
              </View>
            </Animatable.View>
            <View style={styles.inputContainer}>
              {/* email container */}

              <View style={styles.fromContainer}>
                <Input
                  placeholder="E-mail"
                  placeholderTextColor="#fff"
                  textContentType="email"
                  inputContainerStyle={styles.inputFiedContainer}
                  keyboardType="email-address"
                  inputStyle={styles.inputText}
                  onChangeText={(v) => this.setState({ email: v })}
                  value={this.state.email}
                />
              </View>
              {/* password container */}
              <View style={styles.fromContainer}>
                <Input
                  placeholder="Password"
                  placeholderTextColor="#fff"
                  secureTextEntry={true}
                  textContentType="password"
                  inputContainerStyle={styles.inputFiedContainer}
                  keyboardType="default"
                  inputStyle={styles.inputText}
                  onChangeText={(v) => this.setState({ password: v })}
                  value={this.state.password}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{
                width: 140,
                alignSelf: "flex-end",
                marginHorizontal: 48,
              }}
              onPress={() => this.props.navigation.navigate("Forgot")}
            >
              <Text style={styles.forgotText}>Forgot Password ?</Text>
            </TouchableOpacity>
            {/* login Button */}
            <View>
              <Button
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.buttonStyle}
                title="LOGIN"
                titleStyle={styles.buttonTitle}
                TouchableComponent={TouchableOpacity}
                onPress={this.handleValidate}
              />
            </View>
            <TouchableOpacity style={styles.facebookContainer}>
              <Image
                source={global.ASSETS.FACEBOOK}
                style={{
                  width: 50,
                  height: 54,
                  alignSelf: "center",
                  marginLeft: 8,
                }}
              />
              <Text style={styles.facebookText}> Sign in with Facebook</Text>
            </TouchableOpacity>
            <View>
              <Text
                title="Skip for Now"
                titleStyle={styles.buttonTitle}
                TouchableComponent={TouchableOpacity}
                onPress={this.skipeValidate}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={{ width: 270, alignSelf: "center" }}
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            <Text style={styles.signupText}>
              New Customer ? Create an account
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: null,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  upperContainer: { flex: 0.96 },
  inputContainer: {
    // marginBottom: 50,
    marginHorizontal: 50,
    // marginTop: global.CONSTANT.STATUSBAR + 00
  },
  fromContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    marginVertical: 20,
    // marginHorizontal: 40
  },

  inputText: {
    fontWeight: "bold",
    fontSize: 18,
    // marginVertical: 10,
    color: "#fff",
    marginLeft: -11,
  },
  inputFiedContainer: {
    borderBottomWidth: 0,
  },
  buttonContainer: {
    alignSelf: "center",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 60,

    // marginHorizontal: 70
  },
  buttonStyle: {
    backgroundColor: "transparent",
    height: 60,
    width: 270,
    // marginTop: 50
  },
  buttonTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 26,
  },
  forgotText: {
    color: "#fff",
    alignSelf: "flex-end",
    fontWeight: "bold",
    fontSize: 14,
    // marginHorizontal: 46,
    marginBottom: 10,
  },
  bottomContainer: {
    flex: 0.04,
  },
  signupText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  facebookContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#475A96",
    borderRadius: 20,
    width: 280,
    alignSelf: "center",
    marginVertical: 36,
    height: 60,
  },
  facebookText: {
    marginRight: 20,
    fontSize: 16,
    marginVertical: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  logo: {
    height: 40,
    // width: 150,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: global.CONSTANT.STATUSBAR + 20,
    marginBottom: 10,
    // marginTop: -36
  },
  grub: {
    height: 40,
    width: 100,
    resizeMode: "contain",
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
});
