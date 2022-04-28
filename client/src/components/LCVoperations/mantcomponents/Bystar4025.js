import "../mantcomponents/machines.css";
import bystarImage from "../../pictures/ImagesJade/Bystar.jpg";
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import doc1 from "../../pdfs/doc1.pdf";
import bystar4025 from "../../pdfs/bystar4025.pdf";
import { useHistory } from "react-router-dom";
import back from "../../pictures/ImagesJade/back.png";

function Bystar4025() {
  let history = useHistory();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const toBack = () => {
    history.push("/profiling");
  };

  return (
    <div className="machContainer">
      <div className="BackContainer1">
        <img src={back} alt="" className="backImage1" onClick={toBack}></img>
      </div>
      <div className="matchTop">
        <img className="mtImage" src={bystarImage}></img>
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
            <h1 className="machText">Laser Cutting System (2 axis)</h1>
          </div>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Make</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">Bystronic</h1>
          </div>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Model</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">Bystar(L) 4025-120</h1>
          </div>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">RES Order Rating</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">6kw</h1>
          </div>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Cutting Limitations</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">2.5m * 12m * 25m(max)</h1>
          </div>
        </div>
        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Serial Number</h1>
          </div>
          <div className="machCont">
            <h1 className="machText">R1417078(10055456[2014]</h1>
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
            <h1 className="machText">30May 2021</h1>
          </div>
        </div>
        <div className="machHeading">
          <h1 className="machHtext">Documents And Support</h1>
        </div>

        <div className="mdivs">
          <div className="machCont">
            <h1 className="machText">Manuals</h1>
          </div>
          <div className="machCont">
            <a href={bystar4025} target="_blank" className="machTextdocs">
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bystar4025;
