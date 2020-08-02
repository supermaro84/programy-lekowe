import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import Dashboard from "../components/Dashboard";
import Therapy from "../components/Therapy";
import Consum from "../components/consumer";
import AddMedicine from "../components/AddMedicine";
const Header = () => (
  <header className="App-header">
    <h1>
      Programy Lekowe
      <NavLink to="/" activeClassName="is-active" exact={true}>
        <Button color="primary">Strona Główna</Button>
      </NavLink>
      <NavLink to="/therapy" activeClassName="is-active">
        <Button color="primary">Terapia</Button>
      </NavLink>
      <NavLink to="/edit" activeClassName="is-active">
        <Button color="primary">Szukaj leku</Button>
      </NavLink>
      <NavLink to="/add_new" activeClassName="is-active">
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
        <Route path="/therapy" component={Therapy} />
        <Route path="/edit" component={Consum} />
        <Route path="/add_new" component={AddMedicine} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
