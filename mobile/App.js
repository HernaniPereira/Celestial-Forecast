import React from "react";
import { createAppContainer, ThemeContext } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/screens/LoginScreen";
import ForecastScreen from "./src/screens/ForecastScreen";
import { ThemeProvider } from "./src/util/ThemeManager";
import { useNetInfo } from "./src/hooks";
import { NetworkError } from "./src/components";

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

export default () => {
  const netInfo = useNetInfo();

  return (
    <ThemeProvider>
      {!netInfo ? <NetworkError /> : <Navigation />}
    </ThemeProvider>
  );
};
