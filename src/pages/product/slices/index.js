import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadProduct = createAsyncThunk(
  "products/loadProduct",
  async (id, thunkAPI) => {
    const respons = await fetch(`http://localhost:5000/products/${id}`);
    const result = await respons.json();
    return result;
  }
);

export const productClince = createSlice({
  name: "productClince",
  initialState: { product: null },

  extraReducers: (builder) => {
    builder.addCase(loadProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export default productClince.reducer;
