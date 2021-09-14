import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Moment from "moment";
import Text from "./main/MyText";

const ResultsDayList = ({ result }) => {
  const weather = result.weather[0];
  const date = new Date(result.dt * 1000);
  const day = date.getDay() + 1;
  const month = date.getMonth() + 1;
  Moment.locale("en");
  var dt = result.dt;
  console.log(Moment(dt).format("d MMM"));
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 40, height: 40 }}
          resizeMode="contain"
          source={{
            uri: `http://openweathermap.org/img/wn/${weather.icon}@4x.png`,
          }}
        />
        <Text style={{ borderWidth: 1 }}>{Math.round(result.temp.day)}ºC</Text>
      </View>
      <View
        style={{
          flex: 1,
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.date}>18/21</Text>
        <Text style={styles.condition}>raining</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", borderWidth: 1 }}>
        <Text style={styles.min_max}>17/08</Text>
        <Text>{result.weather[0].description}</Text>
      </View>
      {/*  <View style={styles.group2}>
        <View style={styles.headerstyle}>
          <View style={styles.icon_temp}>
            <Image
              style={styles.icon}
              resizeMode="contain"
              source={{
                uri: `http://openweathermap.org/img/wn/${weather.icon}@4x.png`,
              }}
            />
            <Text style={styles.temp}>{Math.round(result.temp.day)}ºC</Text>
          </View>
          <View style={styles.day_condition}>
            <Text style={styles.date}>18/21</Text>
            <Text style={styles.condition}>raining</Text>
          </View>
          <View style={styles.min_max_prec}>
            <Text style={styles.min_max}>17/08</Text>
            <Text style={styles.precipitation}>
              {result.weather[0].description}
            </Text>
          </View>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
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
  },
  condition: {
    color: "#121212",
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
