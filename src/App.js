import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/index.scss";

import Home from "./page/home";
import SearchResult from "./page/searchResult";
import Product from "./page/product";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/items/:id">
          <Product />
        </Route>
        <Route path="/items">
          <SearchResult />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
