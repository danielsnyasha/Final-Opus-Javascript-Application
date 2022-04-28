import React from 'react'
import './Universal.css';
import { useHistory } from 'react-router-dom';
import back from '../../pictures/ImagesJade/back.png';

import MagneticBase1 from '../../maintImages/AUXILIARY/magneticBase.png';
import MagneticBase2 from '../../maintImages/AUXILIARY/magneticBase.png';
import MagneticBase3 from '../../maintImages/AUXILIARY/magneticBase.png';
import strappingIMAGE from '../../maintImages/AUXILIARY/Strapping_machine.png';
import dotPeenIMAGE from '../../maintImages/AUXILIARY/DOTpeen.png';
import bevelingImage1 from '../../maintImages/AUXILIARY/Beveling1.png';
import bevelingImage2 from '../../maintImages/AUXILIARY/Beveling2.png';
import bevelingImage3 from '../../maintImages/AUXILIARY/Beveling3.png';
import mobilebeveling from '../../maintImages/AUXILIARY/MobileBeveling.png';
import pc1image from  '../../maintImages/AUXILIARY/plasmacutter.png';
import pc2image from  '../../maintImages/AUXILIARY/plasmacutter2.png';
import pc3image from '../../maintImages/AUXILIARY/plasmacutter3.png';
import OXimage from  '../../maintImages/AUXILIARY/OXfuelflame.png';
import slgcImage from  '../../maintImages/AUXILIARY/straightline_gascutter.png';
import slgcBeetle from  '../../maintImages/AUXILIARY/straightline_gascutterBeetle.png';
import slgcimage3 from  '../../maintImages/AUXILIARY/straightline_gascutterLK_12.png';

// import Auxiliary from './auxiliary';

function Auxiliary() {
    let history = useHistory();

    const toSGSover1 = () => {
        history.push('/sgs1')

        }

    const toMag1 = () => {
        history.push('/magnetic')
    
        }
    const toMag2 = () => {
            history.push('/magnetic2')
    
        }
    const toMag3 = () => {
        history.push('/magnetic3')

        }
    const toStrapping = () => {
        history.push('/strapping')
    
        }
    const toDot = () => {
        history.push('/dot')
    
        }

    const toBevelling = () => {
        history.push('/bevelling')
        
            }

    const toBevelling2 = () => {
        history.push('/bevelling2')
    }
    const toBevelling3 = () => {
        history.push('/bevelling3')
    }
    const toMobile = () => {
        history.push('/mobile')

    }
    const toPC =()=> {
        history.push('/pc')
    }
    const toPC2 =()=>{
        history.push('/pc2')
    }
    const toOxflame = ()=>{
        history.push('/oxflame')
    }
    const toSLGC = ()=> {
        history.push('/slgc')
    }
    const toSLGCb = ()=> {
        history.push('/slgcb')
    }

    const toSLGC3 = ()=>{
        history.push('/slgc3')
        
    }
    const toBack = ()=>{
        history.push('/maintenance')
    }


    return (

        <div className="forming">
    
        <div className="forming__top">
                    <img src={back} alt="" className="backImage" onClick={toBack}></img>
        </div>
                
          <div className="auxiliary__container">
            <div className="auxiliary__row">
              <div className="forming__imgTab" onClick={toMag1}>
                <img src={MagneticBase1} alt="" className="forming__image"></img>
              </div>
              <div className="forming__imgTab" onClick={toMag2}>
                <img src={MagneticBase2} alt="" className="forming__image"></img>
              </div>
              <div className="forming__imgTab" onClick={toMag3}>
                <img src={MagneticBase3} alt="" className="forming__image"></img>
              </div>
              <div className="forming__imgTab" onClick={toStrapping}>
                <img src={strappingIMAGE} alt="" className="forming__image"></img>
              </div>
            </div>
    
            <div className="auxiliary__row">
              <div className="forming__imgTab" onClick={toDot}>
                <img src={dotPeenIMAGE} alt="" className="forming__image"></img>
              </div>
    
              <div className="forming__imgTab" onClick={toBevelling}>
                <img src={bevelingImage1} alt="" className="forming__image"></img>
              </div>
              <div className="forming__imgTab" onClick={toBevelling2}>
                <img src={bevelingImage2} alt="" className="forming__image"></img>
              </div>
              <div className="forming__imgTab" onClick={toBevelling3}>
                <img src={bevelingImage3} alt="" className="forming__image"></img>
              </div>
            </div>

            <div className="auxiliary__row">
              <div className="forming__imgTab" onClick={toMobile}>
                <img src={mobilebeveling} alt="" className="forming__image"></img>
              </div>
    
              <div className="forming__imgTab" onClick={toPC}>
                <img src={pc1image} alt="" className="forming__image"></img>
              </div>
              <div className="forming__imgTab" onClick={toPC2}>
                <img src={pc2image} alt="" className="forming__image"></img>
              </div>
              <div className="forming__imgTab" onClick={toOxflame}>
                <img src={OXimage} alt="" className="forming__image"></img>
              </div>
            </div>

            <div className="auxiliary__row">
              <div className="forming__imgTab" onClick={toSLGC}>
                <img src={slgcImage} alt="" className="forming__image"></img>
              </div>
    
              <div className="forming__imgTab" onClick={toSLGCb}>
                <img src={slgcBeetle} alt="" className="forming__image"></img>
              </div>
              <div className="forming__imgTab" onClick={toSLGC3}>
                <img src={slgcimage3} alt="" className="forming__image"></img>
              </div>
              <div className="forming__imgTab" onClick={toPC}>
                <img src={pc3image} alt="" className="forming__image"></img>
              </div>
            </div>

          </div>
        </div>
      );
}

export default Auxiliary;
