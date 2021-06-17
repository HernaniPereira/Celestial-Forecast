import React, { useContext } from "react";
import { ThemeContext } from "../util/ThemeManager";

export default () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};
