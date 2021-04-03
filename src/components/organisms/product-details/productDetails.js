import React, { useState, useEffect } from "react";
import "./productDetails.scss";

import { getProduct } from "../../../services/products";
const ProductDetails = () => {
  const [product, setProduct] = useState({});

  const getProductDetails = async () => {
    const word = window.location.pathname.split("/");
    const produc = await getProduct(word[word.length - 1]);
    // console.log(produc.data.item);
    setProduct(produc.data.item);
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <div className="o-product-details">
      <div className="o-product-details__content">
        <div className="o-product-details__content__desc">
          <div className="o-product-details__content__desc__img">
            <img src={product.picture} alt="" className="img-product" />
          </div>
          <div className="o-product-details__content__desc__info">
            <h3>Descripción del producto</h3>
            <p>
              {product.description}
            </p>
          </div>
        </div>
        <div className="o-product-details__content__details">
          <p>{product.condition === "new" && "Nuevo"}</p>
          <h2>{product.title}</h2>
          <h1>$ {product.price && product.price.amount} </h1>
          <div className="o-product-details__content__details__btn">
            Comprar
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
