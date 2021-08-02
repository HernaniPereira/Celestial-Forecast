import React from "react";
import { Text } from "react-native";
import useTheme from "../../hooks/useTheme";

export default ({ style, ...props }) => {
  const theme = useTheme();
  const myStyle = {
    color: theme.colors.primary,
    fontSize: theme.fonts.body,
    ...style,
  };
  return <Text {...props} style={myStyle} />; // <Text foo={2} bar={3}>
};
