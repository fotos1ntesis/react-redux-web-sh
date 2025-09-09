import "./css/Main.css";

import Header from "./components/header";
import MainPage from "./pages/main";
import FavoritePage from "./pages/favorite";
import CartPage from "./pages/cart";

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchFavorites } from "./pages/favorite/slices";
import { fetchProducts } from "./pages/main/slices";
import { loadCart } from "./pages/cart/slices";
import ProductPage from "./pages/product";

export default function Main() {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    dispatch(fetchProducts({ searchName, selectedCategory }));
  }, [dispatch, searchName, selectedCategory]);

  useEffect(() => {
    dispatch(loadCart());
    dispatch(fetchFavorites());
  }, [dispatch]);

  const SearchProductsInput = (text) => {
    setSearchName(text);
  };

  const HandleSwitchCategory = (textCategory) => {
    if (textCategory === selectedCategory) {
      setSelectedCategory("");
      return;
    }
    setSelectedCategory(textCategory);
  };

  return (
    <>
      <Header SearchProductsInput={SearchProductsInput} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                selectedCategory={selectedCategory}
                HandleSwitchCategory={HandleSwitchCategory}
              />
            }
          />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>
    </>
  );
}
