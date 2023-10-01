import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: ["Toyota", "honda", "Mitsubishi", "Daihatsu"],
  kategory: "Cars",
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
});

export default brandSlice.reducer;
