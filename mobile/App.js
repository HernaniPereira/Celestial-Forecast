import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/screens/LoginScreen";
import ForecastScreen from "./src/screens/ForecastScreen";

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Forecast: ForecastScreen,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Celestial Weather",
    },
  }
);

export default createAppContainer(navigator);
