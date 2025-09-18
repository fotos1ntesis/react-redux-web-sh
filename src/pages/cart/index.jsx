import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import style from "./index.module.scss";

export default function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);

  const totalPrice = cartItems.reduce(
    (acc, product) => acc + product.quantity * product.discount,
    0
  );

  const counterProduct = cartItems.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  return (
    <section className={style.page}>
      <div className={style.products}>
        {cartItems.length ? (
          cartItems.map((el) => <CartItem key={el.id} product={el} />)
        ) : (
          <span className={style.notItemsCart}>Товаров нет в корзине 🧺</span>
        )}
      </div>
      <div className={style.counter}>
        <div className={style.blockCounter}>
          <p className={style.counterProduct}>
            Your shopping cart: {counterProduct} products
          </p>
          <span className={style.totalPrice}>Total: ${totalPrice}</span>
        </div>
        <button
          onClick={() => alert("Access is denied!!")}
          className={style.button}
        >
          Checkout
        </button>
      </div>
    </section>
  );
}
