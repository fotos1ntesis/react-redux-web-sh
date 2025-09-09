import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCart = createAsyncThunk(
  "products/loadCart",
  async (params, thunkAPI) => {
    const respons = await fetch(`http://localhost:5000/cart`);
    const result = await respons.json();
    return result;
  }
);

export const addToCart = createAsyncThunk(
  "products/addToCart",
  async (product, thunkAPI) => {
    await fetch(`http://localhost:5000/cart`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    thunkAPI.dispatch(loadCart());
  }
);

export const deleteFromCart = createAsyncThunk(
  "products/deleteCart",
  async (id, thunkAPI) => {
    await fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE",
    });
    thunkAPI.dispatch(loadCart());
  }
);

export const updateProductCart = createAsyncThunk(
  "products/updateProductCart",
  async (updatedProduct, thunkAPI) => {
    await fetch(`http://localhost:5000/cart/${updatedProduct.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedProduct),
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    thunkAPI.dispatch(loadCart());
  }
);

export const cartClince = createSlice({
  name: "cartClince",
  initialState: { cartItems: [] },

  extraReducers: (builder) => {
    builder.addCase(loadCart.fulfilled, (state, action) => {
      state.cartItems = action.payload;
    });
  },
});

export default cartClince.reducer;
