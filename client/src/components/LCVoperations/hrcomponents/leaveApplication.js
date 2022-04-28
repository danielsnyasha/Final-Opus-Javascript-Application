import React from 'react';

import './LA.css';

function leaveApplication() {
    return (
        <div className="leaveappContainer">
            <div className="leaveFormBg">
                <div className="firstLineForm">
                    <h1 className="LaHeader">Apply For Leave</h1>
                </div>
                <div className="secondlinela">
                    
                        <div className="Name">
                        <h2 className="nameText">Name</h2>
                        <input placeholder="Enter Name" type="text" className="inputla"/>
                        </div>
                        <div className="Surname">
                        <h2 className="surnameText">Surname</h2>
                        <input placeholder="Enter Surname" type="text" className="inputla"/>
                        </div>
                        
                   

                </div>
               
                    <div className="DateContainer">
                        <div className="Date">
                        <h2 className="nameText">From</h2>
                        <input placeholder="YYYY/MM/DD" type="text" className="inputla" />
                        </div>
                        <div className="Date1">
                        <h2 className="surnameText">To</h2>
                        <input placeholder="YYYY/MM/DD" type="text" className="inputla"/>
                        </div>
                        
                    </div>
                    <div className="secondlinela">
                        <div className="Name">
                        <h2 className="nameText">Reason</h2>
                        <input placeholder="Reason" type="text" className="inputla"/>
                        </div>
                        <div className="Surname">
                        <h2 className="surnameText">Department</h2>
                        <input placeholder="Enter Department" type="text" className="inputla"/>
                        </div>
                        
                   

                </div>

                    <div className="thirdcolumnLA">
                        <div className="bigInputsla">
                            <h2 className="bigtextla">
                                Specify The Reasons For Taking Leave
                            </h2>
                            <input
                            className="myInputsf"
                            placeholder="Enter Reasons For Taking Leave"
                            type="text" />
                            
                         </div>
                    </div>
                    <div className="buttonContainers">
                    <button className="buttonSpecial">Apply</button>
                    </div>

                
                


            </div>
            
        </div>
    )
}

export default leaveApplication;
