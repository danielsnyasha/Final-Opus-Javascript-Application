import React,{useState,useEffect} from 'react';
import './ES.css';
import { useHistory } from 'react-router-dom';
import ED from '../lcvimages/enterdetails.png';
import Axios from 'axios';

function EmployeeServices() {
    let history = useHistory();

    const [yourDetails, setYourDetails] = useState([]);

  useEffect(() => {
    Axios.get(
      `http://localhost:3008/yourdetails/${localStorage.getItem("username")}`
    ).then((response) => {
      setYourDetails(response.data);
    });
  },[]);


    const toEmployeeForm = ()=>{
        history.push('/employeeform')
    }

    return (
        <div className="ESContainer">
            <div className="ESContainerInner">
                <div className="ESImageTop"><img src={ED} className="ESImage" onClick={toEmployeeForm}></img></div>

                <div className="ESInnerTop">
                    <h1 className="ESInnerTopText">If Nothing Shows Here, Please Go And Enter Details</h1>
                </div>
                <div className="ESInnerSecond">
                {yourDetails.map((val, key) => {
                    return(
                        <div className="ESDynamicContainer">
                    <div className="ES1">
                        <h1 className="estext">Name: {val.name}</h1>
                        <h1 className="estext">Middle Name: {val.middlename}</h1>
                        <h1 className="estext">Surname: {val.surname}</h1>
                    </div>
                    <div className="ES2">
                        <h1 className="estext">Date Of Birth: {val.dob}</h1>
                        <h1 className="estext">id Number: {val.idNumber}</h1>
                        {/* <h1 className="estext">Surname: {val.surname}</h1> */}
                    </div>
                    <div className="ES1">
                        <h1 className="estext">Day You Started Work: {val.startedWork}</h1>
                        <h1 className="estext">Nationality: {val.nationality}</h1>
                        <h1 className="estext">Phone Number: {val.phoneNumber}</h1>
                    </div>
                    <div className="ES2">
                        <h1 className="estext">Date Of Birth: {val.dob}</h1>
                        <h1 className="estext">id Number: {val.idNumber}</h1>
                        {/* <h1 className="estext">Surname: {val.surname}</h1> */}
                    </div>
                    <div className="ES1center">
                        {/* <h1 className="estext">Day You Started Work: {val.startedWork}</h1> */}
                        <h1 className="estext">Address: {val.address}</h1>
                        {/* <h1 className="estext">Phone Number: {val.phoneNumber}</h1> */}
                    </div>
                    <div className="ES2">
                        <h1 className="estext">Email: {val.email}</h1>
                        <h1 className="estext">Sex: {val.sex}</h1>
                        <h1 className="estext">Number Of Dependants: {val.numberOfDependants}</h1>
                    </div>
                    <div className="ES1">
                        <h1 className="estext">Emergency Contact Name: {val.emergencyContactName}</h1>
                        <h1 className="estext">Relationship To You: {val.relationship}</h1>
                        <h1 className="estext">Emergency Contact: {val.emergencyContact}</h1>
                    </div>
                    <div className="ES2">
                        <h1 className="estext">Relationship Status: {val.relationshipStatus}</h1>
                        <h1 className="estext">Medical Aid: {val.medicalAidName}</h1>
                        {/* <h1 className="estext">Number Of Dependants: {val.numberOfDependants}</h1> */}
                    </div>
                    
                    </div>
                   
                    
                    

                    );


                })}  
                                </div>
            </div>
            
        </div>
    )
}

export default EmployeeServices;
