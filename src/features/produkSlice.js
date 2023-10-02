import { createSlice } from "@reduxjs/toolkit";
import {
  createProduk,
  getProduk,
  getProdukById,
} from "../api/produk/produkService";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const produkSlice = createSlice({
  name: "produk",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProduk.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getProduk.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getProduk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getProdukById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getProdukById.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getProdukById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createProduk.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createProduk.fulfilled, (state, action) => {
        state.status = "success";
        state.data.push(action.payload);
      })
      .addCase(createProduk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default produkSlice.reducer;
