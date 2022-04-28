import React from 'react'
import './Universal.css';
import { useHistory } from 'react-router-dom';
import back from '../../pictures/ImagesJade/back.png';
import ThreeRollImmage from '../../maintImages/3ROLLmachine.png';

import CNC1image from '../../maintImages/CNC1.png';
import CNC2image from '../../maintImages/CNC2.png';
import CNC3image from '../../maintImages/CNC3.png';
import VerticalDMmach from '../../maintImages/Vertical-Drilling-Machine.png';
import Conv3image from '../../maintImages/Conv_Lathe.png';
import SurfaceGimage from '../../maintImages/Surface-Grinder.png';

import './profiling/profiling.css';

function Forming() {
    let history = useHistory();

    const toBMT2473 = () => {
        history.push('/bMT2473')

        }

    const toBMT3086 = () => {
        history.push('/bMT3086r')
    
        }
    const toIbarmia = () => {
            history.push('/ibarmia')
    
        }
    const toUnknown = () => {
        history.push('/unknown')

        }
    const toSN50C = () => {
        history.push('/sn50c')
    
        }
    const toOSP4100C = () => {
        history.push('/osp4100c')
    
        }
    const toBack =()=>{
        history.push('/maintenance')
    }



    return (

        <div className="forming">
    
        <div className="forming__top">
                    <img src={back} alt="" className="backImage" onClick={toBack}></img>
        </div>
                
          <div className="forming__container">
            <div className="forming__row">
              <div className="forming__imgTab" onClick={toBMT2473}>
                <img src={CNC1image} alt="" className="forming__image"></img>
              </div>
              <div className="forming__imgTab" onClick={toBMT3086}>
                <img src={CNC2image} alt="" className="forming__image"></img>
              </div>
              <div className="forming__imgTab" onClick={toIbarmia}>
                <img src={VerticalDMmach} alt="" className="forming__image"></img>
              </div>
            </div>
    
            <div className="forming__rowb">
              <div className="forming__imgTab" onClick={toUnknown}>
                <img src={CNC3image} alt="" className="forming__image"></img>
              </div>
    
              <div className="forming__imgTab" onClick={toSN50C}>
                <img src={Conv3image} alt="" className="forming__image"></img>
              </div>
              <div className="forming__imgTab" onClick={toOSP4100C}>
                <img src={SurfaceGimage} alt="" className="forming__image"></img>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Forming;
