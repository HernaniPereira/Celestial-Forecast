import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
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
import { FlatList } from "react-native-gesture-handler";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import Main from "../components/main/Main";
import Adress from "../components/Adress";
import CurrentDayInfo from "../components/CurrentDayInfo";

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
      <ParallaxScrollView
        headerBackgroundColor="#333"
        backgroundColor="transparent"
        stickyHeaderHeight={STICKY_HEADER_HEIGHT}
        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
        backgroundSpeed={10}
        renderForeground={() => (
          <View key="parallax-header" style={styles.parallaxHeader}>
            <Text style={styles.sectionSpeakerText}>Weather</Text>
          </View>
        )}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Adress data={results.street} />
          </View>
        )}
        renderFixedHeader={() => (
          <View key="fixed-header" style={styles.fixedSection}>
            <Text style={styles.fixedSectionText}>asdf</Text>
            <StatusBar animated={true} barStyle="default" hidden={false} />
          </View>
        )}
      >
        <Main style={styles.scrollview}>
          <CurrentWeather style={styles.current} data={results} />
          <DailyWeather
            style={styles.current}
            data={results.daily.slice(0, 5)}
          />
          <CurrentDayInfo style={styles.current} />
        </Main>
      </ParallaxScrollView>
      <ImageBackground
        style={[styles.fixed, styles.containter, { zIndex: -1 }]}
        source={require("../media/night.jpg")}
      />
    </SafeAreaView>

    /* <SafeAreaView style={[styles.fixed, styles.container, { zIndex: -1 }]}>
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <Main style={[styles.scrollview]}>
          <View style={styles.main_title}>
            <Text style={styles.text}> Weather</Text>
          </View>
          <CurrentWeather style={styles.current} data={results} />
          <DailyWeather
            style={styles.current}
            data={results.daily.slice(0, 5)}
          />
        </Main>
      </ScrollView>
      <ImageBackground
        style={[styles.fixed, styles.containter, { zIndex: -1 }]}
        source={require("../media/night.jpg")}
      />
    </SafeAreaView> */
  );
};
ForecastScreen.navigationOptions = {
  header: () => false,
};

const window = Dimensions.get("window");

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 150;
const STICKY_HEADER_HEIGHT = 50;

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
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2,
  },
  sectionSpeakerText: {
    color: "white",
    fontSize: 24,
    paddingVertical: 5,
  },
  sectionTitleText: {
    color: "white",
    fontSize: 18,
    paddingVertical: 5,
  },
  row: {
    overflow: "hidden",
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: "white",
    borderColor: "#ccc",
    borderBottomWidth: 1,
    justifyContent: "center",
  },
  rowText: {
    fontSize: 20,
  },
});

export default ForecastScreen;
