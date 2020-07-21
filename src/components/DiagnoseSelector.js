import React, { useState, useEffect } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const DiagnoseSelector = (props) => {
  const [medParams, setParams] = useState({
    rozpozn_hist: undefined,
    mutacja_aktywujaca_EFGR: undefined,
  });

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
      <UncontrolledDropdown>
        <DropdownToggle caret>rozpoznanie histologiczne</DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            id="rozpozn_hist"
            value="rak gruczołowy"
            onClick={changeParams}
          >
            rak gruczołowy
          </DropdownItem>
          <DropdownItem
            id="rozpozn_hist"
            value="rak wielkokomórkowy"
            onClick={changeParams}
          >
            rak wielkokomórkowy
          </DropdownItem>
          <DropdownItem
            id="rozpozn_hist"
            value="niedrobnokomórkowy NOS"
            onClick={changeParams}
          >
            niedrobnokomórkowy NOS
          </DropdownItem>
          <DropdownItem
            id="rozpozn_hist"
            value="rak płasnonabłonkowy"
            onClick={changeParams}
          >
            rak płasnonabłonkowy
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown>
        <DropdownToggle caret>Obecność mutacji aktywującej EGFR</DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            id="mutacja_aktywujaca_EFGR"
            value="true"
            onClick={changeParams}
          >
            TAK
          </DropdownItem>
          <DropdownItem
            id="mutacja_aktywujaca_EFGR"
            value="false"
            onClick={changeParams}
          >
            NIE
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>

      <h1>
        {medParams.rozpozn_hist} {medParams.mutacja_aktywujaca_EFGR}
      </h1>
    </div>
  );
};

export default DiagnoseSelector;
