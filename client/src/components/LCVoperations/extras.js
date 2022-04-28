import React from 'react';
import './hr.css';

import vitaldocuments from "../pictures/covers/extrasblue.png";
import leaveapplication from "../pictures/covers/extrasblue.png";
import employeeservices from "../pictures/covers/extrasblue.png";
import employeeform from "../pictures/covers/extrasblue.png";
import hrPicture from '../pictures/covers/hrimage.png';
import { useHistory } from 'react-router-dom';
import back from '../pictures/ImagesJade/back.png';

function Extras() {
    let history = useHistory();


    const toVitalDocuments = () => {
        history.push('/underconstruction')

    }

    const toLeaveApplication = ()=>{
        history.push('/underconstruction')
    }

    const toEmployeeForm = ()=>{
        history.push('/underconstruction')
    }

    const toEmployeeServices = ()=>{
        history.push('/underconstruction')
    }
    const toBack = ()=>{
        history.push("/lcv");
    }

    return (
        <div className="HRcontainer">
            <div className="BackContainer1">
        <img src={back} alt="" className="backImage1" onClick={toBack}></img>
      </div>
            <div className="hrTOP">
            <img src={vitaldocuments} alt="one"  className="hrimages" id="btneffecthr" onClick={toVitalDocuments}></img>
            <img src={leaveapplication} alt="one"  className="hrimages" id="btneffecthr" onClick={toLeaveApplication}></img>
            <img src={employeeform} alt="one"  className="hrimages" id="btneffecthr" onClick={toEmployeeForm}></img>
            <img src={employeeservices} alt="one"  className="hrimages" id="btneffecthr" onClick={toEmployeeServices}></img>
                
                 
            </div>
            <div className="hrSECOND">
            <div className="SOcontainer">
          <img src={hrPicture} alt="" className="SOimage"></img>
        </div>
                
                
            </div>
            <div>



            </div>
            
        </div>
    )
}

export default Extras;
