import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);

  const totalPrice = cartItems.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  const counterProduct = cartItems.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  return (
    <div className="cart">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((el) => <CartItem key={el.id} product={el} />)
        ) : (
          <span className="notItemsCart">Товаров нет в корзине 🧺</span>
        )}
      </div>
      <div className="counter">
        <div className="info-counter">
          <p>Your shopping cart: {counterProduct} products</p>
          <span>Total: ${totalPrice}</span>
        </div>
        <button
          onClick={() => alert("Access is denied!!")}
          className="shop-cart"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
