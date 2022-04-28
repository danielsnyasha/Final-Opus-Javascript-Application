import React from "react";
import underconstruction from "../pictures/underconstruction.png";
import "./salesorders.css";

// import tendays from './lcvimages/10DAYS.png';
// import amonth from './lcvimages/30DAYS.png';
// import alldays from './lcvimages/ALL.png';
// import priority from './lcvimages/Search.png';

import tendays from "../pictures/new/last10.png";
import amonth from "../pictures/new/lastmonth.png";
import alldays from "../pictures/new/all.png";
import priority from "../pictures/new/search.png";
import { useHistory } from "react-router-dom";
import back from "../pictures/ImagesJade/back.png";
import soImage from '../pictures/covers/salesorders.png';

function Salesorders() {
  let history = useHistory();

  const toPriority = () => {
    history.push("/priorityso");
  };

  const toAllDays = () => {
    history.push("/alldays");
  };

  const toTenDays = () => {
    history.push("/tendays");
  };

  const toMonth = () => {
    history.push("/month");
  };
  const toBack = () => {
    history.push("/lcv");
  };
  return (
    <div className="ContainerSalesOrders">
      <div className="BackContainer1">
        <img src={back} alt="" className="backImage1" onClick={toBack}></img>
      </div>
      <div className="InnerContainerSO">
        <div className="containerSOR">
          <img
            src={priority}
            alt="one"
            className="SOimages"
            id="btneffectso"
            onClick={toPriority}
          ></img>
          <img
            src={alldays}
            alt="one"
            className="SOimages"
            id="btneffectso"
            onClick={toAllDays}
          ></img>
          <img
            src={amonth}
            alt="one"
            className="SOimages"
            id="btneffectso"
            onClick={toMonth}
          ></img>
          <img
            src={tendays}
            alt="one"
            className="SOimages"
            id="btneffectso"
            onClick={toTenDays}
          ></img>
          
        </div>
        <div className="SOcontainer">
          <img src={soImage} alt="" className="SOimage"></img>
        </div>
        
      </div>
    </div>
  );
}

export default Salesorders;
