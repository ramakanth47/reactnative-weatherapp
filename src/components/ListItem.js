import React from "react";
import{View,Text,StyleSheet} from 'react-native';
import Feather from '@expo/vector-icons/Feather'


const ListItem = (props) => {
    const {dt_txt,min,max}=props
  return (
    <View style={styles.item}>
      <Feather name={"sun"} size={50} color={"white"} />
      <Text style={styles.title}>{dt_txt}</Text>
      <Text style={styles.title}>{min}</Text>
      <Text style={styles.title}>{max}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "skyblue",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ListItem;
