import React, { useState, useEffect } from "react";
import {
  AttachFile,
  CalendarViewDay,
  Create,
  Email,
  EventNote,
  Image,
  RadioButtonChecked,
  Subscriptions,
} from "@material-ui/icons";
import "./Home/Home.css";
import { db, storage } from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";



import InputOption from "./HomeComponents/InputOption";
import Post from "./HomeComponents/Post";

function Feed() {
  const [progress, setProgress] = useState(0);
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [imageUrl, url] = useState("");

 

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  });

  

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const fileUploadHandler = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.byteTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },

      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              //sending to the database

              name: localStorage.getItem("username"),
              description: description,
              message: message,
              imageUrl: url || "",
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              
            });

            setProgress(0);
            setImage(null);
            setDescription("");
            setMessage("");
            alert("Sent!")
          });
      }
    );
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
      <progress value={progress} max="100"></progress>
      <div className="feed__input1">
          <Email />
          <form className="feed__forms1">
            <input
              placeholder="Whats Your Email Address"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
           
            
          </form>
        </div>
      
        <div className="feed__input">
          <Create />
          <form className="feed__forms">
            <input
              placeholder="Enter Message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></input>
          </form>
        </div>
        <div className="feed__input1">
          <AttachFile />
          <form className="feed__forms1">
          <input type="file" onChange={handleChange}></input>
        </form>
        </div>
        <div className="feed__input1">
        <RadioButtonChecked/>
       
      <button className="feed__button" type="submit" onClick={fileUploadHandler}>Send</button>
      
      </div>
      </div>
      
      <div className="feed__inputOptions">
        <InputOption title="Photo" Icon={Image} color="70B589" />
        <InputOption title="Video" Icon={Subscriptions} color="#e7a33e" />
        <InputOption title="Event" Icon={EventNote} color="skyblue" />
        <InputOption title="Write article" Icon={CalendarViewDay} color="hotpink" />
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, imageUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            imageUrl={imageUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
