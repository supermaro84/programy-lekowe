import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import Dashboard from "../components/Dashboard";
import Therapy from "../components/Therapy";
import Consum from "../components/consumer";
import AddMedicine from "../components/AddMedicine";
import Auth from "../components/Auth";
import { CookiesProvider } from "react-cookie";

export const TokenContext = createContext(null);

const AppRouter = () => {
  const [token, setToken] = useState("");
  return (
    <CookiesProvider>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Auth} exact={true} />
            <Route path="/dashboard" component={Dashboard} exact={true} />
            <Route path="/therapy" component={Therapy} />
            <Route path="/edit" component={Consum} />
            <Route path="/add_new" component={AddMedicine} />
          </Switch>
        </div>
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default AppRouter;
