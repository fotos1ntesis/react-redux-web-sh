import { configureStore } from "@reduxjs/toolkit";
import favoritesClince from "./pages/favorite/slices";
import productsClince from "./pages/main/slices";
import cartClince from "./pages/cart/slices";
import productClince from "./pages/product/slices";

export default configureStore({
  reducer: {
    favorites: favoritesClince,
    products: productsClince,
    cart: cartClince,
    product: productClince,
  },
});
