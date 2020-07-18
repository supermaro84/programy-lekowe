import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import Dashboard from "../components/Dashboard";
import Diagnose from "../components/Diagnose";

const Header = () => (
  <header className="App-header">
    <h1>
      Programy Lekowe
      <NavLink to="/" activeClassName="is-active" exact={true}>
        <Button color="primary">Strona Główna</Button>
      </NavLink>
      <NavLink to="/diagnose" activeClassName="is-active">
        <Button color="primary">Terapia</Button>
      </NavLink>
      <NavLink to="/edit" activeClassName="is-active">
        <Button color="primary">Szukaj leku</Button>
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        <Button color="primary">Dodaj lek</Button>
      </NavLink>
    </h1>
  </header>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/diagnose" component={Diagnose} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
