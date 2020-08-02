const TOKEN = "5e46449a2bb90a1d86f07d9d57d15c9cd98c3bdd";

export class API {
  static addNewMedicine(body) {
    return fetch("http://127.0.0.1:8000/api/therapies/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${TOKEN}`,
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((resp) => console.log(resp));
  }
}
