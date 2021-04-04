import React from "react";
import "./header.scss";
import Logo from "../../../assets/image/Logo_ML.png";

import Searcher from "../../atoms/searcher/searcher";

import { Link } from "react-router-dom";

const Header = () => {
  

  const handleclick = (wordSearch) => {
    console.log("ENTRO")
      if (wordSearch !== "") {
          window.location.href = `/items?search=${wordSearch}`;          
      }
  };

  return (
    <section className="o-header">
      <div className="o-header__content">
        <Link to="/">
          <img src={Logo} alt="Mercado libre" className="o-header__logo" />
        </Link>
        <Searcher actionClick={(word) => handleclick(word)} />
      </div>
    </section>
  );
};

export default Header;
