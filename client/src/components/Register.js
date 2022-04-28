import React, { useState } from "react";
import "./Register/Register.css";
import Axios from "axios";
// import { useHistory } from 'react-router-dom';
import myLogo from "./pictures/lcvpng.png";
import LCVlogin from '../components/newpictures/LCVlogin.png'
import { useHistory } from "react-router-dom";

export default function Register() {
  // let history = useHistory()

  let history = useHistory();

  const loginpage =()=>{
    history.push("/login")
  }


  const [errorMessage, setErrorMessage] = useState("");
  

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const register = () => {
    // history.push('/login')
    Axios.post("http://localhost:3008/api/register", {
      username: username,
      password: password,
      confirmpassword: confirmpassword,
      email: email,
    }).then((response) => {
      setErrorMessage(response.data.message);
      console.log(response);
      alert(errorMessage);
    });
  };

  return (

    <div className="login__body">

    <div className="loginpage">
      <img src={LCVlogin} alt=""></img>

      <form>
        <input placeholder="Enter Email"
         onChange={(event)=>{
           setEmail(event.target.value);
          }}></input>

        <input placeholder="Enter Username" type="text"
        onChange={(event)=>{
          setUsername(event.target.value);
        }}></input>

        <input placeholder="Enter Password" type="password"
        onChange={(event)=>{
          setPassword(event.target.value);
        }}></input>

        <input placeholder="confirm password" type="password"
        onChange={(event)=>{
          setConfirmPassword(event.target.value);
        }}></input>

        <button type="submit" onClick={register}>Register</button>
      </form>
      <p>Already a Member? {' '}
                <span className="login__register" onClick={loginpage}>Login Now</span>
      </p>

      <p>{errorMessage}</p>


    </div>
    </div>
  )
      }


