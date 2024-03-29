import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import useCityWeather from "../hooks/useCityWeather";
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import Text from "../components/main/MyText";

const WeatherLocation = ({ data, onDelete }) => {
  const { getCityWeather, results, loading, error } = useCityWeather();

  useEffect(() => {
    getCityWeather(data);
  }, []);
  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text>There was an error</Text>
        <TouchableOpacity onPress={onDelete}>
          <Icon name="closecircle" size={25}></Icon>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ flex: 1 }}>{data}</Text>
      <View style={styles.info}>
        <Text>{Math.round(results.main.temp)}ºC</Text>
        <Image
          style={styles.image}
          source={{
            uri: `http://openweathermap.org/img/wn/${results.weather[0].icon}@4x.png`,
          }}
        />
      </View>

      <Text style={{ flex: 1 }}>Temperature</Text>

      <TouchableOpacity
        onPress={onDelete}
        style={{ flex: 0.5, alignItems: "flex-end" }}
      >
        <Icon name="closecircle" size={25}></Icon>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginEnd: 16,
    alignItems: "center",
  },
  info: {
    flexWrap: "wrap",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  image: {
    height: 40,
    width: 40,
  },
});

export default WeatherLocation;
