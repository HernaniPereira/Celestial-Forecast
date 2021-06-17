import React, { useState } from "react";
import { StatusBar } from "react-native";
const themes = {
  light: {
    colors: {
      primary: "black",
      secondary: "red",
    },
    fonts: {
      body: 12,
      heading: 14,
    },
  },
  dark: {
    colors: {
      primary: "white",
      secondary: "black",
    },
    fonts: {
      body: 12,
      heading: 24,
    },
  },
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, initialTheme = "light" }) => {
  const [themeName, setThemeName] = useState(initialTheme);

  const theme = themes[themeName];

  const toggleTheme = () => {
    if (themeName === "light") {
      setThemeName("dark");
      StatusBar.setBarStyle("light-content");
    } else {
      setThemeName("light");
      StatusBar.setBarStyle("dark-content");
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeName }}>
      {children}
    </ThemeContext.Provider>
  );
};
