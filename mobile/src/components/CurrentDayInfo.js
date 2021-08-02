import React from "react";
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
  // const [locations, setLocations] = useState([]);
  const [locations, setLocations] = useLocalStorage("LOCATIONS", []);

  /*  useEffect(
    React.useCallback(() => {
      getLocations();
    }, [])
  );

  const getLocations = () => {
    AsyncStorage.getItem("LOCATIONS").then((locations) => {
      setLocations(JSON.parse(locations));
    });
  };

  const deleteLocation = async (item) => {
    console.log("aqui");
    const newLocations = await locations.filter(
      (location) => location !== item
    );
    await AsyncStorage.setItem("LOCATIONS", JSON.stringify(newLocations)).then(
      () => getLocations()
    );
  }; */

  /*   locations.map((item) => {
    return (
      <View key={item}>
        <WeatherLocation
          data={item}
          onDelete={() => deleteLocation(item)}
        />
      </View>
    );
  }) */
  console.log(locations);
  /*  const renderItem = ({ item, index, drag, isActive }) => (
    <TouchableOpacity onLongPress={drag} key={item}>
      <WeatherLocation data={item} onDelete={() => deleteLocation(item)} />
    </TouchableOpacity>
  ); */
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
      <SearchBar locations={locations} setLocations={setLocations} />

      {locations !== null ? (
        <SafeAreaView style={{ flex: 1 }}>
          <DraggableFlatList
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
        </SafeAreaView>
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
