import { useCookies } from "react-cookie";

const TOKEN = "60664998609baa5ac1b9f447ba6c5e9791b8432e";

export class API {
  static loginUser(body) {
    return fetch("https://programy-lekowe-api.herokuapp.com/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static registerUser(body) {
    return fetch("https://programy-lekowe-api.herokuapp.com/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => this.loginUser);
  }

  static addNewMedicine(body) {
    return fetch("https://programy-lekowe-api.herokuapp.com/api/therapies/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${TOKEN}`,
      },
      body: JSON.stringify(body),
    })
      .then((resp) => {
        resp.json();
        //console.log(resp);
      })
      .then((resp) => console.log(resp));
  }
}
