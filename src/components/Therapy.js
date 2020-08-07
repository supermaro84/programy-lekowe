import React, { useState } from "react";
import DiagnoseSelector from "./DiagnoseSelector";
import Diagnose from "./Diagnose";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Therapy = (props) => {
  const [paramList, setParamList] = useState(undefined);

  const getParams = (paramList) => {
    setParamList(paramList);
  };
  return (
    <div>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <DiagnoseSelector getParams={getParams} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Diagnose newParamList={paramList} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Therapy;
