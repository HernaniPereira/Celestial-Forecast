import React from "react";
import LottieView from "lottie-react-native";

export const NetworkError = () => {
  return (
    <LottieView
      source={require("../assets/network-error.json")}
      autoPlay
      loop
    />
  );
};

export default NetworkError;
