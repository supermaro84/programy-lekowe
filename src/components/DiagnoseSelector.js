import React, { useState, useEffect } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const DiagnoseSelector = (props) => {
  const [medParams, setParams] = useState({
    param1: "",
    param2: "",
    param3: "",
  });

  const changeParams = (e) => {
    setParams({ ...medParams, [e.target.id]: e.target.innerText });
  };
  useEffect(() => {
    //Update the document title using the browser API
    props.getParams(medParams);
  });

  const passParams = () => {
    let parametry = medParams.param1;
    props.getParams(parametry);
    console.log(medParams.param1);
  };
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
      <UncontrolledDropdown>
        <DropdownToggle caret>Parameter 1</DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="param1" onClick={changeParams}>
            0
          </DropdownItem>
          <DropdownItem id="param1" onClick={changeParams}>
            1
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown>
        <DropdownToggle caret>Parameter 2</DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="param2" onClick={changeParams}>
            0
          </DropdownItem>
          <DropdownItem id="param2" onClick={changeParams}>
            1
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown>
        <DropdownToggle caret>Parameter 3</DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="param3" onClick={changeParams}>
            0
          </DropdownItem>
          <DropdownItem id="param3" onClick={changeParams}>
            1
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <h1>
        {medParams.param1} {medParams.param2} {medParams.param3}
      </h1>
    </div>
  );
};

export default DiagnoseSelector;
