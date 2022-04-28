import { Avatar } from '@material-ui/core';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, {forwardRef, useEffect, useState} from 'react';
import InputOption from './InputOption';
import './Post.css';
import avatar from './profileNyasha.png';
import Axios from "axios";
import { Image } from 'cloudinary-react';

const Post = forwardRef(({name, description, message, imageUrl},ref) => {

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
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>
            <div>
                <img src={imageUrl} alt="" className="post__image"></img>
            </div>
            {/* <div>
              <a href={imageUrl}>Download Image</a>
            </div> */}

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlined} title="LIKE" color="gray"/>
                <InputOption Icon={ChatOutlined} title="Comment" color="gray"/>
                <InputOption Icon={ShareOutlined} title="Share" color="gray"/>
                <InputOption Icon={SendOutlined} title="Send" color="gray"/>
            </div>
            
        </div>
    )
})

export default Post;
