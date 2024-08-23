// import React from "react";
// import { SafeAreaView, StyleSheet, Text, FlatList, View } from "react-native";
// import Feather from "@expo/vector-icons/Feather";

// const DATA = [
//   {
//     dt_txt: "2024-07-27 12:00:00",
//     main: {
//       temp_max: 8.55,
//       temp_min: 7.55,
//     },
//     weather: [
//       {
//         main: "clear",
//       },
//     ],
//   },
//   {
//     dt_txt: "2024-07-28 12:00:00",
//     main: {
//       temp_max: 8.66,
//       temp_min: 7.22,
//     },
//     weather: [
//       {
//         main: "clear",
//       },
//     ],
//   },
//   {
//     dt_txt: "2024-07-29 12:00:00",
//     main: {
//       temp_max: 8.26,
//       temp_min: 6.18,
//     },
//     weather: [
//       {
//         main: "snowy",
//       },
//     ],
//   },
// ];

// // Corrected Item component
// const Item = ({ dt_txt, temp_max, temp_min }) => (
//   <View style={styles.item}>
//     <Feather name={"sun"} size={50} color={"white"} />
//     <Text>{dt_txt}</Text>
//     <Text> {temp_max.toFixed(1)}°C</Text>
//     <Text>{temp_min.toFixed(1)}°C</Text>
//   </View>
// );

// const UpcomingWeather = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.header}>Upcoming Weather</Text>
//       <FlatList
//         data={DATA}
//         renderItem={({ item }) => (
//           <Item
//             dt_txt={item.dt_txt}
//             temp_max={item.main.temp_max}
//             temp_min={item.main.temp_min}
//           />
//         )}
//         keyExtractor={(item) => item.dt_txt}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//     backgroundColor: "#282c34", // Add a background color for better visibility
//   },
//   item: {
//     backgroundColor: "#61dafb",
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderRadius: 10, // Add some border radius for better aesthetics
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#fff",
//     textAlign: "center",
//     marginBottom: 10,
//   },
// });

//React native docs about Flatlists
//https://reactnative.dev/docs/flatlist?language=javascript
//https://snack.expo.dev/?platform=web

import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

const DATA = [
  {
    dt_txt: "2024-07-27 12:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: "clear",
      },
    ],
  },
  {
    dt_txt: "2024-07-28 12:00:00",
    main: {
      temp_max: 8.66,
      temp_min: 7.22,
    },
    weather: [
      {
        main: "clear",
      },
    ],
  },
  {
    dt_txt: "2024-07-29 12:00:00",
    main: {
      temp_max: 8.26,
      temp_min: 6.18,
    },
    weather: [
      {
        main: "snowy",
      },
    ],
  },
];

const UpcomingWeather = () => {
  const { container, image } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/cloudy.jpg")}
        style={image}
      >
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <ListItem
              dt_txt={item.dt_txt}
              temp_max={item.main.temp_max}
              temp_min={item.main.temp_min}
            />
          )}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#a0a0a0",
  },
  image: {
    // width: "100%",
    //height: "300%",
    height: 1100,
    width: 410,
  },
});

export default UpcomingWeather;
