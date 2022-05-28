import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const MyProfile = () => {

    const navigate = useNavigate();
    const handleNavigate= () => {
        navigate('/dashboard/updateProfile')
    }
    const [user] = useAuthState(auth);
    
    const [userInfo,setUserInfo]= useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/user/${user.email}`)
        .then(res=> res.json())
        .then(data=> setUserInfo(data))
    },[user])
    const {name,img,email,address}= userInfo;
    return (
       <div>
           <h1 className="text-center text-5xl font-bold text-primary my-5 mb-10">My Profile</h1>
           <div className="flex justify-center items-center">
               <div className="mt-8">
                  <div class="avatar">
                    <div class="w-24 rounded mb-5">
                        <img src={img} alt='' />
                    </div>
                </div>
                <h1 className="text-xl">Name: {name}</h1>
                <h4 className="text-xl">Email: {email}</h4>
                <h4 className="text-xl">Address: {address}</h4>
                <button onClick={handleNavigate} className="btn btn-accent text-white mt-12">Edit Profile</button>
            </div>

           </div>
           
       </div>
    );
};

export default MyProfile;