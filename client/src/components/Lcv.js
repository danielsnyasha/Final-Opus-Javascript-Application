import React, { useEffect, useState } from "react";

import lcvstuff from "../components/pictures/new/latest.png";
import stockbutton from "../components/pictures/new/Stock.png";
import librarybtn from "../components/pictures/new/LIBRARY.png";
import financebtn from "../components/pictures/new/finance.png";
import customersbtn from "../components/pictures/new/customers.png";
import HRbtn from "../components/pictures/new/hr.png";
import logisticsbtn from "../components/pictures/new/logistics.png";
import maintenancebtn from "../components/pictures/new/maintenance.png";
import OPUSbtn from "../components/pictures/new/opus.png";
import productionbtn from "../components/pictures/new/production.png";
import salesordersbtn from "../components/pictures/new/salesorders.png";
import technicalbtn from "../components/pictures/new/technical.png";
import utilitiesbtn from "../components/pictures/new/utilities.png";
import workordersbtn from "../components/pictures/new/workorders.png";
import extrasbtn from "../components/pictures/new/Extras.png";
import { Image } from "cloudinary-react";
import Axios from "axios";
import "../components/Lcv/Lcv.css";
import { useHistory } from "react-router-dom";
import lcvlogo from "../components/pictures/lcvpng.png";

import back from './pictures/ImagesJade/back.png';

function Lcv() {
  let history = useHistory();


  const toBack = () => {
    history.push("/home");
  }

  const [mylcv, setMyLcv] = useState([]);
  const [yourProfile, setYourProfile] = useState([]);
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState([]);
  const formData = new FormData();

  formData.append("file", picture[0]);
  formData.append("upload_preset", "ak6hqjfm");

  const Profilepicture = () => {
    Axios.post(
      "https://api.cloudinary.com/v1_1/dxq9xddzm/image/upload",
      formData
    ).then((response) => {
      const fileName = response.data.public_id;

      Axios.post("http://localhost:3008/profilepic", {
        title: title,
        picture: fileName,
        owner: localStorage.getItem("username"),
      }).then((response) => {
        history.push("/lcv");
        console.log(response);
      });
    });
  };

  useEffect(() => {
    Axios.get(
      `http://localhost:3008/profile/${localStorage.getItem("username")}`
    ).then((response) => {
      setMyLcv(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get(
      `http://localhost:3008/profileget/${localStorage.getItem("username")}`
    ).then((response) => {
      setYourProfile(response.data);
      // alert("Profile Picture Changed")
      
    });
  }, []);

  const tostocks = () => {
    history.push("/stocks");
  };
  const tosalesorders = () => {
    history.push("/salesorders");
  };

  const toHR = () => {
    history.push("/hr");
  };

  const toworkorders = () => {
    history.push("/workorders");
  };
  const toproduction = () => {
    history.push("/production");
  };
  const toCustomers = () => {
    history.push("/customers");
  };
  const toOpus = () => {
    history.push("/Opus");
  };
  const toExtras = () => {
    history.push("/extras");
  };
  const toFinance = () => {
    history.push("/finance");
  };
  const toLogistics = () => {
    history.push("/logistics");
  };
  const toUtilities = () => {
    history.push("/utilities");
  };
  const toMaintenance = () => {
    history.push("/maintenance");
  };
  const toTechnical = () => {
    history.push("/technical");
  };
  const toLibrary = () => {
    history.push("/library");
  };
  const toTrackingOrders = () => {
    history.push("/trackorders");
  };
  const toMyExtras = () => {
    history.push("/myextras");
  };

  return (
    // <div className="Cover">
    <div className="ContainerLCV">

      <div className="BackContainer1">
        <img src={back} alt="" className="backImage1" onClick={toBack}></img>
      </div>
      <div className="ppContainer">
        <div className="ppTop">
          <div className="PPtopcss">
            <input
              type="text"
              className="fileinputtext"
              placeholder="Title"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>

          <div className="PPtopcss">
            {" "}
            <input
              type="file"
              className="fileinput"
              placeholder="Choose File"
              onChange={(event) => {
                setPicture(event.target.files);
              }}
            />
          </div>
        </div>
        <div className="ppBottom">
          <button className="buttonPP" id="btnhover" onClick={Profilepicture}>
            Profile Picture
          </button>
        </div>
      </div>

      <div className="topdiv">
        <div className="lefttop">
          <div className="pad1" id="hoverlink">
            {localStorage.getItem("username")}
          </div>
          <div className="pad2" id="hoverlink">
            998.567
          </div>
        </div>

        <div className="righttop">
          <div className="pad3" id="hoverlink">
            CURRENT USER:
          </div>
          <div className="pad2" id="hoverlink">
            OPUS POINTS:
          </div>
        </div>
        <div className="thirdpan">
          {yourProfile.map((val, key) => {
            return (
              <div className="profilepicture" id="btneffect2">
                <Image
                  cloudName="dxq9xddzm"
                  publicId={val.picture}
                  className="cloudinary"
                  id="profpicselect"
                />
              </div>
            );
          })}
        </div>
      </div>



      <div className="seconddiv">
        <div className="containerdiv" id="btneffect2">
          <img
            src={stockbutton}
            alt="one"
            onClick={tostocks}
            className="img2LCV"
            id="btneffect"
          ></img>
        </div>
        <div className="containerdiv">
          <img
            src={workordersbtn}
            alt="one"
            className="img2LCV"
            onClick={toworkorders}
            id="btneffect"
          ></img>
        </div>
        <div className="containerdiv">
          <img
            src={salesordersbtn}
            alt="one"
            className="img2LCV"
            onClick={tosalesorders}
            id="btneffect"
          ></img>
        </div>
        <div className="containerdiv">
          <img
            src={HRbtn}
            alt="one"
            className="img2LCV"
            onClick={toHR}
            id="btneffect"
          ></img>
        </div>
        <div className="containerdiv">
          <img
            src={productionbtn}
            alt="one"
            className="img2LCV"
            onClick={toproduction}
            id="btneffect"
          ></img>
        </div>
      </div>

      <div className="thirddiv">
        <div className="containerdiv">
          <img
            src={customersbtn}
            alt="one"
            className="img2LCV"
            onClick={toCustomers}
            id="btneffect"
          ></img>
        </div>
        <div className="containerdiv">
          <img
            src={OPUSbtn}
            alt="one"
            className="img2LCV"
            onClick={toOpus}
            id="btneffect3"
          ></img>
        </div>
        <div className="containerdiv">
          <img
            src={extrasbtn}
            alt="one"
            className="img2LCV"
            onClick={toMyExtras}
            id="btneffect"
          ></img>
        </div>
        <div className="containerdiv">
          <img
            src={financebtn}
            alt="one"
            className="img2LCV"
            onClick={toFinance}
            id="btneffect"
          ></img>
        </div>
        <div className="containerdiv">
          <img
            src={logisticsbtn}
            alt="one"
            className="img2LCV"
            onClick={toLogistics}
            id="btneffect"
          ></img>
        </div>
      </div>

      <div className="fourthdiv">
        <div className="containerdiv">
          <img
            src={utilitiesbtn}
            alt="one"
            className="img2LCV"
            onClick={toUtilities}
            id="btneffect"
          ></img>
        </div>
        <div className="containerdiv">
          <img
            src={maintenancebtn}
            alt="one"
            className="img2LCV"
            onClick={toMaintenance}
            id="btneffect"
          ></img>
        </div>
        <div className="containerdiv">
          <img
            src={technicalbtn}
            alt="one"
            className="img2LCV"
            onClick={toTechnical}
            id="btneffect"
          ></img>
        </div>
        <div className="containerdiv">
          <img
            src={librarybtn}
            alt="one"
            className="img2LCV"
            onClick={toLibrary}
            id="btneffect"
          ></img>
        </div>
        <div className="containerdiv">
          <img
            src={lcvstuff}
            alt="one"
            className="img2LCV"
            onClick={toTrackingOrders}
            id="btneffect"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Lcv;
