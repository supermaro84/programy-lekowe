import React, { useState, useEffect } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ParamList from "../parameters.json";

const cloneParamList = Object.assign({}, ParamList);
const clearParamList = (ParamList) => {
  Object.keys(ParamList).forEach(function (key) {
    ParamList[key] = undefined;
  });
  return ParamList;
};
//console.log(cloneParamList);

const DiagnoseSelector = (props) => {
  const [medParams, setParams] = useState(clearParamList(ParamList));

  const changeParams = (e) => {
    setParams({ ...medParams, [e.target.id]: e.target.value });
    document.getElementById("button" + e.target.id).style.color = "red";
  };
  useEffect(() => {
    //Update the document title using the browser API
    props.getParams(medParams);
  });

  const getParamValue = (paramName) => {
    console.log(paramName);
    medParams.map((param) => {
      console.log(paramName);
      if (param.param === paramName) return param.value;
    });
  };

  return (
    <div>
      <h1>Wybór parametrów</h1>
      <div className="selection_box">
        {Object.entries(cloneParamList).map((param) => {
          return (
            <UncontrolledDropdown>
              <DropdownToggle id={"button" + param[0]} caret>
                {param[0]}
              </DropdownToggle>
              <DropdownMenu>
                {param[1].map((el) => {
                  let data = "";
                  if (typeof el === "boolean")
                    el ? (data = "TAK") : (data = "NIE");
                  else data = el;
                  return (
                    <DropdownItem
                      id={param[0]}
                      value={el}
                      onClick={changeParams}
                    >
                      {data}
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
              <div className="selectedElement">{medParams[param[0]]}</div>
            </UncontrolledDropdown>
          );
        })}
      </div>
    </div>
  );
};

export default DiagnoseSelector;
