import React from 'react';
import './customers.css';

import { useHistory } from 'react-router-dom';

// import mostregular from './lcvimages/mostregular.png';
// import oldest from './lcvimages/longestserved.png';
// import newest from './lcvimages/newestcustomers.png';
// import allcustomers from './lcvimages/allcustomers.png';

import mostregular from "../pictures/covers/logisticsblue.png";
import oldest from "../pictures/covers/logisticsblue.png";
import logPicture from '../pictures/covers/logistics.png';
import newest from "../pictures/covers/logisticsblue.png";
import customersPicture from "../pictures/covers/customers.png";
import allcustomers from "../pictures/covers/logisticsblue.png";
// import { useHistory } from "react-router-dom";

import back from '../pictures/ImagesJade/back.png';

function Logistics() {
    let history = useHistory();
    const toBack = () => {
        history.push("/lcv");
    }
    const toMostregular = () => {
        history.push("/underconstruction")
    }
    const toNewestCustomers = () => {
        history.push("/underconstruction")
    }
    const toOldestCustomers = () => {
        history.push("/underconstruction")
    }
    const toAllCustomers = () => {
        history.push("/underconstruction")
    }

    return (
        <div className="CUScontainer">
            <div className="BackContainer1">
                <img src={back} alt="" className="backImage1" onClick={toBack}></img>
            </div>
            <div className="CUSinnercontainer">

                <div className="containerCUS">
                    <img src={mostregular} alt="one" className="CUSimages" id="btneffectCUS" onClick={toMostregular}></img>
                    <img src={newest} alt="one" className="CUSimages" id="btneffectCUS" onClick={toNewestCustomers}></img>
                    <img src={oldest} alt="one" className="CUSimages" id="btneffectCUS" onClick={toOldestCustomers}></img>
                    <img src={allcustomers} alt="one" className="CUSimages" id="btneffectCUS" onClick={toAllCustomers}></img>
                </div>
                <div className="SOcontainer">
                <img src={logPicture} alt="" className="SOimage"></img>
            </div>

            </div>
            
        </div>
    )
}

export default Logistics;





// import React, {useState} from 'react';
// import './hr.css'

// import vitaldocuments from './lcvimages/vitaldocuments.png';
// import leaveapplication from './lcvimages/LeaveApplication.png';
// import employeeservices from './lcvimages/employeeservices.png';
// import employeeform from './lcvimages/employeeform.png';

// import { useHistory } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// function Logistics() {

//     const [selectedDate, setSelectedDate] = useState(null)
//     let history = useHistory();


//     const toVitalDocuments = () => {
//         history.push('/vitaldocuments')

//         }

//     const toLeaveApplication = ()=>{
//         history.push('/leaveapplication')
//     }

//     const toEmployeeForm = ()=>{
//         history.push('/employeeform')
//     }

//     const toEmployeeServices = ()=>{
//         history.push('/employeeservices')
//     }

//     return (
//         <div className="HRcontainer">
//             <div className="hrTOP">

//                 <DatePicker selected = {selectedDate} onChange = { date=>selectedDate(date)} className="DateText"/>
//             </div>
//             <div className="hrSECOND">
                
//             </div>
//             <div>



//             </div>
            
//         </div>
//     )
// }

// export default Logistics;
