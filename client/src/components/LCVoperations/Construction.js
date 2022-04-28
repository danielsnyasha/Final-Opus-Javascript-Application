import React from 'react';
import './underconstruction/construction.css';
import coverImage from '../pictures/covers/about1.jpg';
import back from '../pictures/ImagesJade/lcv.png';
import { useHistory } from "react-router-dom";

function Construction() {
    let history = useHistory();
    const toBack = ()=>{
        history.push("/lcv");
    }
    return (
        <div className="UnderConstruction">
            <div className="BackContainer1">
                
        <img src={back} alt="" className="backImage1" onClick={toBack}></img>
      </div>
            <div className="innerUC">
            
                <img src={coverImage} alt="" className="conImage"></img>
            </div>
        </div>
    )
}

export default Construction;
