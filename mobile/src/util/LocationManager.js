import * as Location from "expo-location";
import { useState, useEffect } from "react";

export default () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const getGeoLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    console.log(location);
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
  };

  useEffect(() => {
    getGeoLocation();
  }, []);

  return [latitude, longitude];
};
