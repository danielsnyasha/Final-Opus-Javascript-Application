import React from 'react';
import './hr.css';

import vitaldocuments from '../pictures/new/vital.png';
import leaveapplication from '../pictures/new/leave.png';
import employeeservices from '../pictures/new/yourdetails.png';
import employeeform from '../pictures/new/employeeform.png';
import hrPicture from '../pictures/covers/hrimage.png';
import { useHistory } from 'react-router-dom';
import back from '../pictures/ImagesJade/back.png';

function HR() {
    let history = useHistory();


    const toVitalDocuments = () => {
        history.push('/vitaldocuments')

    }

    const toLeaveApplication = ()=>{
        history.push('/leaveapplication')
    }

    const toEmployeeForm = ()=>{
        history.push('/employeeform')
    }

    const toEmployeeServices = ()=>{
        history.push('/employeeservices')
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

export default HR;
