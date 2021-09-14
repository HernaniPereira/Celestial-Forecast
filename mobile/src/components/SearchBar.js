import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Keyboard,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

const { width } = Dimensions.get("window");
const PADDING = 32;
const SEARCH_FULL_WIDTH = width - PADDING * 2; //search_width when unfocused
const SEARCH_SHRINK_WIDTH = width - PADDING - 90; //search_width when focused

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const SearchBar = ({
  locations,
  setLocations,
  setSearchBarFocused,
  searchBarFocused,
}) => {
  const [text, setText] = useState();
  const inputLength = useRef(new Animated.Value(SEARCH_FULL_WIDTH)).current;
  const cancelPosition = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const onClick = () => {
    setLocations((locations) => [...locations, text]);
    setText("");
  };

  const onFocus = () => {
    setSearchBarFocused(true);
    Animated.parallel([
      Animated.timing(inputLength, {
        toValue: SEARCH_SHRINK_WIDTH,
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.timing(cancelPosition, {
        toValue: 16,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const onBlur = () => {
    setSearchBarFocused(false);
    Animated.parallel([
      Animated.timing(inputLength, {
        toValue: SEARCH_FULL_WIDTH,
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.timing(cancelPosition, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }),
    ]).start();
  };
  return (
    <View style={styles.searchContainer}>
      <Animated.View
        style={[
          styles.search,
          {
            width: inputLength,
            position: "absolute",
            alignSelf: "center",
            alignItems: "center",
          },
          searchBarFocused === true
            ? undefined
            : { justifyContent: "flex-start" },
        ]}
      >
        <Animatable.View
          animation={searchBarFocused ? "fadeIn" : "zoomIn"}
          duration={2000}
        >
          <Icon
            name={searchBarFocused ? "md-arrow-back" : "ios-search"}
            color={"white"}
            style={{ fontSize: 24 }}
          />
        </Animatable.View>

        <TextInput
          style={{ marginLeft: 16 }}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="Type Something"
          onChangeText={setText}
          multiline={true}
          value={text}
          selectionColor="#fff"
        />
      </Animated.View>
      <AnimatedTouchable
        style={[styles.saveSearch, { right: cancelPosition }]}
        onPress={() => onClick()}
      >
        <Animated.Text style={([styles.saveSearchText], { opacity: opacity })}>
          Save
        </Animated.Text>
      </AnimatedTouchable>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    flex: 1,
    flexDirection: "row",
    height: 50,
    borderWidth: 1,
    borderColor: "#48BBEC",
    borderRadius: 8,
  },
  searchInput: {
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
    height: 72,
    borderBottomColor: "#00000033",
    paddingTop: 100,
  },
  saveSearch: {
    position: "absolute",
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  saveSearchText: {},
});

export default SearchBar;
