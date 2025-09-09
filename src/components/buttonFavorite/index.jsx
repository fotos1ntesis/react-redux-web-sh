import React from "react";
import { addToFavorites, deleteFavorites } from "../../pages/favorite/slices";
import { useDispatch, useSelector } from "react-redux";

export default function ButtonFavorite({ product }) {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavoriteProduct = favorites.some((item) => item.id === product.id);

  const onClickFavorite = () => {
    if (favorites.some((el) => el.id === product.id)) {
      dispatch(deleteFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <button
      className={
        isFavoriteProduct
          ? "button-favorite-page-active"
          : "button-favorite-page"
      }
      onClick={() => onClickFavorite(product)}
    >
      <i className="bx bxs-heart bx-md"></i>
    </button>
  );
}
