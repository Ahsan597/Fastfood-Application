import React, { useEffect, useState } from 'react';
import "./Signup.css";
import TextField from '@mui/material/TextField';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

export default function Signup({onClose}) {
    const [email, setEmail] =useState('');
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] =useState('');
    const [password1, setPassword1] =useState('');
    const [emailerror, setEmailerror] =useState(false);
    const [passworderror, setPassworderror] =useState(false);
    const [password1error, setPassword1error] =useState(false);
    const [helpertext, setHelpertext] =useState('');
    const [helpertext1, setHelpertext1] =useState('');
    const [helpertext2, setHelpertext2] =useState('');
    const [passwordshow, setPasswordshow] = useState(false)
    const [passwordshow1, setPasswordshow1] = useState(false)

    const submithanlder = (e) => {
        // e.prevent.default()
        axios.post('http://localhost:4000/signup/postsignup', {
            email,
            password
        })
            .then(response => { 
                console.log(response)
                console.log('Signup successful:');
                // Redirect the user to the home page after successful signup
                // navigate('/');
            })
            .catch(error => {
                console.log(error)
                setEmailError(error)
                // console.error('Error signing up:', error);
            });
    }

    useEffect(()=>{
        if (email.length < 1) {
            setEmailerror(true);
            setHelpertext("must enter email")
        }
        else if (email.indexOf("@gmail.com") === -1) {
            setEmailerror(true);
            setHelpertext("email is invalid")
        }
        else {
            setEmailerror(false);
            setHelpertext("")
        }
        if (password.length > 0 && password.length < 8) {
            setPassworderror(true);
            setHelpertext1("password must be of eight characters ")
        }
        else if (password.length < 1) {
            setPassworderror(true);
            setHelpertext1("must enter password ")
        }
        else if (password.length == 8) {
            setPassworderror(false)
            setHelpertext1("")
        }
        if (password1 != password) {
            setPassword1error(true,);
            setHelpertext2("password doesnot match ")
        }
        else if (password1.length < 1) {
            setPassword1error(true);
            setHelpertext2("not match ")
        }
        else {
            setPassword1error(false)
            setHelpertext2("")
        }

    }, [ email, password, password1])
    const handleChange = (func, value) => {
        func(value)
    }

  return (
    <div className='modal1'>
      <div className="modal-content1">
        <h5 className='coloracc'>Create Account</h5>
        <div className='form' autoComplete="off">
                        <p className="na">Enter email:</p><br></br>
                        <TextField
                            error={emailError.length>0}
                            type="text"
                            name="email"
                            value={email}
                            onChange={e => {
                                handleChange(setEmail, e.target.value)}}
                            id="standard-error-helper-text"
                            helperText={emailError}
                        /><br></br>
                        <p className="na">Enter Password:</p><br></br>
                        <TextField
                            error={passworderror}
                            type={passwordshow ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={e => handleChange(setPassword, e.target.value)}
                            id="standard-error-helper-text"
                            helperText={helpertext1}
                        />{passwordshow ? <VisibilityIcon className="btnsh" onClick={() => setPasswordshow(false)} /> : <VisibilityOffIcon className="btnsh" onClick={() => setPasswordshow(true)} />}<br/>
                        <p className="na">Enter Password again:</p><br></br>
                        <TextField
                            error={password1error}
                            type={passwordshow1 ? "text" : "password"}
                            name="password1"
                            value={password1}
                            onChange={e => handleChange(setPassword1, e.target.value)}
                            id="standard-error-helper-text"
                            helperText={helpertext1}
                        />
                         {passwordshow1 ? <VisibilityIcon className="btnsh" onClick={() => setPasswordshow1(false)} /> : <VisibilityOffIcon className="btnsh" onClick={() => setPasswordshow1(true)} />}<br/>
                        <button className='btn BTN' disabled={emailerror===true || passworderror===true ||password1error===true} onClick={submithanlder} >Enter</button>
                        <p><Link className='alreadysignin' to="/signin">Already have account?Signin</Link></p>
        </div>
      </div>
      
    </div>
  );
}
