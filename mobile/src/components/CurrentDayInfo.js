import React from "react";
import { Text, View } from "react-native";
const CurrentDayInfo = () => {
  var data = {
    weather: [
      {
        id: 1,
        icon_name: "sunny",
        icon_color: "#fbec5d",
        name: "UV index",
        value: "Low",
      },
      { id: 2, name: "UV index", value: "Low" },
      { id: 3, name: "UV index", value: "Low" },
      { id: 4, name: "UV index", value: "Low" },
      { id: 5, name: "UV index", value: "Low" },
    ],
  };
  return (
    <View>
      {data.weather.map((item) => {
        console.log(item);
        return (
          <Text key={item.id} style={{ color: "#fff" }}>
            {" "}
            {item.name}
          </Text>
        );
      })}
    </View>
  );
};

export default CurrentDayInfo;
