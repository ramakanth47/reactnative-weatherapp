import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.Wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodywrapper}>
        <Text style={styles.description}>Its Sunny</Text>
        <Text style={styles.message}>Its Perfect time to go out</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodywrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",

  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});
export default CurrentWeather;