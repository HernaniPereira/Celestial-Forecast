import React from "react";
import { Text } from "react-native";
import useTheme from "../../hooks/useTheme";

export default ({ ...props }) => {
  const theme = useTheme();
  const style = {
    color: theme.colors.primary,
    fontSize: theme.fonts.body,
    ...style,
  };
  return <Text {...props} style={style} />; // <Text foo={2} bar={3}>
};
