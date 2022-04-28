import React from 'react';
import '../mantcomponents/machines.css';
import plasma1 from '../../pictures/ImagesJade/plasma1.jpg';
import { useHistory } from "react-router-dom";
import back from '../../pictures/ImagesJade/back.png';

function AMag() {
    let history = useHistory();
    const toBack = ()=>{
        history.push("/auxiliary");
    }
    return (
        <div className="machContainer">
            <div className="BackContainer1">
                <img src={back} alt="" className="backImage1" onClick={toBack}></img>
            </div>
            <div className="matchTop">
                <img className="mtImage" src={plasma1}></img>
            </div>
            <div className="machInner">
                <div className="machHeading"><h1 className="machHtext">Machine Specifications</h1>
                </div>


                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Machine Name</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">Plasma Cutter</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Make/Model</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">Hyperthermum</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Model</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">Powermax 85</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Severance</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">38mm</h1>
                    </div>
                </div>
                <div className="mdivs">
                    <div className="machCont">
                    <h1 className="machText">Max Plate Thickness</h1>
                    </div>
                    <div className="machCont">
                    <h1 className="machText">32mm [recommended]</h1>
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

export default AMag;

