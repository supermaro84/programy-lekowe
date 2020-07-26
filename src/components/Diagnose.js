import React, { useState, useEffect } from "react";
import Dane from "../dane.json";
import MedicineModal from "../components/MedicineModal";

const Diagnose = (props) => {
  const dane = Dane;
  const [daneF, setDane] = useState(Dane);
  const [params, setParams] = useState({
    rozpozn_hist: undefined,
    mutacja_aktywujaca_EFGR: undefined,
    zaawansowanie: undefined,
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

    const filterRozpoznHist = (item) => {
      console.log(item);
      const finder = item.rozpozn_hist.find(
        (rak) => rak === paramsToScore.rozpozn_hist
      );
      return !!finder;
    };

    const filterEGFR = (item) => {
      return (
        item.mutacja_aktywujaca_EFGR === paramsToScore.mutacja_aktywujaca_EFGR
      );
    };

    const filterZaawansowanie = (item) => {
      if (item.zaawansowanie) {
        const finder = item.zaawansowanie.find(
          (rak) => rak === paramsToScore.zaawansowanie
        );
        return !!finder;
      }
    };

    const filterZmianyMierzalne = (item) => {
      if (item.zmiany_mierzalne)
        return item.zmiany_mierzalne === paramsToScore.zmiany_mierzalne;
    };

    const filterBrakPrzerzutow = (item) => {
      if (item.brak_przerzutow_OUN)
        return item.brak_przerzutow_OUN === paramsToScore.brak_przerzutow_OUN;
    };

    //first filter
    let dataFilterRozpoznHist = [];
    !!props.newParamList.rozpozn_hist
      ? (dataFilterRozpoznHist = dane.filter(filterRozpoznHist))
      : (dataFilterRozpoznHist = dane);
    //second filter
    let dataFilterEFGR = [];
    !!props.newParamList.mutacja_aktywujaca_EFGR
      ? (dataFilterEFGR = dataFilterRozpoznHist.filter(filterEGFR))
      : (dataFilterEFGR = dataFilterRozpoznHist);

    //third filter
    let dataFilterZaawansowanie = [];
    !!props.newParamList.zaawansowanie
      ? (dataFilterZaawansowanie = dataFilterEFGR.filter(filterZaawansowanie))
      : (dataFilterZaawansowanie = dataFilterEFGR);
    //fourth filter
    let dataZmianyMierzalne = [];
    !!props.newParamList.zmiany_mierzalne
      ? (dataZmianyMierzalne = dataFilterZaawansowanie.filter(
          filterZmianyMierzalne
        ))
      : (dataZmianyMierzalne = dataFilterZaawansowanie);

    //fifth filter
    let dataBrakPrzerzutow = [];
    !!props.newParamList.brak_przerzutow_OUN
      ? (dataBrakPrzerzutow = dataZmianyMierzalne.filter(filterBrakPrzerzutow))
      : (dataBrakPrzerzutow = dataZmianyMierzalne);

    setDane(dataBrakPrzerzutow);
  };

  return (
    <div>
      <h1>Diagnoza</h1>
      <ol>
        {daneF.map((lek) => {
          const keysMeds = Object.keys(lek).map((e) => e);
          const valsMeds = Object.values(lek).map((e) => e);

          return (
            <li>
              <MedicineModal
                buttonLabel={lek.name}
                properties={keysMeds}
                values={valsMeds}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Diagnose;
