import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

const Adress = ({ data }) => {
  return (
    <View style={styles.address}>
      <Icon name="location-pin" style={styles.icon}></Icon>
      <Text style={styles.loremIpsum}>{data}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  address: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    alignSelf: "center",
    marginStart: -7,
  },
  loremIpsum: {
    color: "white",
    fontSize: 20,
  },
});

export default Adress;
