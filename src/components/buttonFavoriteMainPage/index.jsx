import React from "react";
import { addToFavorites, deleteFavorites } from "../../pages/favorite/slices";
import { useDispatch, useSelector } from "react-redux";

export default function ButtonFavoriteMainPage({ product }) {
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
    <div
      className={
        isFavoriteProduct ? "button-favorite-active" : "button-favorite"
      }
      onClick={() => onClickFavorite(product)}
    >
      <i className="bx bxs-heart bx-sm"></i>
    </div>
  );
}
