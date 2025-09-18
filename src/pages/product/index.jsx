import style from "./index.module.scss";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadProduct } from "./slices";
import ButtonCart from "../../components/buttonCart";
import ButtonFavorite from "../../components/buttonFavorite";

export default function ProductPage() {
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadProduct(id));
  }, [dispatch, id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { name, img, description, price, discount, rating, descriptionpro } =
    product;

  return (
    <section className={style.page}>
      <img width={420} height={550} src={img} alt={name} />
      <div className={style.product}>
        <div className={style.blockProduct}>
          <h1>{name}</h1>
          <span className={style.topDescription}>{description}</span>
          <p className={style.bottomDescription}>{descriptionpro}</p>
          <div className={style.rating}>
            <i className="bx bxs-star" style={{ color: "orange" }}></i>
            {rating}
          </div>
          <div className={style.blockPrice}>
            <s className={style.price}>${price}</s>
            <span className={style.discount}>${discount}</span>
          </div>
        </div>
        <div className={style.buttons}>
          <ButtonCart product={product} />
          <ButtonFavorite product={product} />
        </div>
      </div>
    </section>
  );
}
