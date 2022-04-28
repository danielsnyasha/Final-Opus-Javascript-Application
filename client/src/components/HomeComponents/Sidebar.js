import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import Axios from "axios";
import { Image } from 'cloudinary-react';

function Sidebar() {

    useEffect(() => {
        Axios.get(
          `http://localhost:3008/profileget/${localStorage.getItem("username")}`
        ).then((response) => {
          setYourProfile(response.data);
        });
      }, []);

    const [yourProfile, setYourProfile] = useState([]);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JILWZlZWR8MXx8fGVufDBBfHw%3D&w=1000&q=80" alt=""/>
                {/* <Avatar className="sidebar__avatar" > */}
                <div className="sidebar__profile">


                {yourProfile.map((val, key) => {
            return (
              <div className="sidebar__profileContainer" id="btneffect2">
                <Image
                  cloudName="dxq9xddzm"
                  publicId={val.picture}
                  className="sidebar__cloudinary"
                  id="post__profile"
                />
              </div>
            );
          })}
                </div>
                {/* </Avatar> */}
                <h2>{localStorage.getItem("username")}</h2>
                <h4>example@lcv.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">14</p>

                </div>

                <div className="sidebar__stat">
                <p>Views on Post</p>
                    <p className="sidebar__statNumber">7</p>

                </div>


            </div>

            <div className="sidebar__bottom">
                <p>@LCV</p>
                {recentItem('bending')}
                {recentItem('laser cutting')}
                {recentItem('fabrication')}
                {recentItem('welding')}
                {recentItem('automation')}
            </div>

            <div className="sidebar__bottomest">

            </div>




           
        </div>
    )
}

export default Sidebar;
