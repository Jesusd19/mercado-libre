import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Header from "../components/organisms/header/header";
import ListResult from "../components/molecules/list-result/listResult";
import Breadcrumb from "../components/atoms/breadcrumb/breadcrumb";

import { getAllProducts } from "./  ../../../services/products";

const SearchResult = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [breadcrums, setBreadcrums] = useState([]);
  const getResult = async () => {
    const word = window.location.search.split("=")[1];
    const products = await getAllProducts(word);
    if (products.data.item) {
      window.location.href = `/items/${products.data.item.id}`;
    } else {
      setAllProducts(products.data.items);
      setBreadcrums(products.data.categories)
      localStorage.setItem('categories', JSON.stringify(products.data.categories))
    }
  };

  useEffect(() => {
    getResult();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Lista de Productos | MercadoLibre.com.co</title>
        <meta
          name="description"
          content={`Encuentra los mejores productos en MercadoLibre.com.co! 
          Entre y conozca nuestras increíbles ofertas y promociones. Descubre la mejor forma de comprar online.`}
        ></meta>
      </Helmet>
      <Header />
      <Breadcrumb content={breadcrums}/>
      <ListResult allProducts={allProducts} />
    </div>
  );
};

export default SearchResult;
