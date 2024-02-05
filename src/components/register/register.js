import React, { useState } from 'react';
import '../../App.css';
import axios from "axios";
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
// import bcrypt from 'bcrypt';
const Register = () => {

  const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
    reEnterPassword:""
  })

  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;


  const HandaleChange = e => {

    const { name, value } = e.target
    console.log(name, value)
    setUser({
      ...user,
      [name]: value
    })
  }

  const registers = async () => {
    const { name, email, password, reEnterPassword } = user
    if (name && email && password && (password === reEnterPassword)) { 
      axios.post("http://localhost:5858/register", user)
      
        .then(function (response) {
          alert('register successfully')
        })
        .catch(function (error) {
          alert('something went wrong')
          console.log(error);
        });
    } else {
      alert("invalid")
    }

    setUser({
      name:"",
      email:"",
      password:"",
      reEnterPassword:""
    })

  }

  return (
    <>
    <div className='Login-container'>
      <div className="register">
        <h1>Rgesister</h1>
        <hr></hr>
        {console.log("User", user)}
        <input type="text" className="input" name="name" value={user.name} placeholder="Enter your name" onChange={HandaleChange}></input>
        <input type="text" className="input" name="email" value={user.email} placeholder="Enter your Email" onChange={HandaleChange}></input>
        <input type={changePassword ? "password" : "text"} className="input" name="password" value={user.password} placeholder="Enter Your Password" onChange={HandaleChange}></input>
        <span className="icon1"
                 onClick={() => {
                    setChangePassword(changeIcon);
                 }}
              >
                 {changeIcon ? <Eye/> : <EyeOff/>}
              </span>
        <input type={changePassword ? "password" : "text"} className="input" name="reEnterPassword" value={user.reEnterPassword} placeholder="re-enter Password" onChange={HandaleChange}></input>
    
        <div  className="button" onClick={registers}>register</div>
        <div className="">or</div>
        <button className="button">
            <a href="/login">Login</a>
          </button>
      </div>
      </div>
    </>
  )
}

export default Register