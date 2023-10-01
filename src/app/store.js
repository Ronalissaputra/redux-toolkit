import { configureStore } from "@reduxjs/toolkit";
import brandReducers from "../features/brandSlice";
import produkReducer from "../features/produkSlice";

export const store = configureStore({
  reducer: {
    brand: brandReducers,
    produk: produkReducer,
  },
});
