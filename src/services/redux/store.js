import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import siderbarReducer from "./reducers/siderbarReducer";
import networkReducer from "./reducers/networkReducer";


export const store = configureStore({
  reducer: {
    sidebar: siderbarReducer,
    user: userReducer,
    network: networkReducer,
  },
});
