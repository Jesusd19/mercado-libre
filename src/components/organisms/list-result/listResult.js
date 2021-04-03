import React, { useState, useEffect } from "react";
import "./listResult.scss";
import { Link } from "react-router-dom";

import { getAllProducts } from "../../../services/products";

const ListResult = () => {
  const [allProducts, setAllProducts] = useState([]);

  const getResult = async () => {
    const word = window.location.search.split("=")[1];
    const products = await getAllProducts(word);
    if (products.data.item) {
      window.location.href = `/items/${products.data.item.id}`
    }else {
      setAllProducts(products.data.items);
    }
  };

  useEffect(() => {
    getResult();
  }, []);

  return (
    <section className="o-result">
      <div className="o-result__content">
        {allProducts &&
          allProducts.map((item, index) => (
            <div className="o-card__product" key={`product-${index}`}>
              <Link to={`/items/${item.id}`}>
                <div className="o-card__product__img">
                  <img src={item.picture} alt="" className="img-product" />
                </div>
              </Link>
              <div className="o-card__product__info">
                <div className="o-card__product__info__header">
                  <h2 className="o-card__product__info__header__price">
                    $ {item.price.amount}
                  </h2>
                  <span className="o-card__product__info__header__business">
                    Capital Federal
                  </span>
                </div>
                <Link to={`/items/${item.id}`}>
                  <p className="o-card__product__info__title">{item.title}</p>
                </Link>
                <p className="o-card__product__info__stock">Completo unico</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ListResult;
