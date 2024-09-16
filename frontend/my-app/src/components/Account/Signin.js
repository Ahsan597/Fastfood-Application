import React, { useState, useEffect } from 'react'
// import Visibility from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { connect } from "react-redux";
import './Signin.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
// import { TableBody } from '@material-ui/core';
// import Useraccount from './Useraccount';
import { Redirect } from "react-router";
import Visibility from '@mui/icons-material/Visibility';


export default function Signin(props) {

    const [email, setEmail] = useState("");
    const [passwordshow1, setPasswordshow1] = useState(false)
    const [password, setPassword] = useState("");
    const [passerror, setPasserror] = useState(false);
    const [loger, setLoger] = useState("");
    const [emailerror, setEmailerror] = useState(false);
    // const [notmatched, setNotmatched] = useState(false);
    // const [emailerror3, setEmailerror3] = useState("email or password is in-valid");
    const [helperText2, setHelperText2] = useState();
    const [helperText3, setHelperText3] = useState();


    const navigate = useNavigate();
    const submithandler =() => {
        axios.post('http://localhost:4000/signup/postsignin', {
            email: email,
            password: password
        })
            .then(response => {
                console.log("response.status: ","everything okay" );
                // const json =  response.json()
                // localStorage.setItem("authToken", json.authToken)
                // console.log(localStorage.getItem("authToken"))
                navigate("/");
            })
            .catch(error => {
                console.log("error: --------", error)
            });
    }
    useEffect(() => {
        if (email.length < 1) {
            setEmailerror(true);
            setHelperText3("must enter email")
        }
        else if (email.indexOf("@gmail.com") === -1) {
            setEmailerror(true);
            setHelperText3("email is invalid")
        }
        else {
            setEmailerror(false);
            setHelperText3("")
        }
        if (password.length > 0 && password.length < 8) {
            setPasserror(true);
            setHelperText2("password must be of eight characters ")
        }
        else if (password.length < 1) {
            setPasserror(true);
            setHelperText2("must enter password ")
        }
        else if (password.length == 8) {
            setPasserror(false)
            setHelperText2("")
        }
    }, [password, email])

    const handleChange = (func, value) => {
        func(value)
    }

  return (
    <div>
      <div className="modal2">
                <h3 className="loginerror">{loger}</h3>
                <div className='modal-content2'>
                    <h2 className="signintext">Sign In</h2>
                
                <div className="formsign" autoComplete="off" >
                    
                    <p className="mm">Enter email or phone no:</p><br></br>
                    <TextField
                        error={emailerror}
                        type="text"
                        name="email"
                        value={email}
                        onChange={e => handleChange(setEmail, e.target.value)}
                        id="standard-error-helper-text"
                        helperText={helperText3}
                    /><br></br>
                    <p className="mm">Enter password:</p><br></br>
                    <TextField
                        error={passerror}
                        type={passwordshow1 ? "text" : "password"}
                        name="pass"
                        onChange={e => handleChange(setPassword, e.target.value)}
                        id="standard-error-helper-text"
                        helperText={helperText2}
                    />
                    {passwordshow1 ? <Visibility className="btnsh2" onClick={() => setPasswordshow1(false)} /> : <VisibilityOffIcon className="btnsh" onClick={() => setPasswordshow1(true)} />}
                    <br></br>
                    <button className="BTN" disabled={emailerror === true || passerror === true} onClick={submithandler} >Log In</button>
                    <Link to="/signup" className='newacc'><h6>Create new account</h6></Link>
                </div>
            </div>
            </div>
    </div>
  );
}
