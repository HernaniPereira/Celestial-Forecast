import React, { useState, useEffect } from "react";
import openweathermap from "../api/openWeatherMap";

export default (location) => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getWeather = async () => {
    try {
      if (location.loading) {
        return;
      }
      if (location.error) {
        setError(location.error);
        return;
      }
      const {
        coords: { latitude, longitude },
      } = location.data;
      // console.log(openweathermap);
      const response = await openweathermap.get(
        `onecall?units=metric&exclude=minutely&appid=05284e19caeaf7894ce11464006825f0&lat=${latitude}&lon=${longitude}`
      );
      setResults(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getWeather();
  }, [location]);

  return { data: results, loading, error };
};
