import { Link } from "react-router-dom";
import { Input } from "antd";
import styles from "./index.module.scss";

export default function Header({ SearchProductsInput }) {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link to="/" className={styles.logo}>
          <h2 className={styles.name}>WoodMart.</h2>
        </Link>
        <div className={styles.search}>
          <Input.Search
            style={{ border: "none" }}
            placeholder="Searsh for products"
            onChange={(e) => SearchProductsInput(e.target.value)}
          />
        </div>

        <div className={styles.buttons}>
          <Link to="/favorites">
            <button className={styles.button}>
              <i className="bx-favorite bx bxs-heart bx-sm"></i>
            </button>
          </Link>
          <Link to="/cart">
            <button className={styles.button}>
              <i className="bx-cart bx bxs-cart-alt bx-sm"></i>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
