import { useSelector } from "react-redux";
import Product from "../../components/product/Product";
import style from "./../../components/product/index.module.scss";

export default function FavoritePage() {
  const favorites = useSelector((state) => state.favorites.favorites);
  return (
    <section className={style.products}>
      {favorites.length ? (
        favorites.map((el) => <Product key={el.id} product={el} />)
      ) : (
        <span className={style.notItemsFavoretiPage}>
          Товаров нет в избранном ❤️
        </span>
      )}
    </section>
  );
}
