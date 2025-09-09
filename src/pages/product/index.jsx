import "../../css/ProductPage.css";

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
    <div className="productpage">
      <img width={420} height={550} src={img} alt={name} />
      <div className="product_">
        <div className="info-block-product">
          <h1>{name}</h1>
          <span className="description">{description}</span>
          <p className="descriptionpro">{descriptionpro}</p>
          <div className="rating">
            <i className="bx bxs-star" style={{ color: "orange" }}></i>
            {rating}
          </div>
          <div className="price">
            <s className="price_">${price}</s>
            <span className="discount">${discount}</span>
          </div>
        </div>
        <div className="butns-product-page">
          <ButtonCart product={product} />
          <ButtonFavorite product={product} />
        </div>
      </div>
    </div>
  );
}
