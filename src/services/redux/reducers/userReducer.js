import { createSlice } from "@reduxjs/toolkit";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { getItem, setItem, removeItem } = useLocalStorage();

const initialState = {
  // token: "",
  // companyCode: "01",
  userName: "",
  usercd: "",
  token: "",
  profilE_IMG: null,
  member_CODE: "",
};

// const userSlice = createSlice({
//   name: "user",
//   initialState: getItem("REFERRAL_CREDENTIALS") || initialState,
//   reducers: {
//     setUserCredentials: (state, action) => {
//       return {
//         ...state,
//         ...action.payload,
//       };
//     },
//     clearUserCredentials: () => initialState,
//   },
// });

const userSlice = createSlice({
  name: "user",
  initialState: getItem("REFERRAL_CREDENTIALS") || initialState,

  reducers: {
    setUserCredentials: (state, action) => {
      const updatedState = {
        ...state,
        ...action.payload,
      };

      setItem("REFERRAL_CREDENTIALS", updatedState);

      return updatedState;
    },

    clearUserCredentials: () => {
      removeItem("REFERRAL_CREDENTIALS");
      return initialState;
    },
  },
});

export const { setUserCredentials, clearUserCredentials } = userSlice.actions;

export default userSlice.reducer;
