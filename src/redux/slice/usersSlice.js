import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    addUsers: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUsers } = usersSlice.actions;
export default usersSlice.reducer;
