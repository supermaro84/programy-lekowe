import React, { useState, useEffect } from "react";
import Dane from "../dane.json";

const Diagnose = (props) => {
  let dane = Dane;
  const [params, setParams] = useState({
    param1: "",
    param2: "",
    param3: "",
  });
  useEffect(() => {
    if (props.newParamList) {
      setParams(props.newParamList);
      getScores();
    }

    // console.log("ustawilem parametry:", params);
  }, [props.newParamList]);

  const getScores = () => {
    const paramsToScore = props.newParamList;
    dane.map((dana) => {
      let score = 0;
      dana.prop1 === paramsToScore.param1 ? score++ : console.log("fail");
      dana.prop2 === paramsToScore.param2 ? score++ : console.log("fail");
      dana.prop3 === paramsToScore.param3 ? score++ : console.log("fail");
      dana.score = score;
    });

    dane.sort(function (a, b) {
      return b.score - a.score;
    });
    console.log(dane);
  };

  return (
    <div>
      <h1>Diagnoza</h1>
      {dane.map((lek) => {
        return (
          <p>
            nazwa leku: {lek.name}, parametr1:{lek.prop1},parametr2:
            {lek.prop2}, parametr3: {lek.prop3}, wynik: {lek.score}
          </p>
        );
      })}
      <div>
        {Object.keys(params).map((paramName) => (
          <p>{paramName}</p>
        ))}
        {Object.values(params).map((value) => (
          <p>{value}</p>
        ))}
      </div>
    </div>
  );
};

export default Diagnose;
