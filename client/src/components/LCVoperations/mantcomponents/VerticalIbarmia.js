import React from 'react';
import '../mantcomponents/machines.css';
import CNC2 from '../../pictures/ImagesJade/cnc3086r.png';
import ibarmia from '../../pictures/ImagesJade/ibarmia.jpg';
import { useHistory } from "react-router-dom";
import back from '../../pictures/ImagesJade/back.png';

function Ghs() {
    let history = useHistory();
    const toBack = ()=>{
        history.push("/subtrade");
    }
    return (
        <div className="machContainer">
            <div className="BackContainer1">
                <img src={back} alt="" className="backImage1" onClick={toBack}></img>
            </div>

            <div className="matchTop">
                <img className="mtImage" src={ibarmia}></img>
            </div>

            <div className="machInner">
                <div className="machHeading"><h1 className="machHtext">Machine Specifications</h1>
                </div>


                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Machine Name</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">CNC Bemato [Milling]</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Make</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText"></h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Model</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">BMT-3086R</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Bed Size</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">x = 2180mm * y = 210mm</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">(excl Tool and Vice)</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">z = 770mm</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Machine Travel</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">x = 1945mm y = 790mm z = 660mm</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Capacity</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText"></h1>
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
                <div className="machHeading"><h1 className="machHtext">Maintenance Schedule</h1>
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
                    <h1 className="machText">30 June 2021</h1>
                    </div>
                </div>
                

            </div>
            
        </div>
    )
}

export default Ghs;
