import React from "react";
import "./Universal.css";
import { useHistory } from "react-router-dom";
import bystarImage from '../../pictures/bystar.jpg';
import back from "../../pictures/ImagesJade/back.png";
import './profiling/profiling.css';

import Bystar4025image from '../../maintImages/BYSTAR4025.png';
import Bystar4020image from '../../maintImages/bysprintfiber4020.png';
import Byspeed3015image from '../../maintImages/byspeed3015.png';
import AUTOband1 from '../../maintImages/AUTOBANDSAWH560HA.png';
import AUTOband2 from '../../maintImages/AUTOBANDSAWS4633SA.png';
import GHS1330image from '../../maintImages/SheetMetalGuillotine.png';
import { Auto } from 'cloudinary-react';

function Profiling() {
  let history = useHistory();

  const toBystar = () => {
    history.push("/bystar");
  };

  const toByPrint = () => {
    history.push("/byprint");
  };
  const toByspeed = () => {
    history.push("/byspeed");
  };
  const toS4633 = () => {
    history.push("/ms4633");
  };
  const toH560HA = () => {
    history.push("/hs560ha");
  };
  const toGHS1330 = () => {
    history.push("/ghs1330");
  };
  const toBack = () => {
    history.push("/maintenance");
  };

  
  return (

    <div className="forming">

    <div className="forming__top">
                <img src={back} alt="" className="backImage" onClick={toBack}></img>
    </div>
            
      <div className="forming__container">
        <div className="forming__row">
          <div className="forming__imgTab" onClick={toBystar}>
            <img src={Bystar4025image} alt="" className="forming__image"></img>
          </div>
          <div className="forming__imgTab" onClick={toByPrint}>
            <img src={Bystar4020image} alt="" className="forming__image"></img>
          </div>
          <div className="forming__imgTab" onClick={toByspeed}>
            <img src={Byspeed3015image} alt="" className="forming__image"></img>
          </div>
        </div>

        <div className="forming__rowb">
          <div className="forming__imgTab" onClick={toS4633}>
            <img src={AUTOband1} alt="" className="forming__image"></img>
          </div>

          <div className="forming__imgTab" onClick={toH560HA}>
            <img src={AUTOband2} alt="" className="forming__image"></img>
          </div>
          <div className="forming__imgTab" onClick={toGHS1330}>
            <img src={GHS1330image} alt="" className="forming__image"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profiling;