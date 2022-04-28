import React from 'react';
import './customers.css';

import { useHistory } from 'react-router-dom';

// import mostregular from './lcvimages/mostregular.png';
// import oldest from './lcvimages/longestserved.png';
// import newest from './lcvimages/newestcustomers.png';
// import allcustomers from './lcvimages/allcustomers.png';

import mostregular from '../pictures/new/mostregularcustomers.png';
import oldest from '../pictures/new/longestservedcustomers.png';
import logPicture from '../pictures/covers/logistics.png';
import newest from '../pictures/new/newestcustomers.png';
import tecPicture from "../pictures/covers/technical.png";
import allcustomers from '../pictures/new/allcustomers.png';
// import { useHistory } from "react-router-dom";

import back from '../pictures/ImagesJade/back.png';

function TrackOrders() {
    let history = useHistory();
    const toBack = () => {
        history.push("/lcv");
    }
    const toMostregular = () => {
        history.push('/underconstruction')
    }
    const toNewestCustomers = () => {
        history.push('/underconstruction')
    }
    const toOldestCustomers = () => {
        history.push('/underconstruction')
    }
    const toAllCustomers = () => {
        history.push('/underconstruction')
    }

    return (
        <div className="CUScontainer">
            <div className="BackContainer1">
                <img src={back} alt="" className="backImage1" onClick={toBack}></img>
            </div>
            <div className="CUSinnercontainer">

                <div className="containerCUS">
                    <img src={mostregular} alt="one" className="CUSimages" id="btneffectCUS" onClick={toMostregular}></img>
                    <img src={newest} alt="one" className="CUSimages" id="btneffectCUS" onClick={toNewestCustomers}></img>
                    <img src={oldest} alt="one" className="CUSimages" id="btneffectCUS" onClick={toOldestCustomers}></img>
                    <img src={allcustomers} alt="one" className="CUSimages" id="btneffectCUS" onClick={toAllCustomers}></img>
                </div>
                <div className="SOcontainer">
                <img src={tecPicture} alt="" className="SOimage"></img>
            </div>

            </div>
            
        </div>
    )
}

export default TrackOrders;


