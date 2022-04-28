import React,{useState, useEffect} from 'react';
import Axios from "axios";
import { useHistory } from 'react-router-dom';
import './EF.css'

function EmployeeForm() {
    let history = useHistory();

    const [name, setName] = useState('');
    const [middlename, setMiddlename] = useState('');
    const [surname, setSurname] = useState('');
    const [dob, setdob] = useState('');
    const [startedWork, setStartedWork] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [nationality, setNationality] = useState('');
    const [email, setEmail] = useState('');
    const [emergencyContact, setEmergencyContact] = useState('');
    const [relationship, setRelationship] = useState('');
    const [emergencyContactName, setEmergencyContactName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [address, setAddress] = useState('');
    const [medicalAidName, setMedicalAidName] = useState('');
    const [numberOfDependants, setNumberOfDependants]= useState('');
    const [sex, setsex] = useState('');
    const [relationshipStatus, setRelationshipStatus] = useState('');
    const [idNumber, setIdNumber] = useState ('');
    

    const empForm = () => {
        Axios.post("http://localhost:3008/employeeform", {
          
          
          name: name,
          middlename: middlename,
          surname: surname,
          dob: dob,
          startedWork: startedWork,
          phoneNumber:phoneNumber,
          nationality:nationality,
          email:email,
          emergencyContact:emergencyContact,
          idNumber:idNumber,
          relationship:relationship,
          address:address,
          emergencyContactName:emergencyContactName,
          positionTitle:positionTitle,
          medicalAidName: medicalAidName,
          numberOfDependants:numberOfDependants,
          sex:sex,
          relationshipStatus:relationshipStatus,
          username: localStorage.getItem("username"),

        }).then((response) => {
            history.push('/lcv')
          console.log(response);
          
        });
      };


    return (
        <div className="EFcontainer">
            <div className="EFinnercontainer">
                <div className="TitleEF">
                    <h1 className="titleTextEF">Fill In Your Details</h1>
                </div>


                <div className="TopSection">
                    <div className="TopFirst">
                        <input placeholder="Name" type="text" className="inputCol"  onChange={(event) => {
              setName(event.target.value);
            }} />
                        <input placeholder="MiddleName" type="text" className='inputCol'  onChange={(event) => {
              setMiddlename(event.target.value);
            }} />
                        <input placeholder="Surname" type="text" className='inputCol'  onChange={(event) => {
              setSurname(event.target.value);
            }} />
                    </div>

                    <div className="TopSecond">
                        <div className="topInputEF">
                            <h1 className="textEF">Date You Started Working</h1>

                            <input placeholder="Date" type="text" className="inputColbt"  onChange={(event) => {
              setStartedWork(event.target.value);
            }} />
                        </div>
                        <div className="btmInputEF">
                            <h1 className="textEF">Address</h1>
                            <input placeholder="Address" type="text" className='inputColbt'  onChange={(event) => {
              setAddress(event.target.value);
            }} />
                        </div>

                    </div>
                    
                    

                </div>



                <div className="SecondSection">
                <div className="SecondFirst">
                        <input placeholder="id number" type="text" className="inputCol2nd"  onChange={(event) => {
              setIdNumber(event.target.value);
            }} />
                        <input placeholder="email" type="email" className='inputCol2nd'  onChange={(event) => {
              setEmail(event.target.value);
            }} />
                        <input placeholder="Nationality" type="text" className='inputCol2nd'  onChange={(event) => {
              setNationality(event.target.value);
            }} />
                    </div>

                    <div className="TopSecond">
                        <div className="topInputEF">
                            <h1 className="textEF">Phone Number</h1>

                            <input placeholder="Phone Number" type="tel" className="inputColbt"  onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}/>
                        </div>
                        <div className="btmInputEF">
                            <h1 className="textEF">Date Of Birth</h1>
                            <input placeholder="D.O.B" type="text" className='inputColbt'  onChange={(event) => {
              setdob(event.target.value);
            }}/>
                        </div>

                    </div>
                    </div>

                <div className="ThirdSection">
                <div className="TopFirst">
                        <input placeholder="Emergency Contact Name" type="text" className="inputCol"  onChange={(event) => {
              setEmergencyContactName(event.target.value);
            }}/>
                        <input placeholder="Emergency Contact" type="text" className='inputCol'  onChange={(event) => {
              setEmergencyContact(event.target.value);
            }} />
                        <input placeholder="Relationship to You" type="text" className='inputCol'  onChange={(event) => {
              setRelationship(event.target.value);
            }} />
                    </div>


                    <div className="TopSecond">
                        <div className="topInputEF">
                            <h1 className="textEF">Medical Aid Name</h1>

                            <input placeholder="Name" type="text" className="inputColbt"  onChange={(event) => {
              setMedicalAidName(event.target.value);
            }} />
                        </div>
                        <div className="btmInputEF">
                            <h1 className="textEF">Position At The Company</h1>
                            <input placeholder="Position Title" type="text" className='inputColbt'  onChange={(event) => {
              setPositionTitle(event.target.value);
            }} />
                        </div>

                    </div>
                    </div>

                <div className="FourthSection">
                <div className="LastFirst">
                        <input placeholder="Number of Dependants" type="text" className="inputLast"  onChange={(event) => {
              setNumberOfDependants(event.target.value);
            }}/>
                        <input placeholder="Sex" type="text" className='inputLast'  onChange={(event) => {
              setsex(event.target.value);
            }} />
                        <input placeholder="Relationship Status" type="text" className='inputLast'  onChange={(event) => {
              setRelationshipStatus(event.target.value);
            }} />
                    </div>
                    <div className="LastButton">
                        <button className="LaButton" onClick={empForm}>Apply</button>
                    </div>
                    </div>


            </div>

        </div>
    )
}

export default EmployeeForm;
