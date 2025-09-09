import "./../../css/Category.css";
import i1 from "./../../img/category/i-1.png";
import m1 from "./../../img/category/m-1.png";
export default function Category({ HandleSwitchCategory, selectedCategory }) {
  return (
    <div className="category">
      <h4>Category</h4>
      <div className="category-list">
        <span>
          <div
            className={
              selectedCategory === "Smartphone" ? "active" : "notactive"
            }
            onClick={() => HandleSwitchCategory("Smartphone")}
          >
            <img width={85} height={100} src={i1} alt="категория №1" />
          </div>
          <p className="name">Apple iPhone</p>
        </span>

        <span>
          <div
            className={selectedCategory === "Laptop" ? "active" : "notactive"}
            onClick={() => HandleSwitchCategory("Laptop")}
          >
            <img width={110} src={m1} alt="категория №2" />
          </div>
          <p className="name">Apple MacBook</p>
        </span>
      </div>
    </div>
  );
}
