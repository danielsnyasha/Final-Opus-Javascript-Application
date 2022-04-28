import React, { useState, useEffect } from "react";
import {
  AttachFile,
  CalendarViewDay,
  Create,
  Description,
  Email,
  EventNote,
  Gesture,
  GridOn,
  Image,
  PictureAsPdf,
  PostAdd,
  RadioButtonChecked,
  Subscriptions,
} from "@material-ui/icons";
import './HomeComponents/Documents.css';
import { db, storage } from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import InputOption from "./HomeComponents/InputOption";
import PostDoc from "./HomeComponents/PostDoc";
import DocSearch from "./HomeComponents/DocSearch";

function Documents() {
  const [progress, setProgress] = useState(0);
  const [posts, setPosts] = useState([]);
  const [docname, setDocName] = useState("");
  const [document, setDocument] = useState(null);
  const [doctitle, setDocTitle] = useState("");
  const [docUrl, url] = useState("");

 

  useEffect(() => {
    db.collection("mydocuments")
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
      setDocument(e.target.files[0]);
    }
  };

  const fileUploadHandler = () => {
    const uploadTask = storage.ref(`documents/${document.name}`).put(document);

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
          .ref("documents")
          .child(document.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("mydocuments").add({
              //sending to the database

              name: localStorage.getItem("username"),
              doctitle: doctitle,
              docname: docname,
              docUrl: url || "",
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              
            });

            setProgress(0);
            setDocument(null);
            setDocTitle("");
            setDocName("");
            alert("Document Successfully Uploaded!")
          });
      }
    );
  };

  return (
    <div className="documents__cover">
    <div className="documents__cont">
      <div className="documents__inputContainer">
      <progress value={progress} max="100"></progress>
      <div className="documents__input1">
          <PostAdd />
          <form className="feed__forms1">
            <input
              placeholder="Whats The Document Title"
              type="text"
              value={doctitle}
              onChange={(e) => setDocTitle(e.target.value)}
            ></input>
           
            
          </form>
        </div>
      
        <div className="documents__input">
          <Create />
          <form className="feed__forms">
            <input
              placeholder="Enter Document Name"
              type="text"
              value={docname}
              onChange={(e) => setDocName(e.target.value)}
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
        <InputOption title="PDF" Icon={PictureAsPdf} color="#73171e" />
        <InputOption title="DWG" Icon={Gesture} color="Green" />
        <InputOption title="DOCUMENT" Icon={Description} color="blue" />
        <InputOption title="EXCEL" Icon={GridOn} color="darkgreen" />
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, doctitle, docname, docUrl,timestamp, document, posts } }) => (
          <PostDoc
            key={id}
            name={name}
            doctitle={doctitle}
            docname={docname}
            docUrl={docUrl}
            timestamp={timestamp}
            document={document}
            posts={posts}
          />
        ))}
      </FlipMove>
    </div>
    <DocSearch/>

    
    </div>

    
  );
}

export default Documents;