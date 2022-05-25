import React, { useEffect, useState } from 'react';

const useToken = (user,userInfo) => {
    const [token,setToken] = useState();
    useEffect(()=>{
        const email = user?.user?.email || userInfo?.email;
        
        // const currentUser = {email: email,
        //                      name: userInfo?.name || user?.user?.displayName
        // };
        // console.log(currentUser);
        // if(email){
        //     fetch(`http://localhost:5000/users`,{
        //         method:'POST', 
        //         headers:{
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(currentUser)
        //     })
        //     .then(res=>res.json())
        //     .then(data=>{
        //         console.log(data)
        //     })
        // }
    },[user,userInfo])
    return [token]
};

export default useToken;