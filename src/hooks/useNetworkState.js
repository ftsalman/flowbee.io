import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setOffline,
  setOnline,
} from "../services/redux/reducers/networkReducer";

export const useNetworkState = () => {
  const dispatch = useDispatch();
  const networkStates = useSelector((state) => state.network.isOnline);
  const [isOnline, setIsOnline] = useState(networkStates);

  const updateNetworkStatus = () => {
    if (navigator.onLine) {
      dispatch(setOnline());
      setIsOnline(true);
    } else {
      dispatch(setOffline());
      setIsOnline(false);
    }
  };

  useEffect(() => {
    window.addEventListener("online", updateNetworkStatus);
    window.addEventListener("offline", updateNetworkStatus);

    return () => {
      window.removeEventListener("online", updateNetworkStatus);
      window.removeEventListener("offline", updateNetworkStatus);
    };
  }, []);

  return isOnline;
};
