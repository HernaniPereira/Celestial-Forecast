import React, { useState, useRef } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const SearchBar = ({ locations, setLocations }) => {
  const [text, setText] = useState();

  const onClick = () => {
    setLocations((locations) => [...locations, text]);
    setText("");
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Type Something"
        onChangeText={setText}
        multiline={true}
        value={text}
        selectionColor="#fff"
      />
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
