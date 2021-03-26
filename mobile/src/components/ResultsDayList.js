import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ResultsDayList = ({ result }) => {
  console.log(result.item);
  const weather = result.weather[0];
  return (
    <View style={styles.container}>
      <View style={styles.group2}>
        <View style={styles.headerstyle}>
          <View style={styles.icon_temp}>
            <Image
              style={styles.icon}
              resizeMode="contain"
              source={{
                uri: `http://openweathermap.org/img/wn/${weather.icon}@4x.png`,
              }}
            />
            <Text style={styles.temp}>20ºC</Text>
          </View>
          <View style={styles.day_condition}>
            <Text style={styles.date}>18/21</Text>
            <Text style={styles.condition}>raining</Text>
          </View>
          <View style={styles.min_max_prec}>
            <Text style={styles.min_max}>17/08</Text>
            <Text style={styles.precipitation}>precipitaioons</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  group2: {
    justifyContent: "space-between",
    flex: 1,
  },
  headerstyle: {
    flexDirection: "row",
    height: 50,
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  icon_temp: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    marginRight: 16,
  },
  icon: {
    width: 50,
    height: 50,
  },
  temp: {
    color: "#121212",
    alignSelf: "center",
    margin: 5,
  },
  day_condition: {
    margin: 0,
    alignSelf: "center",
    alignItems: "center",
    marginRight: 16,
    marginLeft: 16,
  },
  date: {
    color: "#121212",
    alignSelf: "flex-start",
    alignSelf: "center",
  },
  condition: {
    color: "#121212",
    alignSelf: "flex-start",
  },
  min_max_prec: {
    alignSelf: "center",
    alignItems: "center",
    margin: 0,
    marginRight: 16,
  },
  min_max: {
    color: "#121212",
  },
  precipitation: {
    color: "#121212",
    alignSelf: "flex-start",
  },
});

export default ResultsDayList;
