import React from "react";
import "./cardProduct.scss";
import { Link } from "react-router-dom";
import { formatNumber } from "../../../utils/formatNumber";

const CardProduct = (props) => {
  const { item } = props;
  return (
    <div className="a-card__product">
      <Link to={`/items/${item.id}`}>
        <div className="a-card__product__img">
          <img src={item.picture} alt="" className="img-product" />
        </div>
      </Link>
      <div className="a-card__product__info">
        <div className="a-card__product__info__header">
          <h2 className="a-card__product__info__header__price">
            {formatNumber(
              item.price.amount +
                (item.price.decimals > 0 &&
                  item.price.decimals / item.price.decimals.toString().length())
            )}
          </h2>
          <span className="a-card__product__info__header__business">
            Capital Federal
          </span>
        </div>
        <Link to={`/items/${item.id}`}>
          <p className="a-card__product__info__title">{item.title}</p>
        </Link>
        <p className="a-card__product__info__stock">Completo unico</p>
      </div>
    </div>
  );
};

export default CardProduct;
