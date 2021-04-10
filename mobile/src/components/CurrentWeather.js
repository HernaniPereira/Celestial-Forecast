import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import ResultsHourlyDetail from "./ResultsHourlyDetail";
import Moment from "moment";
import Icon from "react-native-vector-icons/Entypo";
import Adress from "./Adress";

const CurrentWeather = ({ data }) => {
  const currentWeather = data.current.weather[0];
  var date = new Date();
  const formated_date = Moment(date).format("D MMM YYYY");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Adress data={data.street} />
        <Text style={[styles.date_time, styles.text]}>{formated_date}</Text>
      </View>
      <View style={styles.currentWeather}>
        <View style={styles.icon_temp}>
          <Image
            style={styles.image}
            source={
              currentWeather.icon
                ? {
                    uri: `http://openweathermap.org/img/wn/${currentWeather.icon}@4x.png`,
                  }
                : null
            }
          />
          <View style={styles.headerContent}>
            <Text style={[styles.temp, styles.text]}>
              {Math.round(data.current.temp)}°C
            </Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={[styles.title, styles.text]}>
            {currentWeather.description}
          </Text>
          <Text style={[styles.title, styles.text]}>
            Feels like {Math.round(data.current.feels_like)}°C
          </Text>
          <Text style={styles.subhead}>Subhead</Text>
        </View>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data.hourly.slice(0, 24)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return <ResultsHourlyDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 20,
    flexWrap: "nowrap",
    backgroundColor: "#ffffff69",
  },
  header: {
    padding: 16,
    margin: 0,
  },
  currentWeather: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    height: 72,
    margin: 0,
  },
  icon_temp: {
    flex: 1,
    marginLeft: -16,
    padding: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  image: {
    height: 90,
    width: 80,
  },
  headerContent: {
    justifyContent: "flex-start",
    alignSelf: "center",
    alignItems: "stretch",
  },
  temp: {
    fontSize: 16,
    color: "#000",
    lineHeight: 20,
  },
  noteTextStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5,
  },
  title: {
    fontSize: 16,
    color: "#000",
    lineHeight: 20,
    textAlign: "right",
  },
  subhead: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5,
  },
  list: {
    marginLeft: 10,
    margin: 10,
  },
  text: {
    color: "white",
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
  address: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});

export default CurrentWeather;
