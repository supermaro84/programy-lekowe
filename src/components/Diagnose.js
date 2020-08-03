import React, { useState, useEffect, Component } from "react";
import Dane from "../dane2.json";
import MedicineModal from "../components/MedicineModal";

const Diagnose = (props) => {
  //const dane = Dane;
  const [dane, setDane] = useState(Dane);
  const [daneF, setDaneF] = useState([]);

  useEffect(() => {
    if (props.newParamList) {
      console.log("getting scores");

      getScores();
    }
  }, [props.newParamList]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/therapies", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Token 5e46449a2bb90a1d86f07d9d57d15c9cd98c3bdd",
  //     },
  //   })
  //     .then((resp) => resp.json())
  //     .then((json) => {
  //       setDane(json);
  //       setDaneF(json);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const getScores = () => {
    const paramsToScore = props.newParamList;
    const daneF = dane;

    const filterRozpoznHist = (item) => {
      console.log(item);
      const finder = item.rozpoznanie.find(
        (rak) => rak === paramsToScore.rozpoznanie
      );
      return !!finder;
    };

    const filterEGFR = (item) => {
      let est = "";
      paramsToScore.mutacja_aktywujaca_EFGR === "true"
        ? (est = true)
        : (est = false);
      console.log(
        //item.mutacja_aktywujaca_EFGR,
        //",",
        est
      );
      if (
        item.mutacja_aktywujaca_EFGR === est ||
        item.mutacja_aktywujaca_EFGR === null
      )
        return true;
    };

    const boolFilter = (item, paramToScore) => {
      let est = "";
      paramToScore === "true" ? (est = true) : (est = false);
      console.log(
        paramToScore,
        ",",
        //item.mutacja_akptywujaca_EFGR,
        //",",
        est
      );
      if (
        item.mutacja_aktywujaca_EFGR === est ||
        item.mutacja_aktywujaca_EFGR === null
      )
        return true;
    };

    const filterZaawansowanie = (item) => {
      if (item.zaawansowanie) {
        const finder = item.zaawansowanie.find(
          (rak) => rak === paramsToScore.zaawansowanie
        );
        return !!finder;
      }
      if (item.zaawansowanie === null) return true;
    };

    const filterZmianyMierzalne = (item) => {
      let est = "";
      paramsToScore.zmiany_mierzalne === "true" ? (est = true) : (est = false);
      console.log(
        //item.mutacja_aktywujaca_EFGR,
        //",",
        est
      );
      if (item.zmiany_mierzalne === est || item.zmiany_mierzalne === null)
        return true;
    };

    const filterBrakPrzerzutow = (item) => {
      let est = "";
      paramsToScore.brak_przerzutow_OUN === "true"
        ? (est = true)
        : (est = false);
      console.log(
        //item.mutacja_aktywujaca_EFGR,
        //",",
        est
      );
      if (item.brak_przerzutow_OUN === est || item.brak_przerzutow_OUN === null)
        return true;
    };

    const filterStopienSprawnosci = (item) => {
      console.log(item.stopien_sprawnosci);
      if (item.stopien_sprawnosci) {
        const finder = item.stopien_sprawnosci.find(
          (rak) => rak === paramsToScore.stopien_sprawnosci
        );
        return !!finder;
      }
      if (item.stopien_sprawnosci === null) return true;
    };

    const filterWczesniejszeLeczenieRakaPluca = (item) => {
      let est = "";
      paramsToScore.wczesniejsze_leczenie_systemowe_zp_raka_pluca === "true"
        ? (est = true)
        : (est = false);
      console.log(
        //item.mutacja_aktywujaca_EFGR,
        //",",
        est
      );
      if (
        item.wczesniejsze_leczenie_systemowe_zp_raka_pluca === est ||
        item.wczesniejsze_leczenie_systemowe_zp_raka_pluca === null
      )
        return true;
    };

    const filterWczesniejszeLeczenieRakaPlucaAntyAlk = (item) => {
      let est = "";
      paramsToScore.wczesniejsze_leczenie_systemowe_zp_raka_pluca_incl_anty_ALK ===
      "true"
        ? (est = true)
        : (est = false);
      console.log(
        //item.mutacja_aktywujaca_EFGR,
        //",",
        est
      );
      if (
        item.wczesniejsze_leczenie_systemowe_zp_raka_pluca_incl_anty_ALK ===
          est ||
        item.wczesniejsze_leczenie_systemowe_zp_raka_pluca_incl_anty_ALK ===
          null
      )
        return true;
    };

    const filterWykluczeniePrzeciwskazan = (item) => {
      let est = "";
      paramsToScore.wykluczenie_przeciwwskazan === "true"
        ? (est = true)
        : (est = false);
      console.log(
        //item.mutacja_aktywujaca_EFGR,
        //",",
        est
      );
      if (
        item.wykluczenie_przeciwwskazan === est ||
        item.wykluczenie_przeciwwskazan === null
      )
        return true;
    };

    const filterProgresjaPoLeczeniuInhibitorem = (item) => {
      let est = "";
      paramsToScore.progresja_po_leczeniu_innym_inhibitorem_EFGR === "true"
        ? (est = true)
        : (est = false);
      console.log(
        //item.mutacja_aktywujaca_EFGR,
        //",",
        est
      );
      if (
        item.progresja_po_leczeniu_innym_inhibitorem_EFGR === est ||
        item.progresja_po_leczeniu_innym_inhibitorem_EFGR === null
      )
        return true;
    };

    const filterMutacjaT790 = (item) => {
      let est = "";
      paramsToScore.mutacja_T790_w_genie_EGFR === "true"
        ? (est = true)
        : (est = false);
      console.log(
        //item.mutacja_aktywujaca_EFGR,
        //",",
        est
      );
      if (
        item.mutacja_T790_w_genie_EGFR === est ||
        item.mutacja_T790_w_genie_EGFR === null
      )
        return true;
    };

    const filterObecnoscRearanzacji = (item) => {
      let est = "";
      paramsToScore.Obecnosc_rearanzacji_w_genie_ALK_lub_ROS1 === "true"
        ? (est = true)
        : (est = false);
      console.log(
        //item.mutacja_aktywujaca_EFGR,
        //",",
        est
      );
      if (
        item.Obecnosc_rearanzacji_w_genie_ALK_lub_ROS1 === est ||
        item.Obecnosc_rearanzacji_w_genie_ALK_lub_ROS1 === null
      )
        return true;
    };

    const filterWczersniejeLeczenieKryzotynibem = (item) => {
      let est = "";
      if (paramsToScore.wczesniejsze_leczenie_systemowe_kryzotynibem === "true")
        est = true;
      if (
        paramsToScore.wczesniejsze_leczenie_systemowe_kryzotynibem === "false"
      )
        est = false;
      console.log(
        //item.mutacja_aktywujaca_EFGR,
        //",",
        est
      );
      if (
        item.wczesniejsze_leczenie_systemowe_kryzotynibem === est ||
        item.wczesniejsze_leczenie_systemowe_kryzotynibem === null
      )
        return true;
    };

    //first filter
    let dataFilterRozpoznHist = [];
    !!props.newParamList.rozpoznanie
      ? (dataFilterRozpoznHist = daneF.filter(filterRozpoznHist))
      : (dataFilterRozpoznHist = daneF);
    //second filter
    let dataFilterEFGR = [];
    !!props.newParamList.mutacja_aktywujaca_EFGR
      ? (dataFilterEFGR = dataFilterRozpoznHist.filter(filterEGFR))
      : (dataFilterEFGR = dataFilterRozpoznHist);

    // //third filter
    let dataFilterZaawansowanie = [];
    !!props.newParamList.zaawansowanie
      ? (dataFilterZaawansowanie = dataFilterEFGR.filter(filterZaawansowanie))
      : (dataFilterZaawansowanie = dataFilterEFGR);
    // //fourth filter
    let dataZmianyMierzalne = [];
    !!props.newParamList.zmiany_mierzalne
      ? (dataZmianyMierzalne = dataFilterZaawansowanie.filter(
          filterZmianyMierzalne
        ))
      : (dataZmianyMierzalne = dataFilterZaawansowanie);

    // //fifth filter
    let dataBrakPrzerzutow = [];
    !!props.newParamList.brak_przerzutow_OUN
      ? (dataBrakPrzerzutow = dataZmianyMierzalne.filter(filterBrakPrzerzutow))
      : (dataBrakPrzerzutow = dataZmianyMierzalne);

    // //sixth filter
    let dataStopienSprawnosci = [];
    !!props.newParamList.stopien_sprawnosci
      ? (dataStopienSprawnosci = dataBrakPrzerzutow.filter(
          filterStopienSprawnosci
        ))
      : (dataStopienSprawnosci = dataBrakPrzerzutow);

    //7 filter
    let dataWczesniejszeLeczenieRP = [];
    !!props.newParamList.wczesniejsze_leczenie_systemowe_zp_raka_pluca
      ? (dataWczesniejszeLeczenieRP = dataStopienSprawnosci.filter(
          filterWczesniejszeLeczenieRakaPluca
        ))
      : (dataWczesniejszeLeczenieRP = dataStopienSprawnosci);

    //8 filter
    let dataWczesniejszeLeczenieRPAntyAlk = [];
    !!props.newParamList
      .wczesniejsze_leczenie_systemowe_zp_raka_pluca_incl_anty_ALK
      ? (dataWczesniejszeLeczenieRPAntyAlk = dataWczesniejszeLeczenieRP.filter(
          filterWczesniejszeLeczenieRakaPlucaAntyAlk
        ))
      : (dataWczesniejszeLeczenieRPAntyAlk = dataWczesniejszeLeczenieRP);

    //9 filter
    let dataWykluczeniePrzeciwskazan = [];
    !!props.newParamList.wykluczenie_przeciwwskazan
      ? (dataWykluczeniePrzeciwskazan = dataWczesniejszeLeczenieRPAntyAlk.filter(
          filterWykluczeniePrzeciwskazan
        ))
      : (dataWykluczeniePrzeciwskazan = dataWczesniejszeLeczenieRPAntyAlk);

    //10 filter
    let dataProgresjaPoLeczeniu = [];
    !!props.newParamList.progresja_po_leczeniu_innym_inhibitorem_EFGR
      ? (dataProgresjaPoLeczeniu = dataWykluczeniePrzeciwskazan.filter(
          filterProgresjaPoLeczeniuInhibitorem
        ))
      : (dataProgresjaPoLeczeniu = dataWykluczeniePrzeciwskazan);

    //11 filter
    let dataMutacjaT790 = [];
    !!props.newParamList.mutacja_T790_w_genie_EGFR
      ? (dataMutacjaT790 = dataProgresjaPoLeczeniu.filter(filterMutacjaT790))
      : (dataMutacjaT790 = dataProgresjaPoLeczeniu);

    //12 filter
    let dataOBecnoscRearanzacji = [];
    !!props.newParamList.Obecnosc_rearanzacji_w_genie_ALK_lub_ROS1
      ? (dataOBecnoscRearanzacji = dataMutacjaT790.filter(
          filterObecnoscRearanzacji
        ))
      : (dataOBecnoscRearanzacji = dataMutacjaT790);

    //13 filter
    let dataLeczenieKryzotynibem = [];
    !!props.newParamList.wczesniejsze_leczenie_systemowe_kryzotynibem
      ? (dataLeczenieKryzotynibem = dataOBecnoscRearanzacji.filter(
          filterWczersniejeLeczenieKryzotynibem
        ))
      : (dataLeczenieKryzotynibem = dataOBecnoscRearanzacji);

    setDaneF(dataLeczenieKryzotynibem);
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
                className="MedModal"
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Diagnose;
