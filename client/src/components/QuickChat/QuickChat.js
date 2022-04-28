import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVert from "@material-ui/icons/MoreVert";
import React, { useEffect, useState } from "react";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import "../QuickChat/Chat.css";
import { useParams } from "react-router";
import {db} from "../firebase";
import firebase from 'firebase';

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const {roomId} = useParams();
  const [messages, setMessages] = useState([]);

  const user = localStorage.getItem("username");

  useEffect(()=>{
    if (roomId) {
      db.collection('rooms')
      .doc(roomId)
      .onSnapshot(snapshot => setRoomName
        (snapshot.data().name));

        db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) =>
           doc.data()))

          );

   
    }
  }, [roomId])

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);



  const sendMessage = (e) => {
    e.preventDefault();
    console.log('You typed >>> ', input)

    db.collection('rooms').doc(roomId).collection
    ('messages').add({
      message: input,
      name: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),


    });




    setInput('');

  }

  return (
    <div className="chat__container">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${Math.floor(Math.random() * 5000)}.svg`} />

        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>
            last seen {" "}
          {new Date(
            messages[messages.length - 1]?.timestamp?.toDate()
          ).toUTCString()}
          </p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map(message=>(
          <p className={`chat__message ${message.name === user && 'chat__receiver'}`}>
          
          <span className="chat__name">{message.name}</span>
          {message.message}
          <span className="chat__timestamp">{new Date(message.timestamp?.toDate
            ()).toUTCString()}</span>
        </p>


        ))}

        
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input type="text" placeholder="Type a message" value={input} onChange={(e)=>setInput(e.target.value)}/>
          <button onClick={sendMessage}>Send a message</button>
        </form>
        <MicIcon/>

      </div>
    </div>
  );
}

export default Chat;
