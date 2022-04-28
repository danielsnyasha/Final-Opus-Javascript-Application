import React from 'react';
import '../mantcomponents/machines.css';
import bevel from '../../pictures/ImagesJade/bevel.jpg';
import { useHistory } from "react-router-dom";
import back from '../../pictures/ImagesJade/back.png';

function AB2() {
    let history = useHistory();
    const toBack = ()=>{
        history.push("/auxiliary");
    }

    return (
        <div className="machContainer">
            <div className="BackContainer1">
                <img src={back} alt="" className="backImage1" onClick={toBack}></img>
            </div>
            {/* <div className="matchTop">
                <img className="mtImage" src={bevel}></img>
            </div> */}
            <div className="machInner">
                <div className="machHeading"><h1 className="machHtext">Machine Specifications</h1>
                </div>


                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Machine Name</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">Beveling Machine #1</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Make/Model</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">Gerima</h1>
                    </div>
                </div>
                {/* <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Tonnage</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">1.3</h1>
                    </div>
                </div> */}
                
               
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

export default AB2;
