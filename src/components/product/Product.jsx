import { Link } from "react-router-dom";
import "./../../css/Product.css";
import ButtonFavoriteMainPage from "../buttonFavoriteMainPage";

export default function Product({ product }) {
  const { name, img, description, rating, price, discount, id } = product;
  return (
    <div className="product">
      <ButtonFavoriteMainPage
        product={product}
        // favoriteProducts={favorites.map((product) => product.id)}
      />
      <img style={{ margin: "0 auto" }} width={200} src={img} alt={name} />
      <h4>{name}</h4>
      <p>{description}</p>
      <div className="rating">
        <i className="bx bxs-star" style={{ color: "orange" }}></i>
        {rating}
      </div>
      <div className="price">
        <s className="price_">${price}</s>
        <span className="discount">${discount}</span>
      </div>
      <Link to={`/product/${id}`}>
        <button className="card-button">View the product</button>
      </Link>
    </div>
  );
}
