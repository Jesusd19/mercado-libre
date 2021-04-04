import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import ProductDetails from "../components/organisms/product-details/productDetails";
import Header from "../components/organisms/header/header";
import Breadcrumb from "../components/atoms/breadcrumb/breadcrumb";

import { getProduct } from "../services/products";

const Product = () => {
  const [product, setProduct] = useState({});
  const [breadcrums, setBreadcrums] = useState([]);

  const getProductDetails = async () => {
    const word = window.location.pathname.split("/");
    const produc = await getProduct(word[word.length - 1]);
    let content = JSON.parse(localStorage.getItem('categories'))
    setBreadcrums(content)
    setProduct(produc.data.item);
  };

  useEffect(() => {
    getProductDetails();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Producto | MercadoLibre.com.co</title>
        <meta
          name="description"
          content={`Cómpralo en Mercado Libre - Paga en cuotas - 
          Envío gratis a nivel nacional. Encuentra más productos.`}
        ></meta>
      </Helmet>
      <Header />
      <Breadcrumb content={breadcrums} title={product.title}/>
      <ProductDetails product={product}/>
    </div>
  );
};

export default Product;
