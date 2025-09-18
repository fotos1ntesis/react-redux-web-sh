import style from "./index.module.scss";
import Product from "./Product";
import { useSelector } from "react-redux";

export default function Products() {
  const products = useSelector((state) => state.products.products);

  return (
    <section className={style.products}>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </section>
  );
}
