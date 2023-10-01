import { axiosInstance } from "../../utils/axiosIntance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProduk = createAsyncThunk("produk/getProduk", async () => {
  const response = await axiosInstance.get("products");
  return response.data;
});

export const getProdukById = createAsyncThunk(
  "produk/getProdukById",
  async (id) => {
    const response = await axiosInstance.get(`products/${id}`);
    return response.data;
  }
);
