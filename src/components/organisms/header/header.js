import React, { useState } from "react";
import "./header.scss";

import Logo from "../../../assets/image/Logo_ML.png";
import icSearch from "../../../assets/image/ic_Search.png";

import { Link } from "react-router-dom";

const Header = () => {
  const [wordSearch, setWordSearch] = useState("");

  const handleclick = () => {
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
        <div className="o-header__search">
          <input
            placeholder="Nunca dejes de buscar"
            className="o-header__search__input"
            value={wordSearch}
            onChange={(e) => setWordSearch(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleclick()}
          />
          <div className="o-header__search__content">
            <img
              src={icSearch}
              alt="Buscar"
              className="o-header__search__content__btn"
              onClick={handleclick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
