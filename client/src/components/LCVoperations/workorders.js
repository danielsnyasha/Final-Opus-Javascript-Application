import React from "react";
import "./workorders.css";

import { useHistory } from "react-router-dom";

import tendays from "../pictures/new/last10.png";
import amonth from "../pictures/new/lastmonth.png";
import alldays from "../pictures/new/all.png";
import priority from "../pictures/new/priority.png";
import woPicture from '../pictures/covers/workorders.png';
import back from '../pictures/ImagesJade/back.png';

function Workorders() {
  let history = useHistory();

  const toBack = ()=>{
    history.push("/lcv");
}

  const toPriority = () => {
    history.push("/wosearch");
  };

  const toAllDays = () => {
    history.push("/woalldays");
  };

  const toTenDays = () => {
    history.push("/wotendays");
  };

  const toMonth = () => {
    history.push("/wolastmonth");
  };
  return (
    <div className="WOcontainer">
      <div className="BackContainer1">
        <img src={back} alt="" className="backImage1" onClick={toBack}></img>
      </div>
      <div className="WOinnercontainer">
        <div className="containerWOR">
          <img
            src={priority}
            alt="one"
            className="WOimages"
            id="btneffectWo"
            onClick={toPriority}
          ></img>
          <img
            src={alldays}
            alt="one"
            className="WOimages"
            id="btneffectWo"
            onClick={toAllDays}
          ></img>
          <img
            src={amonth}
            alt="one"
            className="WOimages"
            id="btneffectWo"
            onClick={toMonth}
          ></img>
          <img
            src={tendays}
            alt="one"
            className="WOimages"
            id="btneffectWo"
            onClick={toTenDays}
          ></img>
        </div>
        <div className="SOcontainer">
          <img src={woPicture} alt="" className="SOimage"></img>
        </div>
      </div>
    </div>
  );
}

export default Workorders;
