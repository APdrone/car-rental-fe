import { createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "./type";

const initialState: IHomePageState = {
  topcars: [],
};

export const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopCars: (state, action) => {
      state.topcars = action.payload;
    },
  },
});

export const { setTopCars } = homePageSlice.actions;

export default homePageSlice.reducer;
