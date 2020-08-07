import React, { useState, useContext, useEffect } from "react";
import { API } from "../components/api-service";
import { TokenContext } from "../routers/AppRouter";
import { useCookies } from "react-cookie";
const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginView, setIsLoginView] = useState(true);

  const [token, setToken] = useCookies(["pl-token"]);
  const [authUsername, setAuthUsername] = useCookies(["username"]);

  useEffect(() => {
    console.log(token);
    if (token["pl-token"]) window.location.href = "/dashboard";
  }, [token]);

  const loginClicked = () => {
    API.loginUser({ username, password })
      .then((resp) => {
        if (resp.token === undefined) alert("Nieudana próba logowania");
        else {
          setToken("pl-token", resp.token);
          setAuthUsername("username", resp.name);
        }
      })

      .catch((error) => console.log(error));
  };

  const registerClicked = () => {
    API.registerUser({ username, password })
      .then(() => loginClicked())
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {isLoginView ? <h1>Login</h1> : <h1>Rejestracja</h1>}

      <label htmlFor="username">Użytkownik</label>
      <br />
      <input
        id="username"
        type="text"
        placeholder="login"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="password">Hasło</label>
      <br />
      <input
        id="password"
        type="password"
        placeholder="hasło"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      {isLoginView ? (
        <button id="login" onClick={loginClicked}>
          Login
        </button>
      ) : (
        <button id="login" onClick={registerClicked}>
          Rejestracja
        </button>
      )}

      {isLoginView ? (
        <h3>
          Nie posiadasz konta?{" "}
          <h3
            onClick={() => setIsLoginView(false)}
            style={{ textDecoration: "underline", color: "blue" }}
          >
            Kliknij tutaj !
          </h3>
        </h3>
      ) : (
        <h3>
          Masz konto?{" "}
          <h3
            onClick={() => setIsLoginView(true)}
            style={{ textDecoration: "underline", color: "blue" }}
          >
            Zaloguj się!
          </h3>
        </h3>
      )}
    </div>
  );
};

export default Auth;
