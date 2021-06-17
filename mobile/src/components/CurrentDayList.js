import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CurrentDayList = ({}) => {
  var data = {
    weather: [
      {
        id: 1,
        icon_name: "sunny",
        icon_color: "#fbec5d",
        name: "UV index",
        value: "Low",
      },
      {
        id: 2,
        icon_name: "sunny",
        icon_color: "#fbec5d",
        name: "UV index",
        value: "Low",
      },
      {
        id: 3,
        icon_name: "sunny",
        icon_color: "#fbec5d",
        name: "UV index",
        value: "Low",
      },
      {
        id: 4,
        icon_name: "sunny",
        icon_color: "#fbec5d",
        name: "UV index",
        value: "Low",
      },
      {
        id: 5,
        icon_name: "sunny",
        icon_color: "#fbec5d",
        name: "UV index",
        value: "Low",
      },
    ],
  };
  return (
    <View>
      {data.weather.map((item) => {
        return (
          <View key={item.id} style={styles.container}>
            <View style={styles.desc}>
              <Icon
                name="sunny"
                size={25}
                style={[styles.icon, { color: item.icon_color }]}
              />
              <Text style={{ color: "#fff" }}>{item.name}</Text>
            </View>
            <Text style={{ color: "#fff" }}>{item.value}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  desc: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});

export default CurrentDayList;
