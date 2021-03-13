import { useState, useEffect } from "react";
import openweathermap from "../api/openWeatherMap";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isloading, setLoading] = useState(true);

  const searchApi = async () => {
    try {
      const response = await openweathermap.get(
        "onecall?units=metric&exclude=minutely&appid=05284e19caeaf7894ce11464006825f0&lat=38.835142&lon=-9.095028"
      );
      setResults(response.data);
      setErrorMessage("");
      setLoading(false);
    } catch (error) {
      setErrorMessage("Something went wrong");
      console.log(dsd);
    }
  };
  useEffect(() => {
    searchApi();
  }, []);
  return [searchApi, results, errorMessage, isloading];
};
