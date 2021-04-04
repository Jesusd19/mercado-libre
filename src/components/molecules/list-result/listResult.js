import React from "react";
import "./listResult.scss";

import CardProduct from "../../atoms/card-product/cardProduct";


const ListResult = (props) => {
  const {allProducts} = props
  return (
    <section className="o-result">
      <div className="o-result__content">
        {allProducts &&
          allProducts.map((item, index) => (
            <CardProduct item={item} key={`product-${index}`} />
          ))}
      </div>
    </section>
  );
};

export default ListResult;
