import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import CurrentWeather from "../components/CurrentWeather";
import useResults from "../hooks/useResults";
import DailyWeather from "../components/DailyWeather";
import { FlatList } from "react-native-gesture-handler";

const ForecastScreen = ({ navigation }) => {
  const [
    searchApi,
    results,
    errorMessage,
    isloading,
    refreshing,
  ] = useResults();

  if (isloading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#525252" />
      </View>
    );
  }
  // refreshControl={
  //   <RefreshControl
  //     refreshing={refreshing}
  //     onRefresh={() => searchApi()}/>}
  return (
    <SafeAreaView style={[styles.fixed, styles.container, { zIndex: -1 }]}>
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <FlatList
        style={[styles.scrollview]}
        ListHeaderComponent={
          <>
            <View style={styles.main_title}>
              <Text style={styles.text}> Weather</Text>
            </View>
            <CurrentWeather style={styles.current} data={results} />
          </>
        }
        ListFooterComponent={
          <DailyWeather
            style={styles.current}
            data={results.daily.slice(0, 5)}
          />
        }
      />
      <ImageBackground
        style={[styles.fixed, styles.containter, { zIndex: -1 }]}
        source={require("../media/night.jpg")}
      />
    </SafeAreaView>
  );
};
ForecastScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  activityIndicator1: {
    width: 70,
    height: 70,
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
