import React, { useState } from "react";
import "./Login/Login.css";
import Axios from "axios";
import myLogo from "./pictures/lcvpng.png";
import { useHistory } from "react-router-dom";
import LCVlogin from './newpictures/lcv1.png'

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();

  const registration =()=>{
    history.push("/register")
  }

  const login = () => {
    

    Axios.post("http://localhost:3008/api/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.loggedIn) {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("username", response.data.username);
        history.push("/lcv");
        alert("successful login")
      } else {
        setErrorMessage(response.data.message);
        alert(errorMessage);
      }
    });
};




  return (
    <div className="login__body">

    <div className="loginpage">
      <img src={LCVlogin} alt=""></img>

      <form>
        <input placeholder="Enter Username" type="text"
        onChange={(event)=>{
          setUsername(event.target.value);
        }}></input>

        <input placeholder="Enter Password" type="password"
        onChange={(event)=>{
          setPassword(event.target.value);
        }}></input>

  

        <button type="submit" onClick={login}>Login</button>
      </form>
      <p>Not a member? {' '}
                <span className="login__register" onClick={registration}>Register Now</span>
      </p>

      <p>{errorMessage}</p>


    </div>
    </div>
  )
      }





export default Login;
