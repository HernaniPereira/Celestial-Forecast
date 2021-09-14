import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  VirtualizedList,
} from "react-native";
import ResultsDayList from "./ResultsDayList";
import Moment from "moment";

const DailyWeather = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forecast for 5 days</Text>
      {data.map((item) => {
        return <ResultsDayList key={item.dt} result={item} />;
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  text: { color: "white", margin: 16 },
  container: {
    marginStart: 16,
    marginEnd: 16,
    marginRight: 16,
    borderWidth: 1,
    borderRadius: 20,
    paddingBottom: 10,
    flexWrap: "nowrap",
    backgroundColor: "#ffffff69",
  },
});

export default DailyWeather;
