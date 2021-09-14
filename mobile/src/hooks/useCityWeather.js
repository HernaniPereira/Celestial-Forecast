import React from "react";
import { useState, useEffect } from "react";
import openWeatherMap from "../api/openWeatherMap";

export default () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCityWeather = async (city) => {
    try {
      const response = await openWeatherMap.get(
        `weather?appid=05284e19caeaf7894ce11464006825f0&q=${city}&units=metric`
      );
      setData(response.data);
      setError("");
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
      console.log(error);
    }
  };
  return { getCityWeather, results: data, loading, error };
};
