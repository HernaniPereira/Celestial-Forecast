import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View, Button, Keyboard } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

const SearchBar = ({
  locations,
  setLocations,
  setSearchBarFocused,
  searchBarFocused,
}) => {
  const [text, setText] = useState();

  const onClick = () => {
    setLocations((locations) => [...locations, text]);
    setText("");
  };

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardWillShow", _keyboardWillShow);
    Keyboard.addListener("keyboardWillHide", _keyboardWillHide);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
      Keyboard.removeListener("keyboardWillShow", _keyboardWillShow);
      Keyboard.removeListener("keyboardWilldHide", _keyboardWillHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setSearchBarFocused(true);
  };
  const _keyboardWillShow = () => {
    setSearchBarFocused(true);
  };
  const _keyboardWillHide = () => {
    setSearchBarFocused(false);
  };
  const _keyboardDidHide = () => {
    setSearchBarFocused(false);
  };

  return (
    <View style={styles.searchContainer}>
      <Animatable.View
        style={[
          styles.searchInput,
          {
            height: 50,
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        <Animatable.View
          animation={searchBarFocused ? "fadeIn" : "zoomIn"}
          duration={1000}
        >
          <Icon
            name={searchBarFocused ? "md-arrow-back" : "ios-search"}
            style={{ fontSize: 24 }}
          />
        </Animatable.View>
        <TextInput
          style={{ marginLeft: 15 }}
          placeholder="Type Something"
          onChangeText={setText}
          multiline={true}
          value={text}
          selectionColor="#fff"
        />
      </Animatable.View>
      <Button
        style={styles.cancelSearch}
        onPress={() => onClick()}
        title="Save location"
      >
        Save Location
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {},
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#48BBEC",
    borderRadius: 8,
    color: "#48BBEC",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    maxWidth: "100%",
  },
  cancelSearch: { flex: 1, position: "absolute", bottom: 0, left: 0 },
});

export default SearchBar;
