import { Avatar } from '@material-ui/core';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, {forwardRef, useEffect, useState} from 'react';
import InputOption from './InputOption';
import './Post.css';
import avatar from './profileNyasha.png';
import Axios from "axios";
import { Image } from 'cloudinary-react';
import myImage from '../newpictures/document.jpg';

const PostDoc = forwardRef(({name, doctitle, docname, docUrl,posts, timestamp, document},ref) => {

    useEffect(() => {
        Axios.get(
          `http://localhost:3008/profileget/${localStorage.getItem("username")}`
        ).then((response) => {
          setYourProfile(response.data);
        });
      }, []);

    const [yourProfile, setYourProfile] = useState([]);

    return (
        <div ref={ref}className="post">
            <div className="post__header">
            {yourProfile.map((val, key) => {
            return (
              <div className="post__profile" id="btneffect2">
                <Image
                  cloudName="dxq9xddzm"
                  publicId={val.picture}
                  className="post__cloudinary"
                  id="post__profile"
                />
              </div>
            );
          })}
                
                   
                <div className="post__info">
                    <h2>Uploaded By: {name}</h2>
                    <p>Document Title: {doctitle}</p>
                </div>
            </div>

            <div className="post__body">
                <p>Full Document Name: {docname}</p>
            </div>
            <div>
                
            </div>
            <div className="document__display">
              <img src={myImage}  alt="" className="document__image"></img>
              <a href={docUrl} alt="" className="documents__link">Right Click To Download</a>
              <h1 className="document__date">{new Date(timestamp?.toDate()).toUTCString()}</h1>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlined} title="LIKE" color="gray"/>
                <InputOption Icon={ChatOutlined} title="Comment" color="gray"/>
                <InputOption Icon={ShareOutlined} title="Share" color="gray"/>
                <InputOption Icon={SendOutlined} title="Send" color="gray"/>
            </div>
            
        </div>
    )
})

export default PostDoc;
