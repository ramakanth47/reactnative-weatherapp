import React from "react";
import {
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
//import Feather from "@expo/vector-icons/Feather";
import IconText from "../components/IconsText";
const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/citybg.jpg")}
        style={styles.image}
      >
        <Text style={[styles.cityName, styles.cityText]}>Mumbai</Text>
        <Text style={[styles.countryName, styles.cityText]}>India</Text>

        <View style={styles.riseSetWrapper}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={"6:17:00 AM"}
            bodyTextStyles={styles.risesetTextText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={"7:12:00 PM"}
            bodyTextStyles={styles.risesetTextText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || -10,
  },
  image: {
    height: 1200,
    width: 400,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    // fontWeight: "bold",
    color: "white",
  },
  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
  },
  risesetTextText: {
    fontSize: 20,
    color: "white",
    // fontWeight: "bold",
  },
});

export default City;
