import React,{useState, useEffect} from 'react';
import Axios from 'axios';


import '../../ExtraPages/Alldays.css'
import ourlogolcv from '../../pictures/lcvpng.png';

function NewestCustomers() {
    const [LCVmonth, setLastMonth ] = useState([]);

    useEffect(() => {
        Axios.get(
          `http://localhost:3008/lastmonth/${localStorage.getItem("username")}`
        ).then((response) => {
          setLastMonth(response.data);
        });
      },[]);

    return (
        <div className="App1">


            <div className="float-logo">
                <img src={ourlogolcv} alt="website logo" className="mylogo"></img>
            </div>

            <div className="SecondColumn">
                <div className="FirstCover">
               <div className ="Segmentprim">   
               <h1 className="TitleText1">Company Name</h1>
               </div>  
               <div className="Segmentpr">
               <h1 className="TitleText1">Contact Name</h1>
               </div>
               <div className="Segmentpr">
               <h1 className="TitleText1">Phone Number</h1>
               </div>
               <div className="Segmentpr">
               <h1 className="TitleText1">CustomerID</h1>
               </div>
               
               </div>

               {LCVmonth.map((val)=>{
                return <div className="FirstCover">
               <div className ="Segment1pri">   
               <h1 className="TitleText">{val.CompanyName}</h1>
               </div>  
               <div className="Segment1pri">
               <h1 className="TitleText">{val.ContactName}</h1>
               </div>
               <div className="Segment1pri">
               <h1 className="TitleText">{val.Phone}</h1>
               </div>
               <div className="Segment1pri">
               <h1 className="TitleText">{val.CustomerID}</h1>
               </div>
              
               </div>

           
            })}

            </div>
            </div>
    )
}

export default NewestCustomers;



    





// import React from 'react';
// import moment from 'moment';

// const Newestcustomers=()=>{

//   var date= moment().format("DD/MM/YYYY");
//   var time = moment().format("HH:mm:ss")

//   return(
//     <div>
//     <h1>{time}</h1>
//     <h1>{date}</h1>
//     </div>
//   )
// }
  
// export default Newestcustomers;









