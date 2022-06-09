import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userDetail: null,
};
export const userDetailReducerSlice = createSlice({
  name: "userDetailReducer",
  initialState,
  reducers: {
    deleteUserDetail: (state) => {
      state.userDetail = null;
    },
    createUserDetail: (state, action) => {
      state.userDetail = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { deleteUserDetail, createUserDetail } =
  userDetailReducerSlice.actions;

export default userDetailReducerSlice.reducer;
