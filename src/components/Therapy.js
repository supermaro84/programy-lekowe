import React, { useState } from "react";
import Dane from "../dane.json";
import DiagnoseSelector from "./DiagnoseSelector";
import Diagnose from "./Diagnose";

const Therapy = (props) => {
  const [paramList, setParamList] = useState(undefined);

  const getParams = (paramList) => {
    setParamList(paramList);
    console.log("setting param list");
  };
  return (
    <div>
      <DiagnoseSelector getParams={getParams} />
      <Diagnose newParamList={paramList} />
    </div>
  );
};

export default Therapy;
