import { useSelector } from "react-redux";
import Product from "../../components/product/Product";

export default function FavoritePage() {
  const favorites = useSelector((state) => state.favorites.favorites);
  return (
    <div className="products">
      {favorites.length ? (
        favorites.map((el) => <Product key={el.id} product={el} />)
      ) : (
        <span
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
            margin: "0 auto",
            fontSize: "1.5rem",
          }}
        >
          Товаров нет в избранном ❤️
        </span>
      )}
    </div>
  );
}
