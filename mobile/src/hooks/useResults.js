import React, { useContext } from "react";
import { useState, useEffect } from "react";
import openweathermap from "../api/openWeatherMap";
import * as Location from "expo-location";
import { Context as LocationContext } from "../context/LocationContext";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isloading, setLoading] = useState(true);
  const [refreshing, setrefreshing] = useState(true);
  // const {
  //   state: { currentLocation },
  // } = useContext(LocationContext);
  // console.log(currentLocation);

  const searchApi = async () => {
    setrefreshing(true);
    //const [latitude, longitude] = getGeoLocation();
    const latitude = 38.835142;
    const longitude = -9.095028;

    try {
      const response = await openweathermap.get(
        `onecall?units=metric&exclude=minutely&appid=05284e19caeaf7894ce11464006825f0&lat=${latitude}&lon=${longitude}`
      );
      setResults(response.data);
      setLoading(false);
      setrefreshing(false);
    } catch (error) {
      setErrorMessage("something went wrong");
      setLoading(false);
      setrefreshing(false);
    }
  };

  const loading = () => {};

  useEffect(() => {
    searchApi();
  }, []);

  return [searchApi, results, errorMessage, isloading, refreshing];
};
