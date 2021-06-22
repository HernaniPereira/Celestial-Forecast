import { useState, useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";

export default () => {
  const [netInfo, setNetInfo] = useState(false);
  let currentNetwork;

  NetInfo.fetch().then((state) => {
    currentNetwork = state.isConnected;
  });
  onChange = (newState) => {
    setNetInfo(newState);
  };
  const checkConnection = () => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      // console.log("Connection type", state.type);
      // console.log("Is connected?", state.isConnected);
      setNetInfo(state.isConnected);
    });
    return () => unsubscribe();
  };
  useEffect(() => {
    checkConnection();
  }, []);

  return netInfo;
};
