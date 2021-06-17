import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CurrentDayList from "./CurrentDayList";

const CurrentDayInfo = () => {
  return (
    <View style={styles.container}>
      <CurrentDayList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 20,
    padding: 16,
    flexWrap: "nowrap",
    backgroundColor: "#ffffff69",
  },
});

export default CurrentDayInfo;
