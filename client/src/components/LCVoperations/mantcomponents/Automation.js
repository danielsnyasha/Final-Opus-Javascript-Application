import React from 'react';
import './Universal.css';
import { useHistory } from 'react-router-dom';
import back from '../../pictures/ImagesJade/back.png';

import ROBOTimaage from '../../maintImages/RobotArcWelder.png';

function Vehicle() {
    let history = useHistory();

    const toRobot = () => {
        history.push('/robot')

        }

    const toFork2 = () => {
        history.push('/forklift')
    
        }
    const toBukkie = () => {
            history.push('/bukkie')
    
        }
    const toMotoman = () => {
        history.push('/autorobot')

        }
    const toBack = () => {
        history.push('/maintenance')
    }

    return (

        <div className="forming">
    
        <div className="forming__top">
                    <img src={back} alt="" className="backImage" onClick={toBack}></img>
        </div>
                
          <div className="forming__container">
            <div className="forming__row">
              <div className="forming__imgTab" onClick={toRobot}>
                <img src={ROBOTimaage} alt="" className="forming__image"></img>
              </div>
              {/* <div className="forming__imgTab" onClick={toFork2}>
                <img src={dieselclark} alt="" className="forming__image"></img>
              </div>
              <div className="forming__imgTab" onClick={toBukkie}>
                <img src={bakkiehyundai} alt="" className="forming__image"></img>
              </div> */}
            </div>
    
            {/* <div className="forming__rowb">
              <div className="forming__imgTab" onClick={toChasis}>
                <img src={hinochassis} alt="" className="forming__image"></img>
              </div>
    
            </div> */}
          </div>
        </div>
      );
}

export default Vehicle;
