import React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const NetworkError = () => {
  return (
    <LottieView
      source={require("../assets/network-error.json")}
      autoPlay
      loop
    />
  );
};

const styles = StyleSheet.create({});
export default NetworkError;
