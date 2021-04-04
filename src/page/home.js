import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/organisms/header/header";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Mercado Libre | Buscador</title>
        <meta name="description" content={"La comunidad de compra y venta online más grande de América Latina."}></meta>
        <meta name="keywords" content="Mercado, Mercado Libre, Compra, Venta"/>
        <meta name="robots" content="index, follow"/>
      </Helmet>
      <Header />
    </div>
  );
};

export default Home;
