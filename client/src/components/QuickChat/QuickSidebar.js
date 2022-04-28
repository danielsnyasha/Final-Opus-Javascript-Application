import React, { useEffect, useState } from 'react';
import './QuickSidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLarge from '@material-ui/icons/DonutLarge';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';

import {db} from '../firebase';


function Quicksidebar() {

    const [rooms, setRooms] = useState ([]);
    const user = localStorage.getItem("username");
    

    useEffect(()=> {
        const unsubscribe = db.collection("rooms").onSnapshot((snapshot)=>

            setRooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data:doc.data(),


                }))
                   
            )
        );
        return ()=>{
            unsubscribe();
        }

    }, []);


    return (
        <div className="quick__sidebar">
            <div className="quick__sidebar__header">
                <Avatar src={user?.photoURL}/>
                <div className="quick__sidebar__headerRight">
                    <IconButton>
                    <DonutLarge />
                    </IconButton>
                    <IconButton>
                    <MessageIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                </div>

            </div>
            <div className="quick__sidebar__search">
                <div className="quick__sidebar__searchContainer">
                <SearchOutlined/>
                <input placeholder = "Search or start new chat" type="text" />
                </div>

            </div>
            <div className="quick__sidebar__chats">

                <SidebarChat addNewChat/>
               {rooms.map(room => (
                   <SidebarChat key={room.id} id={room.id}
                   name = {room.data.name}/>
               ))}
                
                
            </div> 
        
            
        </div>
    )
}

export default Quicksidebar;
