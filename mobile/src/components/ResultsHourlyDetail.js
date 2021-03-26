import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { withNavigation } from "react-navigation";

const ResultsHourlyDetail = ({ result }) => {
  const weather = result.weather[0];
  var dt = new Date(result.dt * 1000);
  var hours = dt.getHours();
  return (
    <View style={styles.container}>
      <View style={styles.cardItem1Style}>
        <Text style={[styles.textStyle, styles.text]}>{hours}:00</Text>
        <Text style={[styles.textStyle, styles.text]}>
          {Math.round(result.temp)}°C
        </Text>
      </View>
      <Image
        style={styles.smallIcon}
        source={{
          uri: `http://openweathermap.org/img/wn/${weather.icon}@4x.png`,
        }}
      />
      <Text style={[styles.red, styles.title]}>{weather.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardItem1Style: {
    alignItems: "center",
    marginTop: 16,
    alignSelf: "center",
  },
  textStyle: {
    fontSize: 15,
    color: "#000",
    lineHeight: 20,
  },
  noteTextStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5,
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    flex: 1,
    minHeight: 210,
  },
  title: {
    fontSize: 10,
    color: "white",
    alignSelf: "center",
    alignContent: "center",
    marginBottom: 10,
  },
  smallIcon: {
    width: 100,
    height: 100,
  },
  text: {
    color: "white",
  },
});

export default ResultsHourlyDetail;
