import React,{useState, useEffect} from 'react';
import Axios from 'axios';


import '../../ExtraPages/WOALLdays.css';
import ourlogolcv from '../../pictures/lcvpng.png';

function Alldays() {
    const [LCVdata, setLCVdata ] = useState([]);

    useEffect(() => {
        Axios.get(
          `http://localhost:3008/woalldays/${localStorage.getItem("username")}`
        ).then((response) => {
          setLCVdata(response.data);
        });
      },[]);

    return (
        <div className="App1">
            <div className="float-logo">
                <img src={ourlogolcv} alt="website logo" className="mylogo"></img>
            </div>

            <div className="SecondColumn">
                <div className="FirstCover">
               <div className ="Segment111pri">   
               <h1 className="TitleText1">Date Printed</h1>
               </div>  
               <div className="Segment">
               <h1 className="TitleText1">Phone Number</h1>
               </div>
               <div className="Segment">
               <h1 className="TitleText1">Delivery Days</h1>
               </div>
               <div className="Segment">
               <h1 className="TitleText1">QuoteID</h1>
               </div>
               <div className="Segment">
               <h1 className="TitleText1">Status</h1>
               </div>
               <div className="Segmentpro">
               <h1 className="TitleText1">Company Name</h1>
               </div>
               </div>

               {LCVdata.map((val)=>{
                return <div className="FirstCover">
               <div className ="Segment1pri">   
               <h1 className="TitleText">{val.DatePrinted}</h1>
               </div>  
               <div className="Segment1">
               <h1 className="TitleText">{val.Phone}</h1>
               </div>
               <div className="Segment1">
               <h1 className="TitleText">{val.DeliveryTime}</h1>
               </div>
               <div className="Segment1">
               <h1 className="TitleText">{val.QuoteID}</h1>
               </div>
               <div className="Segment1">
               <h1 className="TitleText">{val.Status}</h1>
               </div>
               <div className="Segment1pro">
               <h1 className="TitleText">{val.CompanyName}</h1>
               </div>
               </div>

           
            })}

            </div>
            </div>
    )
}

export default Alldays;