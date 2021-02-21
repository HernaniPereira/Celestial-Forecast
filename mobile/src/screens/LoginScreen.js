import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.label}>Username:</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Password:</Text>
      <TextInput style={styles.input} />
      <Button title="Submit" onPress={() => navigation.navigate("Forecast")} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default LoginScreen;
