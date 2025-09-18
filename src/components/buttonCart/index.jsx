import React from "react";
import { addToCart, deleteFromCart } from "../../pages/cart/slices";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

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
    <>
      {isCartProduct ? (
        <Button
          onClick={() => onClickCart(product)}
          type="primary"
          block
          danger
          ghost
          style={{ height: "3rem" }}
        >
          Remove from Cart
        </Button>
      ) : (
        <Button
          type="primary"
          block
          style={{ height: "3rem", background: "var( --card-button-color)" }}
          onClick={() => onClickCart(product)}
        >
          Add To Cart
        </Button>
      )}
    </>
  );
}
