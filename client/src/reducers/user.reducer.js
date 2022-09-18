import { createSlice } from "@reduxjs/toolkit";
//

let stringUser = sessionStorage.getItem("user");
let user = JSON.parse(stringUser);
console.log("userrrrrrr : ", user);
let initialState = user ? { value: user } : {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userInfo: (state, action) => {
      console.log("state : ", state);
      state.value = action.payload;
      console.log("payload", action.payload);
    },
  },
});

// Export des actions
export const { userInfo } = userSlice.actions;

// Export du reducer
export default userSlice.reducer;
