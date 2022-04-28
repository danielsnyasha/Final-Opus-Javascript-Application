import React from 'react'
import './Universal.css';
import { useHistory } from 'react-router-dom';
import back from '../../pictures/ImagesJade/back.png';

import './profiling/profiling.css';

import dieseltoyota from '../../maintImages/Diesel_Forklift.png';
import dieselclark from '../../maintImages/Diesel_Forklift_Clark.png';
import bakkiehyundai from '../../maintImages/bukkie_truck_hyundai.png';
import hinochassis from '../../maintImages/Chassis-Cab-Truck.png';
import Conv3image from '../../maintImages/Conv_Lathe.png';
import SurfaceGimage from '../../maintImages/Surface-Grinder.png';

function Vehicle() {
    let history = useHistory();

    const toFork1 = () => {
        history.push('/forklift1')

        }

    const toFork2 = () => {
        history.push('/forklift')
    
        }
    const toBukkie = () => {
            history.push('/bukkie')
    
        }
    const toChasis = () => {
        history.push('/chasis')

        }
    const toBack= ()=>{
        history.push('/maintenance')
    }

    return (

        <div className="forming">
    
        <div className="forming__top">
                    <img src={back} alt="" className="backImage" onClick={toBack}></img>
        </div>
                
          <div className="forming__container">
            <div className="forming__row">
              <div className="forming__imgTab" onClick={toFork1}>
                <img src={dieseltoyota} alt="" className="forming__image"></img>
              </div>
              <div className="forming__imgTab" onClick={toFork2}>
                <img src={dieselclark} alt="" className="forming__image"></img>
              </div>
              <div className="forming__imgTab" onClick={toBukkie}>
                <img src={bakkiehyundai} alt="" className="forming__image"></img>
              </div>
            </div>
    
            <div className="forming__rowb">
              <div className="forming__imgTab" onClick={toChasis}>
                <img src={hinochassis} alt="" className="forming__image"></img>
              </div>
    
              {/* <div className="forming__imgTab" onClick={toSN50C}>
                <img src={Conv3image} alt="" className="forming__image"></img>
              </div>
              <div className="forming__imgTab" onClick={toOSP4100C}>
                <img src={SurfaceGimage} alt="" className="forming__image"></img>
              </div> */}
            </div>
          </div>
        </div>
      );
}

export default Vehicle;
