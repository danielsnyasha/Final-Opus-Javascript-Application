import React from "react";
import "../mantcomponents/machines.css";
import gmaw3 from "../../pictures/ImagesJade/gmaw2.jpg";
import { useHistory } from "react-router-dom";
import back from "../../pictures/ImagesJade/back.png";

function GMAW2() {
  let history = useHistory();
  const toBack = () => {
    history.push("/additive");
  };

  return (
    <div className="machContainer">
      <div className="BackContainer1">
        <img src={back} alt="" className="backImage1" onClick={toBack}></img>
      </div>
      <div className="matchTop">
        <img className="mtImage" src={gmaw3}></img>
      </div>
      <div className="machInner">
        <div className="machHeading">
          <h1 className="machHtext">Machine Specifications</h1>
        </div>

        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Machine Name</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">GMAW/GTAW/SMAW/FCAW/SAW</h1>
          </div>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Make</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">Lincoln</h1>
          </div>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">QTY</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">5</h1>
          </div>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Model</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">Ideal Arc DC600</h1>
          </div>
        </div>

        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Capacity</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">600A 44V</h1>
          </div>
        </div>

        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Serial Number</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">U1030114398[WMOL]</h1>
          </div>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Asset Tag Number</h1>
          </div>
          <div className="machCont">
            <h1 className="machText"></h1>
          </div>
        </div>

        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Location</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">11 Flamink Road, Alrode, Johannesburg</h1>
          </div>
        </div>
        <div className="machHeading">
          <h1 className="machHtext">Maintenance Schedule</h1>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Weekly Checks</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">Fridays</h1>
          </div>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Monthly Check</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">30 May 2021</h1>
          </div>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Quarterly Maintenance</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">30 June 2021</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GMAW2;
