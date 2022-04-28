import React from "react";
import "./Universal.css";
import { useHistory } from "react-router-dom";
import back from '../../pictures/ImagesJade/back.png';
import ThreeRollImmage from '../../maintImages/3ROLLmachine.png';
import FourRollImage from '../../maintImages/4RollMachine.png';
import BystronicHam from '../../maintImages/pressbreak_hamerle.png';
import  BystronicBeye from '../../maintImages/pressbreak_beyeler.png';
import BystronicAdira from '../../maintImages/pressbreak_ADIRA.png';
import SectBending from '../../maintImages/Sectionbending.png';
import '../../mantcss/forming.css';



function Subtrade() {
  let history = useHistory();

  const toBystronicH = () => {
    history.push("/bystronichamelle");
  };

  const toBystronicB = () => {
    history.push("/bystronic-beyeller");
  };
  const toBystronicAd = () => {
    history.push("/bystronic-adira");
  };
  const to4Roll = () => {
    history.push("/4roll");
  };
  const to3roll = () => {
    history.push("/3roll");
  };
  const toSecBend = () => {
    history.push("/section-bending");
  };
  const toBack = ()=>{
    history.push("/maintenance");
  }

  return (

    <div className="forming">

    <div className="forming__top">
                <img src={back} alt="" className="backImage" onClick={toBack}></img>
    </div>
            
      <div className="forming__container">
        <div className="forming__row">
          <div className="forming__imgTab" onClick={toBystronicH}>
            <img src={BystronicHam} alt="" className="forming__image"></img>
          </div>
          <div className="forming__imgTab" onClick={toBystronicB}>
            <img src={BystronicBeye} alt="" className="forming__image"></img>
          </div>
          <div className="forming__imgTab" onClick={to4Roll}>
            <img src={FourRollImage} alt="" className="forming__image"></img>
          </div>
        </div>

        <div className="forming__rowb">
          <div className="forming__imgTab" onClick={to3roll}>
            <img src={ThreeRollImmage} alt="" className="forming__image"></img>
          </div>

          <div className="forming__imgTab" onClick={toSecBend}>
            <img src={SectBending} alt="" className="forming__image"></img>
          </div>
          <div className="forming__imgTab" onClick={toBystronicAd}>
            <img src={BystronicAdira} alt="" className="forming__image"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subtrade;
