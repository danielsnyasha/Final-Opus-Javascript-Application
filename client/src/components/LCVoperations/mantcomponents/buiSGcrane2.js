import React from 'react';
import '../mantcomponents/machines.css';
import sg2 from '../../pictures/ImagesJade/sgs2.jpg';
import { useHistory } from "react-router-dom";
import back from '../../pictures/ImagesJade/back.png';

function SGS3() {
    let history = useHistory();
    const toBack = ()=>{
        history.push("/buildings");
    }

    return (
        <div className="machContainer">

{/* <div className="matchTop">
                <img className="mtImage" src={sg2}></img>
            </div> */}

            <div className="BackContainer1">
                <img src={back} alt="" className="backImage1" onClick={toBack}></img>
            </div>

            <div className="machInner">
                <div className="machHeading"><h1 className="machHtext">Building Specifications</h1>
                </div>


                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Building Name</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">SGS Overhead Crane</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Rating</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">10 Ton</h1>
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
                    <h1 className="machText">Span</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">18m</h1>
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
                    <h1 className="machText">Built in Year</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText"></h1>
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

export default SGS3;

