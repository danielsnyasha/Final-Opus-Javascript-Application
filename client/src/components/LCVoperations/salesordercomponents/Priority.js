import React, { useState, useEffect } from "react";
import '../../ExtraPages/Search.css';
import Axios from "axios";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { Image } from "cloudinary-react";
import magnifying from '../lcvimages/magnifying.png';


function Search() {
  const [yourSearch, setYourSearch] = useState([]);

  const search =()=>{
    
    Axios.get("http://localhost:3008/search")
          .then((response)=>{
            console.log(response.data)
            yourSearch(response.data)
            
            
        })}

//   useEffect(() => {
//     search();
// }, [yourSearch]);

// useEffect(() => {
//   Axios.get("http://192.168.0.2:3008/upload").then((response) => {
//     setUploads(response.data);
//     response.data.map((val) => {
//       setLikes([...likes, val.likes]);
//     });
//   });
//   console.log(likes);
// }, []);






  return (
    <div className="ContainerSearch">
      <div className="usernameTabSearch">
        <h1 className="usernameTab1">logged in as:  {localStorage.getItem("username")}</h1>
        </div>
      <div className="usernameTabSearch1">
        <input type="text" className="SearchInput" placeholder="Search By Company Name" onChange={(event) => {
              setYourSearch(event.target.value);
            }}/>
        <img src={ magnifying } className="searchImage" id="searchImageHover" onClick={search}></img>

      </div>
      {yourSearch.map((val, key) => {
        return (
          <div className="">
            

            <div className="">
              <div className="">{val.QuoteID}</div>
              <div className="">{val.CompanyName}</div>
            </div>
            {/* <div className="">{val.likes}</div> */}
          </div>
        );
      })}
    </div>
  );
}

export default Search;
