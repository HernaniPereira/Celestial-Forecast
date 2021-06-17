import { useState, useEffect, useMemo } from "react";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

export const useLocation = () => {
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  const getLocation = async () => {
    try {
      await requestPermissionsAsync();
      const location = await getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
      setLocation(location);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);

  return useMemo(
    () => ({ data: location, error, loading }),
    [location, error, loading]
  );
};

export default useLocation;
