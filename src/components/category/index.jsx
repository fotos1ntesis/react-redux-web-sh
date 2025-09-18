import style from "./index.module.scss";
import i1 from "./../../img/category/i-1.png";
import m1 from "./../../img/category/m-1.png";

export default function Category({ HandleSwitchCategory, selectedCategory }) {
  return (
    <section className={style.category}>
      <div className={style.categoryList}>
        <span>
          <div
            className={
              selectedCategory === "Smartphone" ? style.active : style.default
            }
            onClick={() => HandleSwitchCategory("Smartphone")}
          >
            <img width={85} height={100} src={i1} alt="категория №1" />
          </div>
          <p className={style.name}>Apple iPhone</p>
        </span>

        <span>
          <div
            className={
              selectedCategory === "Laptop" ? style.active : style.default
            }
            onClick={() => HandleSwitchCategory("Laptop")}
          >
            <img width={110} src={m1} alt="категория №2" />
          </div>
          <p className={style.name}>Apple MacBook</p>
        </span>
      </div>
    </section>
  );
}
