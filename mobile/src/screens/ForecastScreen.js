import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import CurrentWeather from "../components/CurrentWeather";
import useResults from "../hooks/useResults";

const ForecastScreen = ({ navigation }) => {
  const [searchApi, results, errorMessage, isloading] = useResults();

  if (isloading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#525252" />
      </View>
    );
  }

  return (
    <>
      <ScrollView style={[styles.scrollview]}>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <View style={styles.main_title}>
          <Text style={styles.text}> Weather</Text>
        </View>
        <CurrentWeather style={styles.current} data={results} />
      </ScrollView>
      <ImageBackground
        style={[styles.fixed, styles.containter, { zIndex: -1 }]}
        source={require("../media/night.jpg")}
      />
    </>
  );
};
ForecastScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height, //for full screen
  },
  container1: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  activityIndicator1: {
    width: 50,
    height: 50,
  },
  spinner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  current: {
    flex: 1,
    alignItems: "center",
    height: 500,
  },
  scrollview: { paddingBottom: 120 },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  text: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 25,
  },
  main_title: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",
    marginBottom: "20%",
  },
});

export default ForecastScreen;
