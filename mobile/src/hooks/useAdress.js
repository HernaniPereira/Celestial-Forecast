import { useEffect, useState } from "react";
import adress from "../api/adress";
import getGeoLocation from "../util/LocationManager";

export default (location) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const searchStreet = async () => {
    try {
      if (location.loading) {
        return;
      }
      if (location.error) {
        setError(location.error);
        return;
      }
      const {
        coords: { latitude, longitude },
      } = location.data;
      const response = await adress.get(
        `reverse?access_key=f51b6c6c0ccce7d9f50a0be5d121b596&query=${latitude},${longitude}`
      );
      setData(response.data.data[0]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    searchStreet();
  }, [location]);

  return { data, loading, error };
};
