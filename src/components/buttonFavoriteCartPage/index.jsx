import React from "react";
import styles from "./index.module.scss";
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
      className={isFavoriteProduct ? styles.active : styles.default}
    >
      <i className="bx bxs-heart bx-xs"></i>
    </button>
  );
}
