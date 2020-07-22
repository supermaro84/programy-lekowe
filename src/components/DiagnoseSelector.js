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
      <h1>Wybor parametrow</h1>
      <div>
        {Object.entries(cloneParamList).map((param) => {
          return (
            <UncontrolledDropdown>
              <DropdownToggle caret>{param[0]}</DropdownToggle>
              <DropdownMenu>
                {param[1].map((el) => {
                  return (
                    <DropdownItem
                      id={param[0]}
                      value={el}
                      onClick={changeParams}
                    >
                      {el}
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </UncontrolledDropdown>
          );
        })}
      </div>
    </div>
  );
};

export default DiagnoseSelector;
