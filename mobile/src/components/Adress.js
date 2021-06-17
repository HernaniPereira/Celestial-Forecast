import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import useLocation from "../hooks/useLocation";
import useAddress from "../hooks/useAdress";

const useAdressLocation = () => {
  const location = useLocation();
  const address = useAddress(location);

  return address;
};

const Adress = () => {
  const { data, loading, error } = useAdressLocation();
  console.log(data);
  if (loading) {
    return;
  }
  console.log(data.name);
  return (
    <View style={styles.address}>
      <Icon name="location-pin" style={styles.icon}></Icon>
      {error ? (
        <Text>Please enable location Services</Text>
      ) : (
        <Text style={styles.loremIpsum}>{data.name}</Text>
      )}
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
