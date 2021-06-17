import React from "react";
import { createAppContainer, ThemeContext } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/screens/LoginScreen";
import ForecastScreen from "./src/screens/ForecastScreen";
import { ThemeProvider } from "./src/util/ThemeManager";

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Forecast: ForecastScreen,
  },
  {
    initialRouteName: "Forecast",
    defaultNavigationOptions: ({ screenProps }) => ({
      title: "Celestial Weather",
    }),
  }
);

const Navigation = createAppContainer(navigator);

const NavWithTheme = () => {
  const { theme } = React.useContext(ThemeContext);
  return <Navigation screenProps={{ theme }} />;
};

export default () => (
  <ThemeProvider>
    <Navigation />
  </ThemeProvider>
);
