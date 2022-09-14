import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Export des actions
export const { userInfo } = userSlice.actions;

// Export du reducer
export default userSlice.reducer;
