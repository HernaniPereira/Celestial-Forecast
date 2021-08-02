import { useState, useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";

export const useNetInfo = () => {
  const [netInfo, setNetInfo] = useState(false);

  NetInfo.fetch().then((state) => {
    currentNetwork = state.isConnected;
  });
  onChange = (newState) => {
    setNetInfo(newState);
  };
  const checkConnection = () => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetInfo(state.isConnected);
    });
    return () => unsubscribe();
  };
  useEffect(() => {
    checkConnection();
  }, []);

  return netInfo;
};

export default useNetInfo;
