import style from "./index.module.scss";
import { Link } from "react-router-dom";
import ButtonFavoriteMainPage from "../buttonFavoriteMainPage";
import { Button } from "antd";

export default function Product({ product }) {
  const { name, img, description, rating, price, discount, id } = product;
  return (
    <div className={style.product}>
      <ButtonFavoriteMainPage product={product} />
      <img style={{ margin: "0 auto" }} width={200} src={img} alt={name} />
      <h4>{name}</h4>
      <p className={style.description}>{description}</p>
      <div className={style.rating}>
        <i className="bx bxs-star" style={{ color: "orange" }}></i>
        {rating}
      </div>
      <div className={style.priceblock}>
        <s className={style.price}>${price}</s>
        <span className={style.discount}>${discount}</span>
      </div>
      <Link to={`/product/${id}`}>
        <Button
          type="primary"
          style={{
            height: "2.4rem",
            background: "var( --card-button-color)",
            fontSize: "0.8rem",
          }}
          block
        >
          View the product
        </Button>
      </Link>
    </div>
  );
}
