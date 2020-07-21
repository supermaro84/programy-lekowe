import React, { useState, useEffect } from "react";
import Dane from "../dane.json";

const Diagnose = (props) => {
  const dane = Dane;
  const [daneF, setDane] = useState(Dane);
  const [params, setParams] = useState({
    rozpozn_hist: undefined,
    mutacja_aktywujaca_EFGR: undefined,
  });
  useEffect(() => {
    if (props.newParamList) {
      console.log(dane);
      setParams(props.newParamList);
      getScores();
    }

    // console.log("ustawilem parametry:", params);
  }, [props.newParamList]);

  const getScores = () => {
    const paramsToScore = props.newParamList;
    // const finf = dane.map((dana) => {
    //   const finder = dana.rozpozn_hist.find(
    //     (rak) => rak === paramsToScore.rozpozn_hist
    //   );
    //   //const finder = paramsToScore.rozpozn_hist === dana.rozpozn_hist;
    //   //console.log(paramsToScore.rozpozn_hist, dana.rozpozn_hist)
    //   console.log(finder);
    //   return !!finder;
    // });
    //dane.pop({ name: "test" });
    if (!!props.newParamList.rozpozn_hist) {
      const daneToFilter = dane.filter((dana) => {
        console.log(dana);
        const finder = dana.rozpozn_hist.find(
          (rak) => rak === paramsToScore.rozpozn_hist
        );
        console.log(!!finder);
        return !!finder;
      });
      setDane(daneToFilter);
    }

    //console.log("dane po wczytaniu", daneToFilter);
    // dane.map((dana) => {
    //   let score = 0;
    //   if (dana.prop1 === paramsToScore.param1) score++;
    //   if (dana.prop2 === paramsToScore.param2) score++;
    //   if (dana.prop3 === paramsToScore.param3) score++;
    //   dana.score = score;
    // });

    // dane.sort(function (a, b) {
    //   return b.score - a.score;
    // });
  };

  return (
    <div>
      <h1>Diagnoza</h1>
      <ol>
        {daneF.map((lek) => {
          return <li>{lek.name}</li>;
        })}
      </ol>

      <div>
        {Object.keys(params).map((paramName) => (
          <p key={paramName}>{paramName}</p>
        ))}
        {Object.values(params).map((value) => (
          <p>{value}</p>
        ))}
      </div>
    </div>
  );
};

export default Diagnose;
