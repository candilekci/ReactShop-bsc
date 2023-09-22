import { createSlice } from "@reduxjs/toolkit";

const logUserSlice = createSlice({
  name: "logUser",
  initialState: {
    logUser: null,
    online: false,
  },
  reducers: {
    setLogUser: (state, action) => {
      state.logUser = action.payload;
    },
    setOnline: (state, action) => {
      state.online = action.payload;
    },
  },
});

export const { setLogUser, setOnline } = logUserSlice.actions;
export default logUserSlice.reducer;
