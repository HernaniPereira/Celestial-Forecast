import axios from "axios";
const openWeatherKey = "05284e19caeaf7894ce11464006825f0";

export default axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});
