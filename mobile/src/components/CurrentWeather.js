import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import ResultsHourlyDetail from "./ResultsHourlyDetail";
const CurrentWeather = ({ data }) => {
  console.log(data);
  const currentWeather = data.current.weather[0];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.location, styles.text]}>Title</Text>
        <Text style={[styles.date_time, styles.text]}>Title</Text>
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
          <Text style={[styles.title2, styles.text]}>
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
    borderWidth: 1,
    borderRadius: 20,
    flexWrap: "nowrap",
    backgroundColor: "#ffffff69",

    elevation: 3,
    overflow: "hidden",
  },
  header: {
    padding: 16,
    margin: 0,
  },
  location: {},
  date_time: {},
  currentWeather: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    height: 72,
    margin: 0,
  },
  icon_temp: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 20,
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
  info: {},
  title: {
    fontSize: 16,
    color: "#000",
    lineHeight: 20,
  },
  title2: {
    fontSize: 16,
    color: "#000",
    lineHeight: 20,
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
});

export default CurrentWeather;
