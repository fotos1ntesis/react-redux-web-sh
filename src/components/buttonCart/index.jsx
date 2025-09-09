import React from "react";
import { addToCart, deleteFromCart } from "../../pages/cart/slices";
import { useDispatch, useSelector } from "react-redux";

export default function ButtonCart({ product }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const isCartProduct = cartItems.some((item) => item.id === product.id);

  const onClickCart = () => {
    if (cartItems.some((el) => el.id === product.id)) {
      dispatch(deleteFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <button
      onClick={() => onClickCart(product)}
      className={isCartProduct ? "card-button-page-active" : "card-button-page"}
    >
      {isCartProduct ? "Remove from Cart" : "Add To Cart"}
    </button>
  );
}
