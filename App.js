import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CurrentWeather from './src/components/CurrentWeather';
import UpcomingWeather from "./src/components/UpcomingWeather";
const App = () => {
  return (
    <View style={styles.container}>
      <Text>
        <UpcomingWeather />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
