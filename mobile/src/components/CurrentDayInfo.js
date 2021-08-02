import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import CurrentDayList from "./CurrentDayList";
import SearchBar from "./SearchBar";
import WeatherLocation from "./WeatherLocation";
import { useLocalStorage } from "../hooks";
import DraggableFlatList from "react-native-draggable-flatlist";

const CurrentDayInfo = () => {
  const [locations, setLocations] = useLocalStorage("LOCATIONS", []);
  const [searchBarFocused, setSearchBarFocused] = useState(false);

  const deleteLocation = (item) => {
    const newLocations = locations.filter((location) => location !== item);
    setLocations(newLocations);
  };
  const ListItem = ({ title }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <SearchBar
        locations={locations}
        setLocations={setLocations}
        setSearchBarFocused={setSearchBarFocused}
        searchBarFocused={searchBarFocused}
      />

      {locations !== null ? (
        <DraggableFlatList
          style={{
            backgroundColor: searchBarFocused
              ? "rgba(0, 0, 0, 0.3)"
              : "rgba(0, 0, 0, 0)",
          }}
          horizontal={false}
          data={locations}
          keyExtractor={(item) => item}
          renderItem={({ item, drag }) => (
            <TouchableOpacity onLongPress={drag} key={item}>
              <WeatherLocation
                data={item}
                onDelete={() => deleteLocation(item)}
              />
            </TouchableOpacity>
          )}
          onDragEnd={(newArray) => setLocations(newArray.data)}
        />
      ) : (
        <Text>Add locations</Text>
      )}

      {/* <CurrentDayList /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 20,
    padding: 16,
    flexWrap: "nowrap",
    flex: 1,
    backgroundColor: "#ffffff69",
    maxWidth: "100%",
  },
  itemContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    height: 300,
  },
});

export default CurrentDayInfo;
