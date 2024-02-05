
// import { useState} from "react"
// import "../../App.css"
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// function Edit() {
//     const Navigate = useNavigate();
//     const state={
//       'name':localStorage.getItem('name')
//     }
//     const [user, setUser] = useState({
//         name: "",
//       });

//     const HandaleChange = (e) => {
//         const { name, value } = e.target;
//         console.log(name, value);
//         setUser({
//           ...user,
//           [name]: value,
//         });
//       };


//     const Edit = ()=>{
//         const { name } = user;
//         if(name){
//          axios
//          .put("http://localhost:5858/api/users/edit",user)
//         .then(function(response){
//           console.log(response.data)
//           alert('Updated successfully!!') ;
//           localStorage.setItem('name',response.data.user.name)
//           Navigate("/profile");
//         })
//         .catch(function(err){
//             console.log(err);
//         })
//         }else{
//             alert('please enter your details')
//         }
//         setUser({
//             name:"",
//           });
//     }

//   return (
//     <>
//     <div className="edit-container">
       
//         <input
//         type='text'
//         name='name'
//         placeholder='Enter your name'
//         value={user.name}
//         onChange={HandaleChange}
//         >
//         </input>
//         <button onClick={Edit} className='btn-edit'>Edit</button>
       
//     </div>
    
//     </>
//   )
// }

// export default Edit


// EditProfilePage.jsx

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Edit = ({ updateProfile }) => {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    // Call the updateProfile function passed as a prop with the new name
    updateProfile(name);

    // Redirect to the profile page
    Navigate("/profile")
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Edit;
