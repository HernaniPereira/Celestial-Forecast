import { useState, useEffect } from "react";
import openweathermap from "../api/openWeatherMap";
import * as Location from "expo-location";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isloading, setLoading] = useState(true);
  const [refreshing, setrefreshing] = useState(true);
  const [adress, setAdress] = useState("");

  const searchApi = async () => {
    setrefreshing(true);
    const { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });

    try {
      fetch(
        "http://api.positionstack.com/v1/reverse?access_key=f51b6c6c0ccce7d9f50a0be5d121b596&query=" +
          location.coords.latitude +
          "," +
          location.coords.longitude
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setAdress(responseJson.data[0].name);
        });
      const response = await openweathermap.get(
        `onecall?units=metric&exclude=minutely&appid=05284e19caeaf7894ce11464006825f0&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
      );
      const nKey = "street";
      response.data[nKey] = adress;
      setResults(response.data);
      setErrorMessage("");
      setLoading(false);
      setrefreshing(false);
    } catch (error) {
      setLoading(false);
      setrefreshing(false);
      setErrorMessage("Something went wrong");
      console.log(error);
    }
  };

  const loading = () => {};
  useEffect(() => {
    searchApi();
  }, []);
  return [searchApi, results, errorMessage, isloading, refreshing];
};
