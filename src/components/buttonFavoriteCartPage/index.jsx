import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, deleteFavorites } from "../../pages/favorite/slices";

export default function ButtonFavoriteCartPage({ product }) {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavoriteProduct = favorites.some((item) => item.id === product.id);

  const onClickFavorite = (product) => {
    if (favorites.some((el) => el.id === product.id)) {
      dispatch(deleteFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <button
      onClick={() => onClickFavorite(product)}
      className={
        isFavoriteProduct
          ? "button-favorite-cart-active"
          : "button-favorite-cart"
      }
    >
      <i className="bx-favorite bx bxs-heart bx-xs"></i>
    </button>
  );
}
