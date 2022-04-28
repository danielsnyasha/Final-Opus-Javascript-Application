import React from 'react'
import './Universal.css';
import { useHistory } from 'react-router-dom';
import back from '../../pictures/ImagesJade/back.png';


import SGScrane1 from '../../maintImages/SGSoverhead_crane.png';
import SGScrane2 from '../../maintImages/SGSoverhead_craneOFF.png';
import DieselGenImage from '../../maintImages/Diesel__Generator.png';
import demagImage from '../../maintImages/Demagoverhead.png';
import demagImage2 from '../../maintImages/Demagoverhead2.png';
import RotaryImage from '../../maintImages/Rotary_Screw_Compressor.png'
import CompressorImage from '../../maintImages/Compressor_Atlas_Copco.png';

function Buildings() {
    let history = useHistory();

    const toSGSover1 = () => {
        history.push('/sgs1')

        }

    const toDemag = () => {
        history.push('/demag')
    
        }
    const toDemag2 = () => {
            history.push('/demag2')
    
        }
    const toSGSover2 = () => {
        history.push('/sgs2')

        }
    const toSGSover3 = () => {
        history.push('/sgs3')
    
        }
    const toDiesel = () => {
        history.push('/diesel')
    
        }

    const toCompressor = () => {
        history.push('/compressor')
        
            }

    const toRotary = () => {
        history.push('/rotary')
    }
    const toBack = ()=> {
        history.push('/maintenance')
    }

    return (

        <div className="forming">
    
        <div className="forming__top">
                    <img src={back} alt="" className="backImage" onClick={toBack}></img>
        </div>
                
          <div className="forming__container">
            <div className="forming__row">
              <div className="forming__imgTab" onClick={toSGSover1}>
                <img src={SGScrane1} alt="" className="forming__image"></img>
              </div>
              <div className="forming__imgTab" onClick={toSGSover2}>
                <img src={SGScrane2} alt="" className="forming__image"></img>
              </div>
              <div className="forming__imgTab" onClick={toSGSover3}>
                <img src={SGScrane2} alt="" className="forming__image"></img>
              </div>
            </div>
    
            <div className="forming__rowb">
              <div className="forming__imgTab" onClick={toDemag}>
                <img src={demagImage} alt="" className="forming__image"></img>
              </div>
    
              <div className="forming__imgTab" onClick={toDemag2}>
                <img src={demagImage2} alt="" className="forming__image"></img>
              </div>
              <div className="forming__imgTab" onClick={toDiesel}>
                <img src={DieselGenImage} alt="" className="forming__image"></img>
              </div>
            </div>

            <div className="forming__rowb">
              <div className="forming__imgTab" onClick={toRotary}>
                <img src={RotaryImage} alt="" className="forming__image"></img>
              </div>
    
              <div className="forming__imgTab" onClick={toCompressor}>
                <img src={CompressorImage} alt="" className="forming__image"></img>
              </div>
              {/* <div className="forming__imgTab" onClick={toOSP4100C}>
                <img src={SurfaceGimage} alt="" className="forming__image"></img>
              </div> */}
            </div>

          </div>
        </div>
      );
}

export default Buildings;
