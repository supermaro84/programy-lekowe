import React, { useState, useEffect } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  multi,
} from "reactstrap";
import ParamList from "../parameters.json";
import { API } from "./api-service";

const cloneParamList = Object.assign({}, ParamList);
const clearParamList = (ParamList) => {
  Object.keys(ParamList).forEach(function (key) {
    ParamList[key] = undefined;
  });
  return ParamList;
};

//console.log(cloneParamList);

const AddMedicine = () => {
  //useEffect(() => console.log(ParamList));

  const [name, setName] = useState("");
  const [rozpoznanie, setRozpoznanie] = useState([]);

  const appendCancerType = (e) => {
    if (e.target.checked) {
      rozpoznanie.push(e.target.value);
    } else if (rozpoznanie.includes(e.target.value)) {
      rozpoznanie.splice(rozpoznanie.indexOf(e.target.value), 1);
    }
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const wyslij = (e) => {
    e.preventDefault();
    API.addNewMedicine({ name, rozpoznanie }).then((resp) => console.log(resp));

    console.log((name: name), (rozpoznanie: rozpoznanie));
  };

  return (
    <div>
      <h1>Dodaj lek</h1>
      <form onSubmit={wyslij}>
        <input
          id="name"
          type="text"
          placeholder="wprowadź nazwe leku"
          onChange={changeName}
        />
        <div id="checkboxes">
          <label for="one">
            <input
              type="checkbox"
              id="one"
              value="rak gruczołowy"
              onClick={appendCancerType}
            />
            rak gruczołowy
          </label>
          <label for="two">
            {" "}
            <input
              type="checkbox"
              id="two"
              value="rak wielkokomórkowy"
              onClick={appendCancerType}
            />
            rak wielkokomórkowy
          </label>
          <label for="three">
            <input
              type="checkbox"
              id="three"
              value="niedrobnokomórkowy NOS"
              onClick={appendCancerType}
            />
            niedrobnokomórkowy NOS
          </label>
          <label for="four">
            <input
              type="checkbox"
              id="four"
              value="rak płasnonabłonkowy"
              onClick={appendCancerType}
            />
            rak płasnonabłonkowy
          </label>
        </div>
        <input type="submit" value="send" />
      </form>
    </div>
  );
};

export default AddMedicine;
