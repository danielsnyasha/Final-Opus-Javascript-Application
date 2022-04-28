import React from "react";
import "../mantcomponents/machines.css";
import H560 from "../../pictures/ImagesJade/AutomaticBS.jpg";
import { useHistory } from "react-router-dom";
import back from "../../pictures/ImagesJade/back.png";

function H560HA() {
  let history = useHistory();

  const toBack = () => {
    history.push("/profiling");
  };
  return (
    <div className="machContainer">
      {/* <div className="matchTop">
                <img className="mtImage" src={H560}></img>
            </div> */}

      <div className="BackContainer1">
        <img src={back} alt="" className="backImage1" onClick={toBack}></img>
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
            <h1 className="machText">Automatic Band Saw</h1>
          </div>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Make</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">Everising</h1>
          </div>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Model</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">s-4633 SA</h1>
          </div>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">RES Order Rating</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">5.2kw</h1>
          </div>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Capacity</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">615mm * 560mm</h1>
          </div>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Serial Number</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">2012</h1>
          </div>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Asset Tag Number</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">Null</h1>
          </div>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Machine ON Hours</h1>
          </div>
          <div className="machCont">
            <h1 className="machText"></h1>
          </div>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Power Source</h1>
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

export default H560HA;
