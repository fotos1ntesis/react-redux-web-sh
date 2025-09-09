import { Link } from "react-router-dom";
import "./../../css/Header.css";

export default function Header({ SearchProductsInput }) {
  return (
    <header>
      <div className="header-content">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>WoodMart.</h2>
        </Link>
        <div className="search">
          <input
            onChange={(e) => SearchProductsInput(e.target.value)}
            type="text"
            placeholder="Searsh for products"
          />
          <button className="button-search">
            <i
              className="bx bx-search-alt-2 bx-xs"
              style={{ color: "white" }}
            ></i>
          </button>
        </div>
        <div className="header-buttons">
          <Link to="/favorites">
            <button className="header-button favorite">
              <i className="bx-favorite bx bxs-heart bx-sm"></i>
            </button>
          </Link>
          <Link to="/cart">
            <button className="header-button cart">
              <i className="bx-cart bx bxs-cart-alt bx-sm"></i>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
