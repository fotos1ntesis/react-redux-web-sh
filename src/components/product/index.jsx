import Product from "./Product";
import { useSelector} from "react-redux";

export default function Products() {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="products">
      {products.map((product) => (
        <Product
          product={product}
        />
      ))}
    </div>
  );
}
