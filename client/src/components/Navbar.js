import React, { useEffect, useState } from 'react';
import "./NavbarContainer.css";
import { useHistory } from 'react-router-dom';
import offbuttonred from '../components/pictures/offbuttonred.png';
import BusinessIcon from '@material-ui/icons/Business';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ChatIcon from '@material-ui/icons/Chat';

import lcvHI from './newpictures/lcv1.png';
import Todo from './Todo/Todo';
import { Description, ExitToApp, TodayOutlined } from '@material-ui/icons';
import { Document } from 'react-pdf/dist/esm/entry.webpack';


function Navbar() {
    let history = useHistory()
    const [loggedIn, setLoggedIn] = useState(false);
    const logout = () => {
        history.push('/login')
        setLoggedIn(localStorage.clear()
        )};

    const toWelcome=()=>{
        history.push('/')
    }
    const toLogin =()=>{
        history.push('/login')
    }

    const toRegister =()=>{
        history.push('/register')
    }
    const toHome=()=>{
        history.push('/home')
    }
    const toLCV=()=>{
        history.push('/lcv')
    }
    const toProfile=()=>{
        history.push('/profile')
    }
    const toChat=()=>{
        history.push('/chat')
    }
    const toUpload=()=>{
        history.push('/upload')
    }


    

    useEffect(()=>{
        setLoggedIn(localStorage.getItem("loggedIn"));
        

    }, [localStorage.getItem("loggedIn")]);

    




    return (
        <div className ="NavbarContainer">

            <div className="navbar__search">
                <div className="navbar__left">
                    <img src={lcvHI} className="navbar__image" alt=""/>
                </div>

                <div className="navbar__right">
                    <input placeholder="search" className="navbar__input"></input>
                </div>
            </div>
            

            
            {loggedIn ? (
                
                <>
                
                <div onClick={toHome} className="navbar__icons">
                    <HomeIcon className="navbar__icon"/>
                    <h1>Home</h1>

                </div>
                <div onClick={toLCV} className="navbar__icons">
                    <EqualizerIcon className="navbar__icon"/>
                    <h1>LCV</h1>

                </div>
                <div onClick={toProfile} className="navbar__icons">
                    <TodayOutlined className="navbar__icon"/>
                    <h1>Todo</h1>

                </div>
                <div onClick={toChat} className="navbar__icons">
                    <Description className="navbar__icon"/>
                    <h1>Document</h1>

                </div>
                <div onClick={toUpload} className="navbar__icons">
                    <ChatIcon className="navbar__icon"/>
                    <h1>ChatRoom</h1>

                </div>

                <div onClick={logout} className="navbar__logout">
                    <ExitToApp className="navbar__icon__logout"/>
                    <h1>Logout</h1>

                </div>

                {/* <img src ={offbuttonred} alt="one" className="image1" onClick={logout} id="powerbutton"></img> */}
                
                
                
                </>
            ) : (
                <>
                <div onClick={toWelcome} className="navbar__icons">
                    <BusinessIcon className="navbar__icon"/>
                    <h1>Welcome</h1>
                </div>
               
                <div onClick={toRegister} className="navbar__icons">
                    <LibraryBooksIcon className="navbar__icon"/>
                    <h1>Register</h1>
                </div>
                <div onClick={toLogin} className="navbar__icons">
                    <VpnKeyRoundedIcon className="navbar__icon"/>
                    <h1>Login</h1>
                </div>
                
                </>
                


            )}
           </div>
    );
}

export default Navbar;