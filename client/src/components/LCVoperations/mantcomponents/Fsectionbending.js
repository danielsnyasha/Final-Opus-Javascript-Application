import React from 'react';
import '../mantcomponents/machines.css';
import sectionBend from '../../pictures/ImagesJade/sectionBend.jpg';
import { useHistory } from "react-router-dom";
import back from '../../pictures/ImagesJade/back.png';

function FSB() {
    let history = useHistory();
    const toBack = ()=>{
        history.push('/forming')
    }
    return (
        <div className="machContainer">
            {/* <div className="matchTop">
        <img className="mtImage" src={sectionBend}></img>
      </div> */}
      
      <div className="BackContainer1">
        <img src={back} alt="" className="backImage1" onClick={toBack}></img>
      </div>
            <div className="machInner">
                <div className="machHeading"><h1 className="machHtext">Machine Specifications</h1>
                </div>


                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Machine Name</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">Section Bending CNC</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Make</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">MG sri</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Model</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">AR-140</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Roll Diameter</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">350mm</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Maximum Bend Length</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText"></h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Working Length</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">N/A</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Max Plate Thickness</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText"></h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Power</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText"></h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Max Plate Thickness</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">10mm</h1>
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

export default FSB;
