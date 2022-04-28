import React from 'react';
import '../mantcomponents/machines.css';
import OSP from '../../pictures/ImagesJade/okuma1.jpg';
import { useHistory } from "react-router-dom";
import back from '../../pictures/ImagesJade/back.png';

function Adira() {
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
        <img className="mtImage" src={OSP}></img>
      </div>
            <div className="machInner">
                <div className="machHeading"><h1 className="machHtext">Machine Specifications</h1>
                </div>


                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Machine Name</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">CNC Lathe</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Make/Model</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">Okuma</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Swing (Diameter)</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">250mm</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Centre to Centre</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">1200mm</h1>
                    </div>
                </div>
                
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Serial Number</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText"></h1>
                    </div>
                </div>
                
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Usable Machine Height</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">1800mm</h1>
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

export default Adira;
