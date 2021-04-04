import React, { useState } from "react";
import "./searcher.scss";

import icSearch from "../../../assets/image/ic_Search.png";

const Searcher = (props) => {
  const [wordSearch, setWordSearch] = useState("");
  const { actionClick } = props;
  return (
    <div className="a-searcher">
      <input
        placeholder="Nunca dejes de buscar"
        className="a-searcher__input"
        value={wordSearch}
        onChange={(e) => setWordSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && actionClick(wordSearch)}
      />
      <div className="a-searcher__content">
        <img
          src={icSearch}
          alt="Buscar"
          className="a-searcher__content__btn"
          onClick={() => actionClick(wordSearch)}
        />
      </div>
    </div>
  );
};

export default Searcher;
