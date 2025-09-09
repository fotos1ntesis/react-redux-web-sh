import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./../../css/CartItems.css";
import { deleteFromCart, updateProductCart } from "./slices";
import ButtonFavoriteCartPage from "../../components/buttonFavoriteCartPage";

export default function CartItem({ product }) {
  const dispatch = useDispatch();

  const { name, img, description, rating, discount, quantity, id } = product;

  const handleChangePlusQuantity = () => {
    dispatch(updateProductCart({ ...product, quantity: quantity + 1 }));
  };

  const handleChangeMinusQuantity = () => {
    if (quantity > 1) {
      dispatch(updateProductCart({ ...product, quantity: quantity - 1 }));
    }
  };

  return (
    <div className="cart-item">
      <Link to={`/product/${id}`} className="linkcart">
        <img width={125} src={img} alt={name} />
      </Link>
      <div className="info-block">
        <Link to={`/product/${id}`} className="linkcart">
          <h4>{name}</h4>
          <p>{description}</p>

          <div className="rating">
            <i className="bx bxs-star" style={{ color: "orange" }}></i>
            {rating}
          </div>
        </Link>
        <div className="buttons-cart">
          <ButtonFavoriteCartPage product={product} />
          <button
            onClick={() => dispatch(deleteFromCart(product.id))}
            className="trash"
          >
            <i className="bx bx-trash bx-xs"></i>
          </button>
        </div>
      </div>
      <div className="quantity">
        <button onClick={handleChangeMinusQuantity}>
          <i className="bx bx-minus bx-xs"></i>
        </button>
        <span>{quantity}</span>
        <button onClick={handleChangePlusQuantity}>
          <i class="bx bx-plus bx-xs"></i>
        </button>
      </div>
      <div className="price">
        <span className="discount">${discount * quantity}</span>
      </div>
    </div>
  );
}
