import style from "./index.module.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
    <div className={style.product}>
      <Link to={`/product/${id}`} className={style.link}>
        <img width={125} src={img} alt={name} />
      </Link>
      <div className={style.productBlock}>
        <Link to={`/product/${id}`} className={style.link}>
          <h4>{name}</h4>
          <p className={style.description}>{description}</p>

          <div className={style.rating}>
            <i className="bx bxs-star" style={{ color: "orange" }}></i>
            {rating}
          </div>
        </Link>
        <div className={style.button}>
          <ButtonFavoriteCartPage product={product} />
          <button
            onClick={() => dispatch(deleteFromCart(product.id))}
            className={style.trash}
          >
            <i className="bx bx-trash bx-xs"></i>
          </button>
        </div>
      </div>
      <div className={style.quantity}>
        <button onClick={handleChangeMinusQuantity}>
          <i className="bx bx-minus bx-xs"></i>
        </button>
        <span className={style.count}>{quantity}</span>
        <button onClick={handleChangePlusQuantity}>
          <i class="bx bx-plus bx-xs"></i>
        </button>
      </div>
      <div className={style.price}>
        <span className={style.discount}>${discount * quantity}</span>
      </div>
    </div>
  );
}
