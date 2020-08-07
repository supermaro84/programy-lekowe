import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import Dashboard from "../components/Dashboard";
import Therapy from "../components/Therapy";
import Consum from "../components/consumer";
import AddMedicine from "../components/AddMedicine";
import Auth from "../components/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useCookies } from "react-cookie";
import { Tooltip, AppBar, Tabs, Tab } from "@material-ui/core";
const Header = () => {
  const [token, setToken, deleteToken] = useCookies(["pl-token"]);
  const [username, setusername, deleteUsername] = useCookies(["username"]);

  const logoutUser = () => {
    console.log("");
    deleteToken(["pl-token"]);
    deleteToken(["username"]);
  };

  useEffect(() => {
    if (!token["pl-token"]) window.location.href = "/";
  }, [token]);

  return (
    <header className="App-header">
      <h1>
        Programy Lekowe
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}>
          <Button className="nav-button" color="primary">
            Strona Główna
          </Button>
        </NavLink>
        <NavLink to="/therapy" activeClassName="is-active">
          <Button className="nav-button" color="primary">
            Rak płuca
          </Button>
        </NavLink>
        <Tooltip title="Wyloguj się">
          <div className="userIcon">
            <i>{username["username"]} </i>
            <FontAwesomeIcon icon={faSignOutAlt} onClick={logoutUser} />
          </div>
        </Tooltip>
      </h1>
    </header>
  );
};

export default Header;
