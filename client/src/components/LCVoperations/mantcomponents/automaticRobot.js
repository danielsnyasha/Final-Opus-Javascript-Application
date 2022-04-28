import React from 'react';
import '../mantcomponents/machines.css';
import mygenerator from '../../pictures/ImagesJade/generator.jpg';
import robot1 from '../../pictures/ImagesJade/robot.jpg';
import { useHistory } from "react-router-dom";
import back from '../../pictures/ImagesJade/back.png';

function AU() {
    let history = useHistory();
    const toBack = ()=>{
        history.push("/automation");
    }

    return (
        <div className="machContainer">
            <div className="BackContainer1">
                <img src={back} alt="" className="backImage1" onClick={toBack}></img>
            </div>
            {/* <div className="matchTop">
                <img className="mtImage" src={robot1}></img>
            </div> */}
            <div className="machInner">
                <div className="machHeading"><h1 className="machHtext">Building Specifications</h1>
                </div>


                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Name</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">Robotic Arc Welder</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Make</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">Motoman[incl.2 * Manipulator and Weld Cell</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Model</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">TSL-1000SN</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Max Pay Load</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">1000 kg</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Found on</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">Low Bay LCV</h1>
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
                    <h1 className="machText">Asset Tag Number</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">Null</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Reach</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">3.5m * 3.5mm</h1>
                    </div>
                </div>
                {/* <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Power Source</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText"></h1>
                    </div>
                </div> */}
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
                    <h1 className="machText">30May 2021</h1>
                    </div>
                </div>
                

            </div>
            
        </div>
    )
}

export default AU;