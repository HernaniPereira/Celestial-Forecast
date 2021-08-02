import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(initialValue);
  useEffect(() => {
    const init = async () => {
      try {
        const item = await AsyncStorage.getItem(key);
        setStoredValue(item ? JSON.parse(item) : initialValue);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      AsyncStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

export default useLocalStorage;
