import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFavorites = createAsyncThunk(
  "products/fetchFavorites",
  async (params, thunkAPI) => {
    const respons = await fetch(`http://localhost:5000/favorites`);
    const result = await respons.json();
    return result;
  }
);

export const addToFavorites = createAsyncThunk(
  "products/addToFavorites",
  async (product, thunkAPI) => {
    await fetch(`http://localhost:5000/favorites`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    thunkAPI.dispatch(fetchFavorites());
  }
);

export const deleteFavorites = createAsyncThunk(
  "products/deleteFavorites",
  async (id, thunkAPI) => {
    await fetch(`http://localhost:5000/favorites/${id}`, {
      method: "DELETE",
    });
    thunkAPI.dispatch(fetchFavorites());
  }
);

export const favoritesClince = createSlice({
  name: "favoritesClince",
  initialState: { favorites: [] },

  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.favorites = action.payload;
    });
  },
});

export default favoritesClince.reducer;
