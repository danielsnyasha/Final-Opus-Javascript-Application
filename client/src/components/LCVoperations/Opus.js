import React from "react";
import "./hr.css";

import vitaldocuments from "../pictures/covers/opusblue.png";
import leaveapplication from "../pictures/covers/opusblue.png";
import employeeservices from "../pictures/covers/opusblue.png";
import employeeform from "../pictures/covers/opusblue.png";
import opusPicture from "../pictures/covers/opus.png";
import { useHistory } from "react-router-dom";
import back from "../pictures/ImagesJade/back.png";

import financialDoc from '../pdfs/comparative.docx';

function Opus() {
  let history = useHistory();

  const toVitalDocuments = () => {
    history.push("/underconstruction");
  };

  const toLeaveApplication = () => {
    history.push("/underconstruction");
  };

  const toEmployeeForm = () => {
    history.push("/underconstruction");
  };

  const toEmployeeServices = () => {
    history.push("/underconstruction");
  };
  const toBack = () => {
    history.push("/lcv");
  };

  return (
    <div className="Fincontainer">
      <div className="BackContainer1">
        <img src={back} alt="" className="backImage1" onClick={toBack}></img>
      </div>
      <div className="hrTOP">
        <img
          src={vitaldocuments}
          alt="one"
          className="hrimages"
          id="btneffecthr"
          onClick={toVitalDocuments}
        ></img>
        <img
          src={leaveapplication}
          alt="one"
          className="hrimages"
          id="btneffecthr"
          onClick={toLeaveApplication}
        ></img>
        <img
          src={employeeform}
          alt="one"
          className="hrimages"
          id="btneffecthr"
          onClick={toEmployeeForm}
        ></img>
        <img
          src={employeeservices}
          alt="one"
          className="hrimages"
          id="btneffecthr"
          onClick={toEmployeeServices}
        ></img>
      </div>
      <div className="finSECOND">


      <div className="machCont">
            <a href={financialDoc} target="_blank" className="machTextdocs">
              Download PDF
            </a>
          </div>



        <div className="SOcontainer">
          <img src={opusPicture} alt="" className="SOimage"></img>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Opus;
