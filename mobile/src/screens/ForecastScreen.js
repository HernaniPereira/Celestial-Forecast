import React, { useState, useEffect, useContext, useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Button,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  ListView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "react-native";
import CurrentWeather from "../components/CurrentWeather";
import useResults from "../hooks/useResults";
import DailyWeather from "../components/DailyWeather";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import Main from "../components/main/Main";
import CurrentDayInfo from "../components/CurrentDayInfo";
import LottieView from "lottie-react-native";
import { ThemeContext } from "../util/ThemeManager";
//import useAdress from "../hooks/useAdressResults";
import useLocation from "../hooks/useLocation";
import useWeather from "../hooks/useWeather";
import MyText from "../components/main/MyText";
import Adress from "../components/Adress";

const useWeatherLocation = () => {
  const location = useLocation();
  const weather = useWeather(location);
  return weather;
};

const ForecastScreen = ({ navigation }) => {
  const { data, loading, error } = useWeatherLocation();
  const { toggleTheme, themeName } = useContext(ThemeContext);

  if (loading) {
    return (
      <LottieView
        source={require("../assets/weather_clouds.json")}
        autoPlay
        loop
      />
    );
  }
  // refreshControl={
  //   <RefreshControl
  //     refreshing={refreshing}
  //     onRefresh={() => searchApi()}/>}

  return (
    <SafeAreaView
      style={[styles.fixed, styles.container, { zIndex: -1, maxWidth: "100%" }]}
    >
      <ParallaxScrollView
        style={{ maxWidth: "100%" }}
        headerBackgroundColor="#333"
        backgroundColor="transparent"
        contentBackgroundColor="#fff00"
        stickyHeaderHeight={STICKY_HEADER_HEIGHT}
        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
        backgroundSpeed={10}
        renderForeground={() => (
          <View key="parallax-header" style={styles.parallaxHeader}>
            {/* <Text color={theme.primaryColor} style={styles.textTitle}>
              Weather
            </Text> */}
            <MyText style={{ color: "blue" }}>Weather</MyText>
          </View>
        )}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Adress />
          </View>
        )}
        renderFixedHeader={() => (
          <View key="fixed-header" style={styles.fixedSection}>
            <Text style={styles.fixedSectionText}>asdf</Text>
            <Button title="toggle" onPress={() => toggleTheme()} />
            <StatusBar animated={true} barStyle="default" hidden={false} />
          </View>
        )}
      >
        <CurrentWeather style={styles.current} data={data} />
        <DailyWeather style={styles.current} data={data.daily.slice(0, 5)} />
        <CurrentDayInfo />
      </ParallaxScrollView>
      <ImageBackground
        style={[styles.fixed, styles.containter, { zIndex: -1 }]}
        source={
          themeName === "dark"
            ? require("../media/night.jpg")
            : require("../media/day.jpg")
        }
      />
    </SafeAreaView>
  );
};
ForecastScreen.navigationOptions = {
  header: () => false,
};

const window = Dimensions.get("window");

const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 150;
const STICKY_HEADER_HEIGHT = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: -1,
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
    zIndex: 0,
  },
  scrollview: { paddingBottom: 120, backgroundColor: "#32a852" },
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
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT,
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    marginLeft: 20,
    justifyContent: "center",
  },
  stickySectionText: {
    color: "white",
    fontSize: 20,
    margin: 10,
  },
  fixedSection: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  fixedSectionText: {
    color: "#999",
    fontSize: 20,
  },
  parallaxHeader: {
    backgroundColor: "#196cc300",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
    flexDirection: "column",
    paddingTop: 50,
  },
  // textTitledark: {
  //   color: "white",
  //   fontSize: 24,
  //   paddingVertical: 5,
  // },
  textTitle: {
    // color: "black",
    fontSize: 34,
    paddingVertical: 5,
  },
  sectionTitleText: {
    color: "white",
    fontSize: 18,
    paddingVertical: 5,
  },
  weatherLottie: {
    flex: 1,
  },
});

export default ForecastScreen;
