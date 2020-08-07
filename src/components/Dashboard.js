import React from "react";
import Header from "./Header";
import { useCookies } from "react-cookie";

const Dashboard = () => {
  const [authUsername] = useCookies(["username"]);
  return (
    <div>
      <Header />
      <h1>Strona główna</h1>
      <h1>Witaj {authUsername["username"]}!</h1>
    </div>
  );
};

export default Dashboard;
