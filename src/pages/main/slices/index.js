import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params, thunkAPI) => {
    const { searchName, selectedCategory } = params;
    const respons = await fetch(
      `http://localhost:5000/products?q=${searchName}&category_like=${selectedCategory}`
    );
    const result = await respons.json();
    return result;
  }
);
export const productsClince = createSlice({
  name: "productsClince",
  initialState: { products: []},

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productsClince.reducer;
