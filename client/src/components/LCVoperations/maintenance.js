import React from 'react';
import './maintenance.css'

import auxiliary from '../pictures/MaintBending.png';
import additive from '../pictures/MaintVehicles.png';
import forming from '../pictures/MaintBuilding.png';
import profiling from '../pictures/MaintCutting.png';
import subtrade from '../pictures/MaintFabrication.png';
import auxiliaryI from '../pictures/MaintMachineShop.png';
import tools from '../pictures/MaintSmallTools.png';
import { useHistory } from 'react-router-dom';
import back from '../pictures/ImagesJade/back.png';

function Maintenance() {
    let history = useHistory();


    const toAuxiliary = () => {
        history.push('/auxiliary')

    }

    const toAdditive = ()=>{
        history.push('/additive')
    }

    const toSubtrade = ()=>{
        history.push('/forming')
    }

    const toForming = ()=>{
        history.push('/subtrade')
    }
    const toProfiling = ()=>{
        history.push('/profiling')
    }
    const toVehicles = ()=>{
        history.push('/vehicles')
    }
    const toBuildings = ()=>{
        history.push('/buildings')

    }
    const toAutomation = ()=>{
        history.push('/automation')
    }
    const toBack =()=>{
        history.push('/lcv')
    }

    return (
        <div className="maintenance">

            <div className="BackContainer">
                <img src={back} alt="" className="backImage" onClick={toBack}></img>
            </div>
            
            <div className="mant__Top">
                <div className="sectionI">
                <img src={profiling} alt="" id="mantImage" onClick={toProfiling}></img>
                <h1 className="sectionT">Profiling/Cutting</h1>
                </div>
                <div className="sectionI">
                <img src={auxiliary} alt="" id="mantImage" onClick={toSubtrade}></img>
                <h1 className="sectionT">Bending/Forming</h1>
                </div>
                
                <div className="sectionI">
                <img src={auxiliaryI} alt="" id="mantImage" onClick={toAdditive}></img>
                <h1 className="sectionT">Additive Machinery</h1>
                </div>
                <div className="sectionI">
                <img src={subtrade} alt="" id="mantImage" onClick={toForming}></img>
                <h1 className="sectionT">Subtractive Machinery</h1>
                </div>
                
            </div>
            <div className="mant__Bottom">
                <div className="sectionI">
                <img src={auxiliary} alt="" id="mantImage" onClick={toAutomation}></img>
                <h1 className="sectionT">Automation</h1>
                </div>
                <div className="sectionI">
                <img src={tools} alt="" id="mantImage" onClick={toAuxiliary}></img>
                <h1 className="sectionT">Auxiliary Equipment</h1>
                </div>
                <div className="sectionI">
                <img src={forming} alt="" id="mantImage" onClick={toBuildings}></img>
                <h1 className="sectionT">Buildings</h1>
                </div>
                <div className="sectionI">
                <img src={additive} alt="" id="mantImage" onClick={toVehicles}></img>
                <h1 className="sectionT">Vehicles</h1>
                </div>
            </div>
            <div>



            </div>
            
        </div>
    )
}

export default Maintenance;
