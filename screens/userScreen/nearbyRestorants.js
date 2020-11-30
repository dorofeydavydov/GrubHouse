import React, { Component, version } from "react";
import Toast from '@rimiti/react-native-toastify';
import axios from 'axios';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Keyboard,
  TouchableHighlight
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import global from "../../global";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { Icon, Divider } from "react-native-elements";

export default class nearbyRestorants extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });
  constructor(props) {
    super(props);
    this._getLocationAsync();
    this.state = {
      data: [],
      latitude: 0.0,
      longitude: 0.0,
      nearbyList: [],
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      currentLocation: null
    };
  }

  _getLocationAsync = async () => {

    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied",
      });
    }

    let location = await Location.getCurrentPositionAsync({});

    this.getRests({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    })
    
  }
  getRests=(location)=>{ 
    this.setState({
      latitude: location.latitude,
      longitude: location.longitude,
      loading: false,
    });
    axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+location.latitude+','+location.longitude+'&radius=4000&type=restaurant&key=AIzaSyCCynf5qQzLMr2CLR0sWWLgsq6vT8ad4M0')
         .then(response => {
            let data = []
            response.data.results.map((rest, index)=>{
              data.push({
                id: index+1,
                name: rest.name,
                address: rest.vicinity,
                image: "https://maps.googleapis.com/maps/api/place/photo?photoreference="+rest.photos[0].photo_reference+"&maxheight=200&key=AIzaSyCCynf5qQzLMr2CLR0sWWLgsq6vT8ad4M0",
                rating: rest.rating,
                price_level: rest.price_level,
                open_time: "5:00am",
                close_time: "10:00pm",
                distance: this.getDistance(rest.geometry.location),
                lat: rest.geometry.location.lat,
                lng: rest.geometry.location.lng
              })
            })
            this.setState({nearbyList: data})
            // console.log(data)
        });
  }
  changeLocation=(value)=>{
    this.setState({currentLocation: value})
  }
  setLocation=async ()=>{
    Keyboard.dismiss()
    let cLocation = await Location.geocodeAsync(this.state.currentLocation)
    if(cLocation.length == 0){
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Warning',
        text2: 'Address is invalid',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else {
      this.getRests({
        latitude: cLocation[0].latitude,
        longitude: cLocation[0].longitude
      })
    }
  }
  setDetaultZoom=()=>{
    this.setState({
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    })
  }
  rad = (x) => {
    return x * Math.PI / 180;
  };
  getDistance=(rest)=>{
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = this.rad(rest.lat - this.state.latitude);
    var dLong = this.rad(rest.lng - this.state.longitude);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.rad(rest.lat)) * Math.cos(this.rad(rest.lat)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return (d/1000).toFixed(1)+"km"; // returns the distance in meter
  }
  render() {
    var noRestaurant = null
    if(this.state.nearbyList.length < 1){
      noRestaurant = <View style={styles.amountContainer}>
                      <Text style={styles.amountText}>
                        😔
                        &nbsp;
                      </Text>
                      <Text style={styles.amountText}>Sorry, I can't any restaurant</Text>
                      <Text style={styles.amountText}>Please change location</Text>
                    </View>
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.mapContainer}>
          {/* map view container */}
          <MapView
            onPress={this.setDetaultZoom}
            showsUserLocation
            showsMyLocationButton
            style={{ flex: 10, height: 250, width: global.CONSTANT.WIDTH }}
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: this.state.latitudeDelta,
              longitudeDelta: 0.00521,
            }}
          >
            <Marker
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
              }}
              style={styles.selfLocation}
            />
            {this.state.nearbyList.map((rest, index) => (
                <Marker
                  coordinate={{
                    latitude: rest.lat,
                    longitude: rest.lng
                  }}
                  image={global.ASSETS.MAP_MARKER}
                  title={rest.name}
                  Component={TouchableOpacity}
                ></Marker>
            ))}
          </MapView>
        </View>
        {/* // background container */}
        <ScrollView style={styles.bgContainer} >
          {/* Map container */}
          <TouchableOpacity
            activeOpacity={0.8}
            // onPress={()=>{this.props.navigation.navigate("nearby_maps")}}
            style={{ marginTop: 250, backgroundColor: "transparent" }}
          />
          {/* bottom container */}
          <View style={styles.bottomContainer}>
            {/* nearby text container */}
            <View>
            <Text style={styles.restaurantText}>NEARBY RESTAURANTS</Text>
            {noRestaurant}
            </View>
            {/*  restaurant detail flatlis container */}
            <View style={styles.crispyFlatlist}>
              {/* flatlist */}
              <FlatList
                showsVerticalScrollIndicator={false}
                data={this.state.nearbyList}
                renderItem={({ item: d }) => (
                  <View
                    style={{
                      borderColor: "gray",
                      borderWidth: 0.2,
                      marginHorizontal: 10,
                      backgroundColor: "#fff",
                      marginBottom: 20,
                      borderRadius: 10,
                      position: "relative"
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate("Details")}
                    >
                      <Image source={{ uri: d.image}} style={styles.images} />
                      {/* <View style={styles.openStatus}><Text style={{color:"#fff",padding:"3,4"}}>Opened</Text></View> */}
                      <View style={styles.timeContainer}>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            backgroundColor: "rgba(0,0,0,0.3)",
                            // marginLeft: 6
                          }}
                        >
                          <View style={styles.greenContainer}>
                            <Text style={styles.openText}> Open </Text>
                          </View>
                          <Text style={styles.timeText}> {d.open_time}</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            backgroundColor: "rgba(0,0,0,0.3)",
                            // marginLeft: 6
                          }}
                        >
                          <View style={styles.redContainer}>
                            <Text style={styles.openText}> Close </Text>
                          </View>
                          <Text style={styles.timeText}> {d.close_time} </Text>
                        </View>
                      </View>
                      <Text style={styles.missText}>{d.name}</Text>
                      <Text style={styles.addressText}>{d.address}</Text>
                      <View style={styles.amountContainer}>
                        <Text style={styles.amountText}>$${d.price_level}</Text>
                        <Text style={styles.amountText}>&nbsp;&nbsp;･&nbsp;&nbsp;</Text>
                        <Text style={styles.amountText}>{d.distance}</Text>
                        <Text style={styles.amountText}>
                        &nbsp;&nbsp;･&nbsp;&nbsp;
                        </Text>
                        <Text style={styles.amountText}>
                          <Icon
                            name="emoticon-happy-outline"
                            type="material-community"
                            size={22}
                            color="gray"
                          />
                          &nbsp;
                        </Text>
                        <Text style={styles.amountText}>{d.rating}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
        <View
          style={styles.locationChangeContainer}
        >
          <Icon                         
            name="map-marker"
            color="white"
            type="material-community"
            style={{marginTop: 5}}
            size={22}></Icon>
          <TextInput
            style={styles.currentAddress}
            editable
            maxLength={40}
            onChangeText = {this.changeLocation}
            onEndEditing={this.changeLocation}
            // onKeyPress={}
            // value={this.state.currentLocation}
          />
          <TouchableOpacity
               style={styles.changeText}
               onPress = {this.setLocation}>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  selfLocation: {
    zIndex: 10
  },  
  currentAddress:{
    marginLeft: 10,
    color: "#FFF",
    // backgroundColor: "#ff0",
    width: "60%",
    // borderColor: "#fff",
    // borderWidth: 1,
    // borderRadius: 4
  },
  locationChangeContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#6599D9",
    color: "#000"
  },
  changeText: {
    color: "#fff",
    marginLeft: "auto",
    justifyContent: "flex-end",
  },
  bgContainer: {
    flex: 1,
    width: null,
    // backgroundColor: "#fff",
    // position: "absolute",
    zIndex: 8,
    // marginTop: 70,
  },
  mapContainer: {
    flex: 1,
    zIndex: 9,
    position: "absolute",
  },

  bottomContainer: {
    flex: 1,
    // zIndex: 8,
    backgroundColor: "#fff",
    // position: "absolute",
  },
  restaurantText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    // paddingTop: 250,
    // backgroundColor: "transparent",
  },
  images: {
    height: 200,
    // marginHorizontal: 8,
    marginBottom: 5,
    borderRadius: 10,
    resizeMode: "cover",
  },
  missText: {
    fontWeight: "bold",
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 10,
  },
  addressText: {
    fontSize: 20,
    // fontFamily: global.FONT.ITALIC,
    marginHorizontal: 10,
    color: "gray",
    fontStyle: "italic",
  },
  timeText: {
    fontSize: 16,
    fontWeight: "normal",
    marginHorizontal: 6,
    color: "#fff",
    alignSelf: "center",
  },
  amountText: {
    fontSize: 18,
    color: "gray",
    // marginHorizontal:
    // marginBottom: 20
    // marginVertical: 20
  },
  icon: {
    marginTop: -250,
    alignSelf: "center",
    // zIndex: -9,
    // position: "absolute"
  },
  crispyFlatlist: {
    flex: 1,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginHorizontal: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    marginTop: -40,
  },
  openStatus:{
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 3,
    color: "#fff",
    backgroundColor: "green"
  },
  closeStatus:{
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 3,
    color: "#fff",
    backgroundColor: "red"
  },
  redContainer: {
    backgroundColor: "red",
    borderRadius: 5,
    width: 70,
  },
  openText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 6,
    color: "#fff",
    marginVertical: 1,
    alignSelf: "center",
  },
  greenContainer: {
    backgroundColor: "green",
    borderRadius: 5,
    width: 70,
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    // marginHorizontal: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  markerText: {
    color: "white",
    paddingTop: 4,
    paddingLeft: 10,
    fontWeight: "bold"
  }
});

