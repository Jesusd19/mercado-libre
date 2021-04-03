import React from "react";

import ProductDetails from "../components/organisms/product-details/productDetails";
import Header from "../components/organisms/header/header";

const Product = () => {
  return (
    <div className="home">
      <Header />
      <ProductDetails />
    </div>
  );
};

export default Product;
