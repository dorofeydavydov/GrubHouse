import Axios from "axios";
import Loading from "../components/Loading";
import NavigationService from "./NavigationService";
import { AsyncStorage, Alert } from "react-native";
import global from "../global";
// base url
Axios.defaults.baseURL = "http://grubhouse.co.uk/mobileappv2/api/";

// log request
Axios.interceptors.request.use((request) => {
  console.log("Starting Request :", request.baseURL + request.url);
  console.log("Request Data :", request.data);
  console.log("Request Header :", request.headers.Authorization);
  return request;
});

// log response
Axios.interceptors.response.use((response) => {
  console.log("Response: \n", response.status, response.data);
  return response;
});

// store auth token in storage
function StoreToken(responseData) {
  // console.log(responseData);
  AsyncStorage.setItem(global.API_TOKEN, responseData, (err) => {
    if (err) {
      console.log("an error");
      throw err;
    }
    console.log("Token Stored");
  }).catch((err) => {
    console.log("error is: " + err);
  });
}

//  get user token
export async function GetToken(data) {
  try {
    let accessToken = await AsyncStorage.getItem(global.API_TOKEN).then(
      (value) => {
        if (value) {
          return value;
        }
      }
    );

    if (!accessToken) {
      console.log("no access token");
      console.log("navigate to Auth");
      Loading.hide();
      NavigationService.navigate("Auth");
    } else {
      global.AUTHTOKEN = accessToken;

      // store user data
      AsyncStorage.setItem(global.USER_DATA, JSON.stringify(data), (err) => {
        if (err) {
          console.log("an error");
          throw err;
        }
        console.log("User Data Stored");
      }).catch((err) => {
        console.log("error is: " + err);
      });
      let userData = await AsyncStorage.getItem(global.USER_DATA).then(
        (value) => {
          if (value) {
            return value;
          }
        }
      );

      global.USER = JSON.parse(userData);

      console.log("navigate to app");
      Loading.hide();

      NavigationService.navigate("User");
    }
  } catch (error) {
    console.log("Something went wrong");
  }
}

//  store user data in storage
export async function StoreUserData(data) {
  try {
    // store user data
    AsyncStorage.setItem(global.USER_DATA, JSON.stringify(data), (err) => {
      if (err) {
        console.log("an error");
        throw err;
      }
      console.log("User Data Stored");
    }).catch((err) => {
      console.log("error is: " + err);
    });
    let userData = await AsyncStorage.getItem(global.USER_DATA).then(
      (value) => {
        if (value) {
          return value;
        }
      }
    );

    global.USER = JSON.parse(userData);
  } catch (error) {
    console.log("Something went wrong");
  }
}

// login api
export async function Login(d) {
  Loading.show();
  var data = new FormData();
  data.append("api_key", " admin@1474?");
  data.append("device_token", global.CONSTANT.DEVICETYPE);
  data.append("user_mobile", d.email);
  data.append("password", d.password);
  Axios({
    method: "post",
    url: "customerLogin",
    data,
    validateStatus: () => {
      return true;
    },
  }).then(
    function (response) {
      if (response.data.code == 1) {
        //   StoreToken(response.data.data.api_token);
        //   GetToken(response.data.data);
        Loading.hide();
        NavigationService.navigate("UserApp");
      } else {
        Loading.hide();
        alert(response.data.msg);
      }
    }.bind(this)
  );
}

export async function Signup(d) {
  Loading.show();

  var data = new FormData();
  data.append("account_type", d.account_type);
  data.append("api_key", " admin@1474?");
  data.append("code_version", " 1.0");
  data.append("contact_phone", d.phoneNumber);
  data.append("cpassword", d.confirm_Password);
  data.append("date_of_birth", d.date);
  data.append("device_id", global.CONSTANT.DEVICETYPE);
  data.append("device_platform", global.CONSTANT.DEVICETYPE);
  data.append("device_uiid", global.CONSTANT.DEVICETYPE);
  data.append("email_address", d.email);
  data.append("first_name", d.userName);
  data.append("last_name", "");
  data.append("password", d.password);
  const DATA = await Axios({
    method: "post",
    url: "createAccount",
    data,
    validateStatus: (status) => {
      return true; // I'm always returning true, you may want to do it depending on the status received
    },
  }).then(
    function (response) {
      return response.data;
    }.bind(this)
  );
  return DATA;
}

// searchByCuisine
export async function SearchCuisine(d) {
  Loading.show();

  var data = new FormData();
  data.append("api_key", " admin@1474?");
  data.append("page", "0");
  data.append("cuisine_name", d.name);
  data.append("lat", d.lat);
  data.append("lng", d.lng);
  const DATA = await Axios({
    method: "post",
    url: "searchByCuisine",
    data,
    validateStatus: (status) => {
      return true; // I'm always returning true, you may want to do it depending on the status received
    },
  }).then(
    function (response) {
      if (response.data.code == 1) {
        //   StoreToken(response.data.data.api_token);
        //   GetToken(response.data.data);
        Loading.hide();
        NavigationService.navigate("Combo");
      } else {
        Loading.hide();
        alert(response.data.msg);
      }
      return response.data;
    }.bind(this)
  );
  return DATA;
}
