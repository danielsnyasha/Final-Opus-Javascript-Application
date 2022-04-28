
import React, { useState, useEffect } from 'react';
import './VD.css';
import Axios from "axios";
import { useHistory } from 'react-router-dom';
import {Image, Video, Transformation, CloudinaryContext, Auto, raw} from 'cloudinary-react';
import documentsImage from '../../pictures/covers/documents.png';


function Vitaldocuments() {

    let history = useHistory();

    const [docName, setDocName] = useState("");
    const [docTitle, setDocTitle] = useState("");
    const [docDate, setDocDate] = useState("");
    const [docFile, setDocFile] = useState([]);

    const [yourUploads, setYourUploads] = useState([]);

  useEffect(() => {
    Axios.get(
      `http://localhost:3008/vdget/${localStorage.getItem("username")}`
    ).then((response) => {
      setYourUploads(response.data);
    });
  },[]);


    const uploadDocs = () => {


        const formData = new FormData();
        formData.append("file", docFile[0]);
        formData.append("upload_preset", "xxbsscn");

        Axios.post(
            'https://api.cloudinary.com/v1_1/dxq9xddzm/auto/upload',
            formData
        ).then((response) => {
            const fileName = response.data.public_id;

            Axios.post("http://localhost:3008/uploaddocs/", {
                docName: docName,
                docTitle: docTitle,
                docDate: docDate,
                docFile: fileName,

                author: localStorage.getItem("username"),
            }).then((response) => {
                history.push('/vitaldocuments')

                console.log(response)
            })
        });
    };


    return (
        <div className="vdContainer">
            <div className="docsContainer">
                <img src={documentsImage} alt="" className="docsImage"></img>
            </div>
            {/* <div className="vdInnerTop">
                <h1 className="vdInnerTopText">Upload And View Vital Company Documents</h1>

            </div> */}
            <div className="vdInnerSecond">
                <input type="text" className="vdInputText" placeholder="Enter Document Name" onChange={(event) => {
                    setDocName(event.target.value);
                }}></input>
                <input type="text" className="vdInputText" placeholder="Enter Document Title" onChange={(event) => {
                    setDocTitle(event.target.value);
                }}></input>
                <input type="text" className="vdInputText" placeholder="Enter Today's Date" onChange={(event) => {
                    setDocDate(event.target.value);
                }}></input>
                <input type="file" className="vdInputFile" placeholder="File" onChange={(event) => {
                    setDocFile(event.target.files);
                }}></input>
                <button className="vdButton" id="vdButtonHover" onClick={uploadDocs}>Submit</button>
            </div>
            <div className="vdInnerContainerDocs">
                <div className="InnerFirstLine"> 
                <h1 className="InnerText">Document Name:</h1>
                <h1 className="InnerText">Document Title:</h1>
                <h1 className="InnerText">Uploaded On:</h1>
                <h1 className="InnerText">File Type:</h1>
                <h1 className="InnerText">Uploaded By:</h1>
                </div>
                {yourUploads.map((val,key)=>{
                return (
                    <div className="InnerFirstLineDocs">
                        <h1 className="InnerText1">{val.docname}</h1>
                        <h1 className="InnerText1">{val.doctitle}</h1>
                        <h1 className="InnerText1">{val.docdate}</h1>
                        <div className="">
                            <Image
                            cloudName = "dxq9xddzm"
                            publicId = {val.docfile}
                            className = "ImageVD"
                            
                            />
                        </div>
                        <h1 className="InnerText1">{val.author}</h1>


                    </div>
                )
            })}

            </div>
            
            
       </div>
    )
}
export default Vitaldocuments;

// {yourUploads.map((val, key) => {
//     return (
//       <div className="Post">
//         <div className="Image">

//           <Image
//             cloudName="dxq9xddzm"
//             publicId={val.image}
//             className="imgProfile"
//           />
//         </div>

//         <div className="Content">
//           <div className="onTop">{val.title}</div>
//           <div className="onBottom">{val.description}</div>
//         </div>
//         <div className="Likes">{val.likes}</div>
//       </div>
//     );
//   })}